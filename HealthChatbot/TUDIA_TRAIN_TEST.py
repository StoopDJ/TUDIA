#!/usr/bin/env python
# coding: utf-8

# Code Ref:
# Pytorch Ref: https://www.python-engineer.com/posts/chatbot-pytorch/
# LINK Ref:https://github.com/AnujCodeZ/ChatBot-Simple/blob/master/nltk_utils.py

# importaing all pakcages here
import json
import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np
from nltk_utils import bag_of_words

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader


from nnet import NeuralNet
import pandas as pd
import numpy as np
import sklearn
import pickle
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier

from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC

from sklearn.ensemble import StackingClassifier
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedStratifiedKFold


# declaring our arrays, we need 3 arrays, for words,tags,xy
all_words = []
tags = []
xy = []

# create training data array
X_train = []
y_train = []

# create test data array
X_test = []
y_test = []

# read in/load in data from our JSON file
# tried DUMP method but load works better as it is a JSON file.
with open('health_intents.json', 'r') as file:
    intents = json.load(file)

# loop through all of the intents, filter tags and patterns of each intent
for intent in intents['intents']:
    tag = intent['tag']
    tags.append(tag)
    for pattern in intent['patterns']:
        i = nltk.word_tokenize(pattern)
        all_words.extend(i)
        xy.append((i, tag))

print(xy)


# synthetic dataset created for neural network validation

# 15 different HEALTH problems
xy_test = [

    (['suffer', 'from', 'anxeity'], 'anxiety'),
    (['bloody', 'poop'], 'bloody_stool'),
    (['side', 'weaker'], 'weakness_of_one_body_side'),
    (['throat', 'hurts'], 'throat_irritation'),
    (['extremities', 'swelling'], 'swollen_extremeties'),
    (['swollen', 'lymph', 'nodes'], 'swelled_lymph_nodes'),
    (['dark', 'under', 'eyes'], 'sunken_eyes'),
    (['sneeze'], 'continuous_sneezing'),
    (['coughing'], 'cough'),
    (['skin', 'bruised'], 'bruising'),
    (['Burning', 'sensation'], 'burning_micturition'),
    (['chest', 'pressure'], 'chest_pain'),
    (['pain', 'butt'], 'pain_in_anal_region'),
    (['heart', 'bad', 'beat'], 'palpitations'),
    (['fart', 'lot'], 'passage_of_gases'),

]

# Checking the lenght of xy_test
len(xy_test)


# Checking and looping through our words

# LINK Ref: https://www.nltk.org/howto/stem.html
stemmer = PorterStemmer()

# ignoring the following words
ignore_words = ['?', '!', '.', ',']

# loop through all the words
all_words = [stemmer.stem(w.lower()) for w in all_words]
# remove duplicates and sort
all_words = sorted(set(all_words))
print(all_words)


# sort the tags now
tags = sorted(set(tags))
print(tags)

# test case from our Link Ref

"""
    return bag of words array:
    1 for each known word that exists in the sentence, 0 otherwise
    example:
    sentence = ["hello", "how", "are", "you"]
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
    bag   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
    """

sentence = ['hello', 'how' 'are', 'you']
words = ['hi', 'hello', 'I', 'you', 'bye', 'thanks', 'cool']
bag_of_words(sentence, words)

# Training bag of words
for (pattern, tag) in xy:

    # X: bag of words for each pattern_sentence
    bag = bag_of_words(pattern, all_words)
    X_train.append(bag)

    # y: PyTorch CrossEntropyLoss needs only class labels, not one-hot

    label = tags.index(tag)
    y_train.append(label)

X_train = np.array(X_train)
y_train = np.array(y_train)

# Print the X_train
print(X_train)

# Print the y_train
print(y_train)


# Testing bag of words
for (pattern, tag) in xy_test:
    bag = bag_of_words(pattern, all_words)
    X_test.append(bag)

    label = tags.index(tag)
    y_test.append(label)

X_test = np.array(X_test)
y_test = np.array(y_test)

# Print x
print(X_test)

# print y
print(y_test)

batch_size = 8
hidden_size = 8
output_size = len(tags)
input_size = len(all_words)
learning_rate = 0.01
num_epochs = 1000


class ChatDataset(Dataset):
    def __init__(self, X_data, y_data):
        self.n_samples = len(X_data)
        self.X_data = X_data
        self.y_data = y_data
    # support indexing such that dataset[i] can be used to get i-th sample

    def __getitem__(self, index):
        return self.X_data[index], self.y_data[index]
     # we can call len(dataset) to return the size

    def __len__(self):
        return self.n_samples


dataset = ChatDataset(X_train, y_train)
train_loader = DataLoader(
    dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=2)

# Using CPU instead of GPU
device = torch.device('cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device)

# Code Ref: https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html
# loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.ASGD(model.parameters(), lr=learning_rate)


# Code Ref: https://discuss.pytorch.org/t/training-time-gradually-increases-per-epoch/126748
for epoch in range(num_epochs):
    for (words, labels) in train_loader:
        words = words.to(device)
        labels = labels.to(device)

        outputs = model(words)
        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch + 1) % (num_epochs / 10) == 0:
        print(f'epoch {epoch + 1}/{num_epochs}, loss = {loss.item():.4f}')

print(f'final loss = {loss.item():.4f}')

data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "output_size": output_size,
    "hidden_size": hidden_size,
    "words": all_words,
    "tags": tags
}

# Saving our Trained Model as .pth file
FILE = "models/data.pth"
torch.save(data, FILE)

# Print training is finished
print(f'training complete. file saved to {FILE}')

#################################################################### TEST 1 - Symptom Prediction ################################################################################

Phrase = "My head hurts"
Phrase = nltk.word_tokenize(Phrase)
X = bag_of_words(Phrase, all_words)
X = X.reshape(1, X.shape[0])
X = torch.from_numpy(X)

output = model(X)
_, predicted = torch.max(output, dim=1)
tag = tags[predicted.item()]

probs = torch.softmax(output, dim=1)
prob = probs[0][predicted.item()]

print("prob:", prob)

print(tag)

############################################################################ END of TEST 1 #######################################################################################

# loading dataset
df = pd.read_csv("data/dataset.csv")

# Informtation of the dataset columns
df.info()

# drop duplicated then print again
df = df.drop_duplicates()
print(df)

# Link Ref: https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html

symptoms = np.concatenate((df.Symptom_1.unique(), df.Symptom_2.unique(), df.Symptom_3.unique(), df.Symptom_4.unique(),
                          df.Symptom_5.unique(), df.Symptom_6.unique(
), df.Symptom_7.unique(), df.Symptom_8.unique(),
    df.Symptom_9.unique(), df.Symptom_10.unique(
), df.Symptom_11.unique(), df.Symptom_12.unique(),
    df.Symptom_13.unique(), df.Symptom_14.unique(
), df.Symptom_15.unique(), df.Symptom_16.unique(),
    df.Symptom_17.unique()))
symptoms_unique = list((set(symptoms)))
len(symptoms_unique)

# Code Ref: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.insert.html
i = 18
for each in (symptoms_unique):
    df.insert(i, each, 0)
    i = i + 1

df = df.fillna(0)


for index, row in df.iterrows():
    disease_symptoms = [symptom for symptom in list(row)[1:] if symptom != 0]
    for each in disease_symptoms:
        df.at[index, each] = 1


df = df.drop(columns=['Symptom_1', 'Symptom_2', 'Symptom_3', 'Symptom_4', 'Symptom_5', 'Symptom_6', 'Symptom_7', 'Symptom_8',
             'Symptom_9', 'Symptom_10', 'Symptom_11', 'Symptom_12', 'Symptom_13', 'Symptom_14', 'Symptom_15', 'Symptom_16', 'Symptom_17'])

df = df.loc[:, df.columns.notnull()]
df.columns = df.columns.str.replace(' ', '')
df = df.reindex(sorted(df.columns), axis=1)

list(df.columns)


# load the data here
Description = pd.read_csv("data/Description.csv")

# Link Ref: https://stackoverflow.com/questions/40950310/strip-trim-all-strings-of-a-dataframe
Description['Disease'] = Description['Disease'].apply(
    lambda x: x.lower().strip(" "))

# print
Description


# load the data here
Precaution = pd.read_csv("data/Precaution.csv")

# Link Ref: https://stackoverflow.com/questions/40950310/strip-trim-all-strings-of-a-dataframe
Precaution['Disease'] = Precaution['Disease'].apply(
    lambda x: x.lower().strip(" "))

# print
Precaution


# load the data here
Severity = pd.read_csv("data/Severity.csv")

# Link Ref: https://stackoverflow.com/questions/40950310/strip-trim-all-strings-of-a-dataframe
Severity = Severity.applymap(lambda s: s.lower().strip(
    " ").replace(" ", "") if type(s) == str else s)

# print
Severity


# Code Ref: https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_numpy.html
labels = df.to_numpy()[:, :1]
examples = df.to_numpy()[:, 1:]
list_of_symptoms = list(df.columns)[1:]

# Code Ref: https://docs.python.org/3/library/pickle.html
# Dumping all into pickle
with open('data/symptomsList.pickle', 'wb') as data_file:
    pickle.dump(list_of_symptoms, data_file)

print(len(labels))
print(len(examples))
print(len(list_of_symptoms))


# test
symptoms = ['runny_nose', 'redness_of_eyes']
x_test = []

# Using our pickle model from previous step
with open('data/symptomsList.pickle', 'rb') as data_file:
    symptoms_list = pickle.load(data_file)

for each in symptoms_list:
    if each in symptoms:
        x_test.append(1)
    else:
        x_test.append(0)

x_test = np.asarray(x_test)


# Cross validation function
# Code Ref: https://scikit-learn.org/stable/modules/cross_validation.html
def cross_validation(X_train, y_train, X_test, y_test, model_name, parameter_range=50):
    train_errors = []
    test_errors = []

    parameters = np.linspace(1, parameter_range, parameter_range, dtype=int)

# lets check few of the Methods Such As: KNN, Logistic Regression, Decision Tree Classifier, SVM

# KNN: https://www.edureka.co/blog/k-nearest-neighbors-algorithm/
# LogisticRegression: https://www.tutorialspoint.com/logistic_regression_in_python/logistic_regression_in_python_tutorial.pdf
# Decision Tree Classifier: https://www.researchgate.net/publication/23581963_The_decision_tree_classifier_-_Design_and_potential
# SVM: http://www.science.smith.edu/~jcrouser/SDS293/labs/2016/lab15/Lab%2015%20-%20Support%20Vector%20Machines%20in%20Python.pdf
    for parameter in parameters:
        #
        if model_name == 'knn':
            # Code Ref: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html
            model = KNeighborsClassifier(
                n_neighbors=parameter, metric='cosine')

        elif model_name == 'logreg':
            # Code Ref: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
            model = LogisticRegression(solver='liblinear', C=1/(parameter*20))

        elif model_name == 'dctree':
            # Code Ref: https://scikit-learn.org/stable/modules/tree.html#:~:text=Decision%20Trees%20(DTs)%20are%20a,as%20a%20piecewise%20constant%20approximation.
            model = DecisionTreeClassifier(
                splitter='random', max_depth=parameter)

        elif model_name == 'svm':
            # Code Ref: https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html
            model = SVC(C=1/(parameter*10))

        # fitting the model
        model.fit(X_train, y_train)

        # Model error score
        learning_error = 1 - model.score(X_train, y_train)
        testing_error = 1 - model.score(X_test, y_test)
        train_errors.append(learning_error)
        test_errors.append(testing_error)

    if model_name == 'logreg':
        best_parameter_value = 1/(parameters[np.argmin(test_errors)]*20)
    elif model_name == 'svm':
        best_parameter_value = 1/(parameters[np.argmin(test_errors)]*10)
    else:
        best_parameter_value = parameters[np.argmin(test_errors)]

    return parameters, best_parameter_value, train_errors, test_errors

############################################################################################# KNN TEST #######################################################################
# kNN algorithm


knn = KNeighborsClassifier(n_neighbors=6, metric='cosine')
X_train, X_test, y_train, y_test = train_test_split(
    examples, labels.ravel(), test_size=0.2)
knn.fit(X_train, y_train)


disease = knn.predict(x_test.reshape(1, -1))[0]
print(disease)


knn.score(X_test, y_test)


# Additional information about disease and precautions

description = Description.loc[Description['Disease'] == disease.strip(
    " ").lower(), 'Description'].iloc[0]
print(description)

precaution = Precaution[Precaution['Disease'] == disease.strip(
    " ").lower()]
sentence = 'Precautions: ' + precaution.Precaution_1.iloc[0] + ", " + precaution.Precaution_2.iloc[0] + \
    ", " + precaution.Precaution_3.iloc[0] + \
    ", " + precaution.Precaution_4.iloc[0]
print(sentence)


# Giving the advice about seeing the doctor if any of the symptoms has severity larger than 5 or if mean of all the symptoms is larger than 4

symptoms = ['runny_nose', 'redness_of_eyes']
severity = []

for each in symptoms:
    severity.append(Severity.loc[Severity['Symptom'] == each.lower(
    ).strip(" ").replace(" ", ""), 'weight'].iloc[0])

if np.mean(severity) > 4 or np.max(severity) > 5:
    print("Considering your symptoms are severe, and TUDIA isn't a real doctor, you should consider talking to one. :)")


k_range = 20

fig = plt.figure(figsize=(10, 4))


k, best_k, train_errors, test_errors = cross_validation(
    X_train, y_train, X_test, y_test, model_name='knn')
plt.title(f"k = {best_k}")
plt.plot(k, train_errors, c='green', label='Training error')
plt.plot(k, test_errors, c='red', label='Testing error')
plt.legend()

plt.show()

##############################################################################################################################################################################

########################################################################################## Decision TEST #####################################################################
# Decision Tree


clf = DecisionTreeClassifier(splitter='random', max_depth=100)

dc_tree = clf.fit(X_train, y_train)
dc_tree.predict(x_test.reshape(1, -1))


dc_tree.score(X_test, y_test)


fig = plt.figure(figsize=(10, 4))

depth, best_depth, train_errors, test_errors = cross_validation(
    X_train, y_train, X_test, y_test, model_name='dctree')
plt.title(f" depth = {best_depth}")
plt.plot(depth, train_errors, c='green', label='Training error')
plt.plot(depth, test_errors, c='red', label='Testing error')
plt.legend()

plt.show()

##############################################################################################################################################################################

########################################################################################## Logistic TEST #####################################################################
# Logistic Regression


logreg = LogisticRegression(solver='liblinear', C=0.05)

logreg.fit(X_train, y_train)
logreg.predict(x_test.reshape(1, -1))


print(logreg.score(X_test, y_test))


fig = plt.figure(figsize=(10, 4))

c, best_c, train_errors, test_errors = cross_validation(
    X_train, y_train, X_test, y_test, model_name='logreg')
c_reg = []
for each in c:
    c_reg.append(1/(each*20))
plt.title(f"C = {best_c}")
plt.plot(c_reg, train_errors, c='green', label='Training error')
plt.plot(c_reg, test_errors, c='red', label='Testing error')
plt.legend()

plt.show()


##############################################################################################################################################################################

############################################################################################ SVM TEST ########################################################################
# Support Vector Machine (SVM)


svm = SVC(C=0.3)
svm.fit(X_train, y_train)
svm.predict(x_test.reshape(1, -1))


print(svm.score(X_test, y_test))


fig = plt.figure(figsize=(10, 4))

c, best_c, train_errors, test_errors = cross_validation(
    X_train, y_train, X_test, y_test, model_name='svm')
c_reg = []
for each in c:
    c_reg.append(1/(each*10))
plt.title(f"C = {best_c}")
plt.plot(c_reg, train_errors, c='green', label='Training error')
plt.plot(c_reg, test_errors, c='red', label='Testing error')
plt.legend()

plt.show()


##############################################################################################################################################################################

############################################################################################ Ensemble the Models #########################################################################

# combining the predictions from two or more models by using Ensemble methods

# Code Ref: https://scikit-learn.org/stable/modules/cross_validation.html
def evaluate_model(model, X, y):
    cv = RepeatedStratifiedKFold(n_repeats=3, random_state=1)
    scores = cross_val_score(
        model, X, y, scoring='accuracy', cv=cv, n_jobs=-1, error_score='raise')
    return scores


# Stacking all the models together here
# code ref: https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python/
# code ref: https://python-course.eu/machine-learning/neural-networks-with-scikit.php
# Level0 is the  Base-Models: these Models fit on the training data and whose predictions are compiled.
# Level1 is the  Meta-Model: these Model that learns how to best combine the predictions of the base models.
def get_stacking():
    level0 = list()
    level0.append(('KNN', KNeighborsClassifier(
        n_neighbors=6, metric='cosine')))

    level0.append(('IR', LogisticRegression(solver='liblinear', C=0.03)))

    level0.append(('DT', DecisionTreeClassifier(
        splitter='random', max_depth=34)))

    level0.append(('SVM', SVC(C=0.1)))

    level1 = LogisticRegression()

    model = StackingClassifier(estimators=level0, final_estimator=level1, cv=5)
    return level0, model


models, model = get_stacking()
results, names = list(), list()

for each in models:
    scores = evaluate_model(each[1], examples, labels)
    results.append(scores)
    names.append(each[0])
    print('%s %f (%f)' % (each[0], np.mean(scores), np.std(scores)))

plt.boxplot(results, labels=names, showmeans=True)

box = plt.boxplot(results, showfliers=False)

for _, line_list in box.items():
    for line in line_list:
        line.set_color('blue')

plt.show()

##############################################################################################################################################################################


# Using pickle for dumping the model
# Save our new model with pickle

model.fit(examples, labels.ravel())

# Dump everything in pickle
with open('models/model.pickle', 'wb') as modelFile:
    model_final = pickle.dump(model, modelFile)
