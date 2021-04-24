const readlineSync = require('readline-sync');
const config = require('./config');

const greetUser = function greetUser() {
    console.log(config.appGreetingMessage);
    readlineSync.question(config.continueMessage);
}

const askQuestion = function askEachQuestion(id, question, options, answer) {
    console.log(`\n(Question ${id}) ${question}\n`);

    for (const key of Object.keys(options)) {
        const value = options[key];
        console.log(`${key} : ${value}`);
    }
    console.log();

    const choosenOption = readlineSync.question('Your choice: ');
    const choosenText = options[choosenOption];
    const optionKeys = Object.keys(options);

    return calculatePoints(optionKeys, choosenOption, choosenText, answer);

}

const calculatePoints = function calculatePointsForEachQuestion(optionKeys, choosenOption, choosenText, answer) {
    let points = 0;
    if (optionKeys.includes(choosenOption) == false) {
        console.log(config.invalidResponseMessage);
        console.log(`The Correct answer is: ${answer}`);
    }
    else if (choosenText === answer) {
        points = config.correctOptionPoints;
        console.log(config.correctResponseMessage);
    }
    else {
        points = config.inCorrectOptionPoints;
        console.log(config.incorrectResponseMessage);
        console.log(`The Correct answer is: ${answer}`);
    }
    return points;
}

const fareWellUser = function fareWellUser(totalPoints) {
    console.log(config.appFarewellMessage + totalPoints);
}

const runQuizApp = function runQuizApp() {
    let totalPoints = 0;
    greetUser();
    config.allQuestions.forEach((questionObj) => {
        const answer = questionObj.getAnswer();
        const { id, question, options } = questionObj;
        totalPoints += askQuestion(id, question, options, answer);
    });
    fareWellUser(totalPoints);
}

runQuizApp();