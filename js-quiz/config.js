const allQuestions = [{
    id: 1,
    question: 'What was Javascript called initially?',
    options: {
        1 : 'LiveScript',
        2 : 'ECMAScript',
        3 : 'OakScript',
        4 : 'JediScript' 
    },
    getAnswer(){
        return this.options['1'];
    }
},{
    id: 2,
    question: 'What was the first browser to support Javascript?',
    options: {
        1 : 'Mozilla Firefox',
        2 : 'Google Chrome',
        3 : 'Netscape Navigator',
        4 : 'Microsoft Internet Explorer' 
    },
    getAnswer(){
        return this.options['3'];
    }
},{
    id: 3,
    question: 'Which one of these is called a function expression in javascript?',
    options: {
        1 : 'function sayHello(){ console.log("hello"); }',
        2 : 'const sayHello = function sayHello(){ console.log("hello"); }',
        3 : '() => { console.log("hello"); }',
        4 : 'function(){ console.log("hello"); }' 
    },
    getAnswer(){
        return this.options['2'];
    }
},{
    id: 4,
    question: 'Which of these is not a datatype in Javascript?',
    options: {
        1 : 'Symbol',
        2 : 'Number',
        3 : 'BigInt',
        4 : 'Char' 
    },
    getAnswer(){
        return this.options['4'];
    }
},{
    id: 5,
    question: ' "11"+11 will return which one of these in javascript?',
    options: {
        1 : '"1111"',
        2 : '22',
        3 : 'Error',
        4 : '1111' 
    },
    getAnswer(){
        return this.options['1'];
    }
}];

const numberOfQuestions = allQuestions.length;
const numberOfOptions = 4;
const correctOptionPoints = 1;
const inCorrectOptionPoints = 0; 
const appGreetingMessage = `\nWelcome to Javascript Quiz!\n\nYou will be given ${numberOfQuestions} question with ${numberOfOptions} options each and you have to select one of the option which you think is correct.\nEach correct answer gives you ${correctOptionPoints} points and each wrong answer gives you ${inCorrectOptionPoints} point.\nYour total score will be calculated and displayed at the end.\n\nGood luck!`;
const continueMessage = '\n(Press any keys to continue....)\n';
const correctResponseMessage = `\nCorrect!!! Here\'s your ${correctOptionPoints} points.`;
const invalidResponseMessage = `\nOops that\'s a invalid selection. You got ${inCorrectOptionPoints} points for this question.`;
const incorrectResponseMessage = `\nOops that\'s incorrect. You got ${inCorrectOptionPoints} points for this question.`;
const appFarewellMessage = '\n\nCongratulation for completing the Quiz!\nYour total Points: ';

module.exports = {
    allQuestions,
    appGreetingMessage,
    continueMessage,
    correctResponseMessage,
    invalidResponseMessage,
    incorrectResponseMessage,
    correctOptionPoints,
    inCorrectOptionPoints,
    appFarewellMessage
};
