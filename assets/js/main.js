// declaring variable used

let answersTrackerContainer = document.getElementsByClassName('answers-tracker')
let options = document.getElementsByClassName('options').children
let questionNumberSpan = document.getElementsByClassName('question-num-value')
let question=document.getElementsByClassName('question')
let totalQuestionsSpan =document.getElementsByClassName('total-questions')
let correctAnswersSpan =document.getElementsByClassName('correct-answers')
let totalQuestionsSpan2 =document.getElementsByClassName('total-questions2')
let percentageSpan =document.getElementsByClassName('percentage')

let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;
// array of anwered question options
let opt1 = document.querySelector(".option1")
let opt2 = document.querySelector(".option2")
let opt3 = document.querySelector(".option3")
let opt4 = document.querySelector(".option4")
