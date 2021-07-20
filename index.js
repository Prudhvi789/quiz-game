var readlineSync = require('readline-sync')
var username = readlineSync.question('Enter your name : ')

console.log('Welcome ', username);

var correctCount = 0
var highScores = [{ name: 'ravi', score: 3 }, { name: 'ram', score: 2 }]

function takeQuestion(ques, ans) {
  var userAnswer = readlineSync.question(ques)
  if (ans === userAnswer) {
    correctCount += 1;
    console.log('Your answer is correct!')
  }
  else {
    console.log('Your answer is wrong!')
  }
}

questionOne = {
  question: "Who is my favorite actor? ",
  answer: "Naruto"
}

questionTwo = {
  question: "Which is my favorite song? ",
  answer: "Levitating"
}

questionThree = {
  question: "What is my favorite game? ",
  answer: "Fifa"
}

questionList = [questionOne, questionTwo, questionThree]
console.log('Game start!!')
for (i = 0; i < questionList.length; i++) {
  takeQuestion(questionList[i].question, questionList[i].answer)
}
  
console.log('Your score is : ', correctCount)
highScores.push({ name: username, score: correctCount })
console.log('HighScores')
console.log('Name   Score')
console.log('---------------')
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + '  ' + highScores[i].score)
}

