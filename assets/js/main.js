// declaring variable used

const answersTrackerContainer = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumberSpan = document.querySelector(".question-num-value")
const question=document.querySelector(".question")
const totalQuestionsSpan =document.querySelector(".total-questions")
const correctAnswersSpan =document.querySelector(".correct-answers")
const totalQuestionsSpan2 =document.querySelector(".total-questions2")
const percentageSpan =document.querySelector(".percentage")

let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;

const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")

const questions = [
    
        {
            q:'Which of these countries is dead sea located?',
            options:['between Israel and Syria', 'between Israel and Jordan', 'between Japan and  China', 'between Nigeria and chad'],
            answer:1
        },
        {
            q:'How many teeth does an adult cat normally have?',
            options:['40', '45', '24', '30'],
            answer:3
        },
        {
            q:'What type of creature is a Dog Face',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:2
        },
    
        {
            q:'Which of these countries is dead sea located?',
            options:['between Israel and Syria', 'between Israel and Jordan', 'between Japan and  China', 'between Nigeria and chad'],
            answer:1
        },
        {
            q:'How many teeth does an adult cat normally have?',
            options:['40', '45', '24', '30'],
            answer:3
        },
        {
            q:'What type of creature is a Dog Face',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:2
        },
        {
            q:'Which of these countries is dead sea located?',
            options:['between Israel and Syria', 'between Israel and Jordan', 'between Japan and  China', 'between Nigeria and chad'],
            answer:1
        },
        {
            q:'How many teeth does an adult cat normally have?',
            options:['40', '45', '24', '30'],
            answer:3
        },
        {
            q:'What type of creature is a Dog Face',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:2
        },
    
        {
            q:'What type of creature is a Dog Face',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:2
        },
      ]
totalQuestionsSpan.innerHTML = questions.length
// this is incremment the options
function load(){
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]    
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
}

//Check if selected answer is correct or wrong and incremnet the score if the answere is correct
function check(element){
    if(element.id == questions[currentIndex].answer){
        element.className="correct"
        updateAnswersTracker("correct")
        score++
    }
    else {
        element.className="wrong"
        updateAnswersTracker("wrong")
    }
    disableClick();
}

//Make sure the user selected an item before clicking on the Next button
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option")
    }
    else{
        randomQuestion();
        enableClick();
    }
}

//Listener function for click event on Next button
function next(){
    validate();
}

//Function to disable click for the options
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled")

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }
}

//Function to reanable click in the options
function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

//Function to select a random question
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    if(index == questions.length){
        quizOver();
    }
    else{
        if(answeredQuestions.length > 0){
            if(answeredQuestions.includes(randomNumber)){
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if(answeredQuestions.length == 0){
            currentIndex = randomNumber
            load()
        }
        //add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

//Restart the quiz
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
}

//Set up answers tracker elements
function answersTracker(){
    for(let i=0; i< questions.length; i++){
        const div =document.createElement("div")
        answersTrackerContainer.appendChild(div);
    }
}

//Update the answers tracker elements
function updateAnswersTracker(newClass){
    answersTrackerContainer.children[index -1].classList.add(newClass)
}

//Displays the quiz-over page if quiz is over
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = questions.length
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%"
    
    // message for the  low score and high scores
   let message= [ 'Great Job' , ' You really need to do better']
   let images = ['assets/images/great-job.gif','assets/images/poor-score.gif']
   //images = document.querySelector(',images')
   //if( images.style) {
       //images.height = 200;
       //images.width = 300;
   //}
   
   let range;
   console.log("Gathering results...");
   
    if(score > 6 )  {
        range = 0;   
    }else
     {
        range = 1;
    }
     
document.querySelector("#message").innerHTML = message[range];
document.querySelector(".images").src = images[range];
document.querySelector(".images").width = 300
//document.querySelector("images").src = images[range]
}


function tryAgain(){
    window.location.reload();
}