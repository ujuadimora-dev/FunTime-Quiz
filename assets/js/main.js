/**
 * This is section is the delaration of the variable used
 */
const answersTrackerContainer = document.querySelector(".answers-tracker");
const options = document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const question=document.querySelector(".question");
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
/**
 * This is section is the array of 10 questions and answere for the quiz 
 */
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
            q:'What type of creature is a Dog Face?',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:1
        },
    
        {
            q:'What is a young bear called?',
            options:['cub', 'mat', 'cun', 'ban'],
            answer:0
        },
        {
            q:'How many toes does a cat have on each front paw?',
            options:['two', 'Ten', 'Five', 'six'],
            answer:2
        },
        {
            q:'What is the Largest Planet in The Universe',
            options:['Earth', 'Jupiter', 'Mars', 'Mercury'],
            answer:1
        },
        {
            q:'How tall is mount Everest?',
            options:['11,848.86 m (30,031.7 ft) ', '20,654.7ft', '4,987,78ft',  '8,848.86 m (29,031.7 ft) ',],
            answer:3
        },
        {
            q: 'Which of  these is the  oldest tree in the world?',
            options:['Giant sequoia(Sequoiadendron giganteum)' , 'Coast live oak (Quercus agrifolia)', 'The Great Basin Bristlecone Pine (Pinus longaeva)', 'Limber pine'],
            answer:2
        },
        {
            q:'Which is the fastest moving land snake in the world?',
            options:['Cat-eyed snake', 'Black mamba', 'hoop sanke', 'Zebra spitting cobra?'],
            answer:1
        },
    
        {
            q:'What is the heaviest insect?',
            options:['fly', 'Bettle', 'cocoroach', 'mosquitoes'],
            answer:1
        },
      ]

      
totalQuestionsSpan.innerHTML = questions.length

/**
 * This Fuction load the option and increment it by 1
 */
function load(){
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]    
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
}

/**
 * /This fuction Check if selected answer is correct or wrong and incremnet the score if the answer is correct
 * @param {number} element 
 */
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

/**
 * This function ckeck that  the user selected an option before clicking on the Next button
 */
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option")
    }
    else{
        randomQuestion();
        enableClick();
    }
}

/**
 *  This function Listens for click event on Next button
 */
function next(){
    validate();
}
/**
 * This Function to disable click event for the options
 */
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled")

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }
}

/**
 * Function to reanable click event in the options
 */
function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

/**
 * //This Function to generate  questions randomly
 */
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

/**
 * The function to Restart or to play the quiz againthe quiz
 */
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
}

/**
 * /function to Set up answers tracker elements
 */
function answersTracker(){
    for(let i=0; i< questions.length; i++){
        const div =document.createElement("div")
        answersTrackerContainer.appendChild(div);
    }
}

/**
 * //Function to Update the answers tracker elements
 * @param {unmber} newClass 
 */
function updateAnswersTracker(newClass){
    answersTrackerContainer.children[index -1].classList.add(newClass)
}


/**
 * The function to Displays the scores or result 
 */
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = questions.length
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%"
    
    /**
     * This message for the  low score and high scores
     */
   let message= [ 'Great Job!' , ' You really need to do better!']
   let images = ['assets/images/great.gif','assets/images/poor.gif']
   
   let range;
  
    if(score > 6 )  {
        range = 0;   
    }else
     {
        range = 1;
    }
     
document.querySelector("#message").innerHTML = message[range];
document.querySelector(".images").src = images[range];
document.querySelector(".images").width = 300
}

/**
 * function to play the quiz again
 */
function tryAgain(){
    window.location.reload();
}
/**
 * function to jump to Home page
 */
function goHome(){
    window.location.href="index.html"
}

/**
 * function to play the quiz
 */
function playQuiz(){
    window.location.href="quiz.html"
}