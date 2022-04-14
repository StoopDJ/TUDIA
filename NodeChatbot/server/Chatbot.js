// dependencies and packages for NLP
let { NlpManager } = require("node-nlp");
let manager = new NlpManager({ languages: ["en"] });

// 1 - Train the IA
async function BotTraining() {
  return new Promise(async (resolve, reject) => {
    // Adds the utterances and intents for the NLP
    // // Train also the NLG
    // Adds the utterances and intents for the NLP
    manager.addDocument("en", "goodbye for now", "greetings.bye");
    manager.addDocument("en", "bye bye take care", "greetings.bye");
    manager.addDocument("en", "okay see you later", "greetings.bye");
    manager.addDocument("en", "bye for now", "greetings.bye");
    manager.addDocument("en", "i must go", "greetings.bye");
    manager.addDocument("en", "hello", "greetings.hello");
    manager.addDocument("en", "hi", "greetings.hello");
    manager.addDocument("en", "hey", "greetings.hello");
    manager.addDocument("en", "heya", "greetings.hello");
    manager.addDocument("en", "howdy", "greetings.hello");
    manager.addDocument("en", "how are you?", "greetings.how");
    manager.addDocument("en", "how are u?", "greetings.how");
    manager.addDocument("en", "exams", "convo.exam");
    manager.addDocument("en", "exams?", "convo.exam");
    manager.addDocument("en", "exam", "convo.exam");
    manager.addDocument("en", "results", "convo.exam");
    manager.addDocument("en", "exam results", "convo.exam");
    manager.addDocument("en", "tell me joke", "convo.joke");
    manager.addDocument("en", "joke", "convo.joke");
    manager.addDocument("en", "joke pls", "convo.joke");
    manager.addDocument("en", "tell me another joke", "convo.joke");
    manager.addDocument("en", "brightspace", "convo.brightspace");
    manager.addDocument("en", "help", "convo.help");
    manager.addDocument("en", "help me", "convo.help");
    manager.addDocument("en", "im sad", "convo.help");
    manager.addDocument("en", "sad", "convo.help");
    manager.addDocument("en", "i have a problem", "convo.help");
    manager.addDocument("en", "i need help", "convo.help");
    manager.addDocument("en", "welp", "convo.help");
    manager.addDocument("en", "tudia", "convo.tudia");
    manager.addDocument("en", "who are u?", "convo.tudia");
    manager.addDocument("en", "who is tudia", "convo.tudia");
    manager.addDocument("en", "u?", "convo.tudia");
    manager.addDocument("en", "whats ur name?", "convo.tudia");
    manager.addDocument("en", "intelligent assistant", "convo.tudia");
    manager.addDocument("en", "looking for timetable", "convo.timetable");
    manager.addDocument("en", "timetable", "convo.timetable");
    manager.addDocument("en", "timetable please", "convo.timetable");
    manager.addDocument("en", "timetable pls", "convo.timetable");
    manager.addDocument("en", "course timetable", "convo.timetable");
    manager.addDocument("en", "i dont want to talk", "convo.health");
    manager.addDocument("en", "i dont want to talk to u", "convo.health");
    manager.addDocument("en", "i dont want to talk about it", "convo.health");
    manager.addDocument("en", "no", "convo.health");
    manager.addDocument("en", "yes", "convo.health");
    manager.addDocument("en", "mental health", "convo.health");
    manager.addDocument("en", "depressed", "convo.health");
    manager.addDocument("en", "depression", "convo.health");
    manager.addDocument("en", "sick", "convo.health");
    manager.addDocument("en", "stress", "convo.health");
    manager.addDocument("en", "anxiety", "convo.health");
    manager.addDocument("en", "anxious", "convo.health");
    manager.addDocument("en", "assignment", "convo.assign");
    manager.addDocument("en", "assignments", "convo.assign");
    manager.addDocument("en", "assignment pc1", "convo.assign");
    manager.addDocument("en", "pc1", "convo.assign");
    manager.addDocument("en", "pc1 form", "convo.assign");
    manager.addDocument("en", "late for assignments", "convo.assign");
    manager.addDocument("en", "failed assignment", "convo.assign");
    manager.addDocument("en", "CA", "convo.assign");
    manager.addDocument("en", "Failed CA", "convo.assign");
    manager.addDocument("en", "failed exam", "convo.assign");
    manager.addDocument("en", "Continuous assessment", "convo.assign");
    manager.addDocument("en", "Personal issues", "convo.assign");
    manager.addDocument("en", "Im good", "convo.good");
    manager.addDocument("en", "Im grand", "convo.good");
    manager.addDocument("en", "Im fine", "convo.good");
    manager.addDocument("en", "good", "convo.good");
    manager.addDocument("en", "grand", "convo.good");
    manager.addDocument("en", "fine", "convo.good");
    manager.addDocument("en", "tudia health", "health.bot");
    manager.addDocument("en", "link to library", "convo.library");
    manager.addDocument("en", "library", "convo.library");
    manager.addDocument("en", "tud library", "convo.library");
    manager.addDocument("en", "exam papers", "convo.library");
    manager.addDocument("en", "study space", "convo.library");
    manager.addDocument("en", "grangegorman", "convo.map");
    manager.addDocument("en", "where is grangegorman", "convo.map");
    manager.addDocument("en", "grangegorman campus", "convo.map");
    manager.addDocument("en", "grangegorman map", "convo.map");
    manager.addDocument("en", "google map", "convo.map");
    manager.addDocument("en", "tud", "convo.map");
    manager.addDocument("en", "tud map", "convo.map");
    manager.addDocument("en", "Jonathan McCarthy", "convo.Jon");
    manager.addDocument("en", "Lectures", "convo.People");
    manager.addDocument("en", "Lectures TUD", "convo.People");
    manager.addDocument("en", "TUD Lectures", "convo.People");
    manager.addDocument("en", "Lectures", "convo.People");
    manager.addDocument("en", "People", "convo.People");
    manager.addDocument("en", "Computer Science lectures", "convo.People");
    manager.addDocument("en", "contact", "convo.contact");
    manager.addDocument("en", "contact us", "convo.contact");
    manager.addDocument("en", "fuck", "convo.profanity");
    manager.addDocument("en", "fuck you", "convo.profanity");
    manager.addDocument("en", "f*ck", "convo.profanity");
    manager.addDocument("en", "fcuk", "convo.profanity");
    manager.addDocument("en", "shit", "convo.profanity");
    manager.addDocument("en", "f*ck you", "convo.profanity");
    manager.addDocument("en", "fuck off", "convo.profanity");
    manager.addDocument("en", "f*ck off", "convo.profanity");
    manager.addDocument("en", "Dick head", "convo.profanity");
    manager.addDocument("en", "Asshole", "convo.profanity");
    manager.addDocument("en", "Son of a b*tch", "convo.profanity");
    manager.addDocument("en", "Son of a bitch", "convo.profanity");
    manager.addDocument("en", "Bitch", "convo.profanity");
    manager.addDocument("en", "C*nt", "convo.profanity");
    manager.addDocument("en", "Cunt", "convo.profanity");
    manager.addDocument("en", "Bollocks", "convo.profanity");
    manager.addDocument("en", "Shag", "convo.profanity");
    manager.addDocument("en", "Wanker", "convo.profanity");
    manager.addDocument("en", "Twat", "convo.profanity");
    manager.addDocument("en", "horny", "convo.profanity");
    manager.addDocument("en", "sex", "convo.profanity");
    manager.addDocument("en", "blowjob", "convo.profanity");
    manager.addDocument("en", "blow", "convo.profanity");
    manager.addDocument("en", "dildo", "convo.profanity");
    manager.addDocument("en", "anal", "convo.profanity");
    manager.addDocument("en", "whore", "convo.profanity");
    manager.addDocument("en", "slut", "convo.profanity");
    manager.addDocument("en", "wank", "convo.profanity");
    manager.addDocument("en", "porn", "convo.profanity");
    manager.addDocument("en", "fuck u", "convo.profanity");
    manager.addDocument("en", "food", "convo.food");
    manager.addDocument("en", "where can i get food", "convo.food");
    manager.addDocument("en", "anywhere i can get food", "convo.food");
    manager.addDocument("en", "hungry", "convo.food");
    manager.addDocument("en", "i need food", "convo.food");
    manager.addDocument("en", "i want food", "convo.food");
    manager.addDocument("en", "where to eat", "convo.food");
    manager.addDocument("en", "food places", "convo.food");
    manager.addDocument("en", "food near me", "convo.food");
    manager.addDocument("en", "im hungry", "convo.food");
    // *********** manager.addDocument("en", "courses", "convo.contact");
    manager.addDocument("en", "Pizza", "convo.pizza");
    manager.addDocument("en", "pizza", "convo.pizza");
    manager.addDocument("en", "Pizza pls", "convo.pizza");
    manager.addDocument("en", "pizza pls", "convo.pizza");
    manager.addDocument("en", "Dominos", "convo.dominos");
    manager.addDocument("en", "dominos", "convo.dominos");
    manager.addDocument("en", "Dominos pizza", "convo.dominos");
    manager.addDocument("en", "dominos pizza", "convo.dominos");
    manager.addDocument("en", "Dominos Pizza", "convo.dominos");

    // Train also the NLG
    manager.addAnswer("en", "greetings.bye", "Till next time");
    manager.addAnswer("en", "greetings.bye", "see you soon!");
    manager.addAnswer("en", "greetings.hello", "Hey there!");
    manager.addAnswer("en", "greetings.hello", "Greetings!");
    manager.addAnswer("en", "greetings.how", "Im Fine, How are you?");
    manager.addAnswer(
      "en",
      "convo.good",
      "Im glad to hear that. How can i help you?"
    );
    manager.addAnswer(
      "en",
      "convo.exam",
      "Please use the following link\nhttps://www.tudublin.ie/for-students/student-services-and-support/examinations/exam-results/"
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "What do you call a sleeping bull? A bulldozer."
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "Why do melons have weddings? They cantaloupe"
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "Im afraid for the calendar. Its days are numbered."
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "My wife said I should do lunges to stay in shape. That would be a big step forward"
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!"
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "Singing in the shower is fun until you get soap in your mouth. Then its a soap opera"
    );
    manager.addAnswer(
      "en",
      "convo.joke",
      "Dear Math, grow up and solve your own problems"
    );
    manager.addAnswer(
      "en",
      "convo.brightspace",
      "Please use the following link\nhttps://brightspace.tudublin.ie/d2l/home"
    );
    manager.addAnswer(
      "en",
      "convo.help",
      "OMG! Are You okay? do you wanna talk about it?"
    );
    manager.addAnswer(
      "en",
      "convo.tudia",
      "Im TUDIA,\na Intelligent Assistant, I was developed in 2022 by JavaScript 😃"
    );
    manager.addAnswer(
      "en",
      "convo.timetable",
      "Please use the Link\nhttps://timetables.tudublin.ie/"
    );
    manager.addAnswer(
      "en",
      "convo.help",
      "Can I help you? maybe you should talk to our Health center? TYPE (tudia health)"
    );
    manager.addAnswer(
      "en",
      "convo.health",
      "Okay!!! Would you like to talk to our Health center? TYPE (tudia health)"
    );
    manager.addAnswer(
      "en",
      "convo.assign",
      "if you have any problems with CAs, Exams, or you need extension you should contact your Year Tutor and they will be able to go through the various options available. Make sure to fill in the Personal Circumstances Form and get the relevant supporting information to confirm your situation.\nfill the form below: https://www.tudublin.ie/media/website/explore/about-the-university/academic-affairs/quality-framework/city-qa/Personal-Circumstances-PC1-Form-07.12.21.pdf\n"
    );
    manager.addAnswer(
      "en",
      "health.bot",
      "Sure, Please use the link below:\n http://localhost:8080/Health" );
    manager.addAnswer(
      "en",
      "convo.library",
      "All TU Dublin Libraries are open and providing on-campus services to students and staff. The Online Library is available 24/7.\nThere are five library locations: Aungier Street, Bolton Street. Blanchardstown, Grangegorman, and Tallaght.\nYou can use any of the five libraries. Access to study and computer spaces is on a first come first served basis. No booking is required.\nGroup Study spaces will be available for booking in Grangegorman Park House library.\nAll registered TU Dublin students and staff automatically have membership of the library.\nYour student or staff card is your library card.\nPlease link below for the library:\nhttps://www.tudublin.ie/library/cc/"
    );
    manager.addAnswer(
      "en",
      "convo.map",
      "Please link below for the Google map:\nhttps://g.page/TU-Dublin-Grangegorman?share"
    );
    manager.addAnswer(
      "en",
      "convo.Jon",
      "You mean Jonathan McCarthy?? Please link below for More details:\nhttps://www.tudublin.ie/explore/schools-and-disciplines/computing-information-technology/computer-science/people/jonathanmccarthy.html"
    );
    manager.addAnswer(
      "en",
      "convo.People",
      "Are You looking for lectures? Please link below for More details:\nhttps://www.tudublin.ie/explore/schools-and-disciplines/computing-information-technology/computer-science/people/"
    );
    manager.addAnswer(
      "en",
      "convo.contact",
      "General Enquiries? Please link below for More details:\nhttps://www.tudublin.ie/connect/staff-directory/"
    );
    manager.addAnswer(
      "en",
      "convo.profanity",
      "That language is profane, please dont use any bad words"
    );
    manager.addAnswer(
      "en",
      "convo.food",
      "what you feeling?\nPizza?\nor do you want to eat in canteen?"
    );
    manager.addAnswer(
      "en",
      "convo.pizza",
      "Ohhh, pizza huh? \nI found Dominos near Grangegorman Campus, its about 15 mins walk.\nWould you like Dominos?? (Type Dominos)"
    );
    manager.addAnswer(
      "en",
      "convo.dominos",
      "Domino's Pizza - Dublin - Cabra Road \nUse the below Google Map Link Please\nhttps://goo.gl/maps/3MncSjatNRWko3QH8"
    );

    await manager.train();
    manager.save();

    console.log("AI has been trainded");
    resolve(true);
  });
}

async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", qsm);
    resolve(response);
  });
}

let connectWebSocket = (io) => {
  io.on("connection", function (socket) {
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log("New user joined!");
    });

    socket.on("new-msg", async function (data) {
      let response = await generateResponseAI(data.msg);
      io.to(data.room).emit(
        "send-msg-response",
        response.answer !== undefined
          ? response.answer
          : "I am sorry, I don't understand im only a young chatbot.for more information please contact my boss C18442284@mytudublin.ie "
      );
    });
  });
};

module.exports = {
  connectWebSocket,
  BotTraining,
};
