import json
import pickle
import random
from datetime import datetime

import nltk
import numpy as np
import pandas as pd
import torch
import torch.nn as nn
from flask import Flask, jsonify, render_template, request
from nltk.stem.porter import PorterStemmer

stemmer = PorterStemmer()


def bag_of_words(tokenized_sentence, all_words):
    tokenized_sentence = [stemmer.stem(w.lower()) for w in tokenized_sentence]

    bag = np.zeros(len(all_words), dtype=np.float32)
    for idx, w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[idx] = 1.0

    return bag

# Fully connected neural network with three hidden layer


class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.l1 = nn.Linear(input_size, hidden_size)
        self.l2 = nn.Linear(hidden_size, hidden_size)
        self.l3 = nn.Linear(hidden_size, num_classes)
        self.relu = nn.ReLU()  # activation function

    def forward(self, x):
        out = self.l1(x)
        out = self.relu(out)
        out = self.l2(out)
        out = self.relu(out)
        out = self.l3(out)
        # no activation and no softmax, cross entropy loss applies that for us
        return out


random.seed(datetime.now())

device = torch.device('cpu')
FILE = "models/data.pth"
model_data = torch.load(FILE)

input_size = model_data['input_size']
hidden_size = model_data['hidden_size']
output_size = model_data['output_size']
all_words = model_data['all_words']
tags = model_data['tags']
model_state = model_data['model_state']

nlp_model = NeuralNet(input_size, hidden_size, output_size).to(device)
nlp_model.load_state_dict(model_state)
nlp_model.eval()

Description = pd.read_csv("data/Description.csv")
Description['Disease'] = Description['Disease'].apply(
    lambda x: x.lower().strip(" "))

Precaution = pd.read_csv("data/Precaution.csv")
Precaution['Disease'] = Precaution['Disease'].apply(
    lambda x: x.lower().strip(" "))

Severity = pd.read_csv("data/Severity.csv")
Severity = Severity.applymap(
    lambda s: s.lower().strip(" ").replace(" ", "") if type(s) == str else s)


with open('data/symptomsList.pickle', 'rb') as data_file:
    symptoms_list = pickle.load(data_file)

with open('models/model.pickle', 'rb') as modelFile:
    prediction_model = pickle.load(modelFile)

User_Request = set()

app = Flask(__name__)


def GET_Symptom(sentence):
    sentence = nltk.word_tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X)

    output = nlp_model(X)
    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    prob = prob.item()

    return tag, prob

# app.route() has been added to handle both GET and POST requests


@app.route('/')
def index():
    data = []
    User_Request.clear()
    file = open("static/assets/files/symptoms.txt", "r")
    all_symptoms = file.readlines()
    for s in all_symptoms:
        data.append(s.replace("'", "").replace("_", " ").replace(",\n", ""))
    data = json.dumps(data)

    return render_template('index.html', data=data)

# app.route() has been added to handle both GET and POST requests


@app.route('/symptom', methods=['GET', 'POST'])
def Prediction():

    x_test = []
    severity = []

    print(request.json)

    sentence = request.json['sentence']
    if sentence.replace(".", "").replace("!", "").lower().strip() == "finish":

        if not User_Request:
            BOT_Response = random.choice(
                ["Whoops, I can't know what disease you may have if you don't enter any symptoms :)",
                 "Oh nooo, you forgot to enter your symptoms",
                 "Please enter some symptoms!"])
        else:

            for each in symptoms_list:
                if each in User_Request:
                    x_test.append(1)
                else:
                    x_test.append(0)

            x_test = np.asarray(x_test)

            disease = prediction_model.predict(x_test.reshape(1, -1))[0]
            print(disease)

            description = Description.loc[Description['Disease'] == disease.strip(
                " ").lower(), 'Description'].iloc[0]

            precaution = Precaution[Precaution['Disease'] == disease.strip(
                " ").lower()]

            precautions = 'Precautions: ' + \
                precaution.Precaution_1.iloc[0] + ", " + precaution.Precaution_2.iloc[0] + \
                ", " + precaution.Precaution_3.iloc[0]

            BOT_Response = "<b>Predicted Disease: " + disease + \
                ". <br><br> <i>Description: " + description + "<br><br>" + precautions + "</b>"

            for each in User_Request:

                severity.append(Severity.loc[Severity['Symptom'] == each.lower(
                ).strip(" ").replace(" ", ""), 'weight'].iloc[0])

            if np.mean(severity) > 4 or np.max(severity) > 5:
                BOT_Response = BOT_Response + \
                    "<br><br>TUDIA isn't a real Doctor, it is only a Chatbot. You should consider talking a real Doctor soon."

            User_Request.clear()
            severity.clear()

    else:
        symptom, prob = GET_Symptom(sentence)

        print("Symptom:", symptom, ", prob:", prob)

        if prob > .5:
            BOT_Response = "Hmm, Any other symptoms other than " + \
                symptom + "?"
            User_Request.add(symptom)
        else:
            BOT_Response = "Sorry, I am only able to answer questions relating to health issues"

        print("User symptoms:", User_Request)

    return jsonify(BOT_Response.replace("_", " "))

# run the flask
if __name__ == "__main__":
    app.run()
