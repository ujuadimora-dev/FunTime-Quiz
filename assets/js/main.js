/**
 * This is section is the delaration of the variable used
 */
const question= document.querySelector("#question");
const choices = document.querySelector("#choices").children;
const timer = document.querySelector(".#timer");

/**
 * This is section is the array of 10 questions and answere for the quiz 
 */
const questions = [
    
        {
            quest:'Which of these countries is dead sea located?',
            options:['between Israel and Syria', 'between Israel and Jordan', 'between Japan and  China', 'between Nigeria and chad'],
            answer:1
        },
        {
            quest:'How many teeth does an adult cat normally have?',
            options:['40', '45', '24', '30'],
            answer:3
        },
        {
            quest:'What type of creature is a Dog Face?',
            options:['cat', 'Butterfly', 'lizard', 'goat'],
            answer:1
        },
    
        {
            quest:'What is a young bear called?',
            options:['cub', 'mat', 'cun', 'ban'],
            answer:0
        },
        {
            quest:'How many toes does a cat have on each front paw?',
            options:['two', 'Ten', 'Five', 'six'],
            answer:2
        },
        {
            quest:'What is the Largest Planet in The Universe',
            options:['Earth', 'Jupiter', 'Mars', 'Mercury'],
            answer:1
        },
        {
            quest:'How tall is mount Everest?',
            options:['11,848.86 m (30,031.7 ft) ', '20,654.7ft', '4,987,78ft',  '8,848.86 m (29,031.7 ft) ',],
            answer:3
        },
        {
            quest: 'Which of  these is the  oldest tree in the world?',
            options:['Giant sequoia(Sequoiadendron giganteum)' , 'Coast live oak (Quercus agrifolia)', 'The Great Basin Bristlecone Pine (Pinus longaeva)', 'Limber pine'],
            answer:2
        },
        {
            quest:'Which is the fastest moving land snake in the world?',
            options:['Cat-eyed snake', 'Black mamba', 'hoop sanke', 'Zebra spitting cobra?'],
            answer:1
        },
    
        {
            quest:'What is the heaviest insect?',
            options:['fly', 'Bettle', 'cocoroach', 'mosquitoes'],
            answer:1
        },
      ]

      

/**
 * The function to Displays the scores or result credited to (https://youtu.be/2Bpiluefkh8)
 */
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = questions.length
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%"
    
    /**
     * This message for the  low score and high scores
     */
   let message= [ 'You really need to do better!' , ' Great Job!']
   let images = ['assets/images/poor.gif', 'assets/images/great-job.gif']
   
   let scope;
  
    if(score > 6 )  {
        scope = 1;   
    }else
     {
        scope = 0;
    }
     
document.querySelector("#message").innerHTML = message[scope];
document.querySelector(".images").src = images[scope];
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