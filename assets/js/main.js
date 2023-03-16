/**
 * This is section is the delaration of the variable used
 */
// crete the Java essentials  by Code institue
const question= document.getElementById("question");
const choices = document.getElementById("choices");
const time = document.getElementById("time");
const point = document.getElementById ("point");
const result = document.getElementById ("result");

/**
 * This is section is the array of 10 questions and answere for the quiz 
 */

const questions = [
    
  {
      question:"Which of these countries is dead sea located?",
      choices:["between Israel and Syria", "between Israel and Jordan", "between Japan and  China", "between Nigeria and chad"],
      answer: "between Israel and jordan"
  },
  {
      question:"How many teeth does an adult cat normally have?",
      choices:["40", "45", "24", "30"],
      answer:  "30"
  },
  {
      question:"What type of creature is a Dog Face?",
      choices:["cat", "Butterfly", "lizard", "goat"],
      answer: "Butterfly"
  },

  {
      question:"What is a young bear called?",
      choices:["cub", "mat", "cun", "ban"],
      answer: "cub"
  },
  {
      question:"How many toes does a cat have on each front paw?",
      choices:["two", "Ten", "Five", "six"],
      answer:"Five"
  },
  {
      question:"What is the Largest Planet in The Univers",
      choices:["Earth", "Jupiter", "Mars", "Mercury"],
      answer: "Jupiter"
  },
  {
      question:'How tall is mount Everest?',
      choices:['11,848.86 m (30,031.7 ft) ', '20,654.7ft', '4,987,78ft',  '8,848.86 m (29,031.7 ft) ',],
      answer:  '8,848.86 m (29,031.7 ft) '
  },
  {
      question: "Which of  these is the  oldest tree in the world?",
      choices:["Giant sequoia(Sequoiadendron giganteum)" , "Coast live oak (Quercus agrifolia)", "The Great Basin Bristlecone Pine (Pinus longaeva)", "Limber pine"],
      answer:"The Great Basin Bristlecone Pine (Pinus longaeva)"
  },
  {
      question:"Which is the fastest moving land snake in the world?",
      choices:["Cat-eyed snake", "Black mamba", "hoop sanke", "Zebra spitting cobra?"],
      answer:"Black mamb"
  },

  {
      question:"What is the heaviest insect?",
      choices:["fly", "Bettle", "cocoroach", "mosquitoes"],
      answer: "Bettle"
  },
]
  
 /**
 * Set the quiz timer to 60 seconds 
 */ 
const timeLimit = 60;
let timeLeft = timeLimit;
let timer;

/**
 * Starts the quiz timer and updates the display every second 
 */  
//credit to https://stackoverflow.com/questions/63775740/how-to-create-the-easiest-countdown-timer and https://www.youtube.com/watch?v=MLtAMg9_Svw&t=399s
function startTimer() {
  timer = setInterval(function() {
  timeLeft--;
  document.getElementById("time").textContent = timeLeft;
    
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

// Set the initial score to 0
let score = 0;

// Display the first question
let currentQuestion = 0;
displayQuestion(currentQuestion);

// Start the quiz timer
startTimer();

// When the user submits an answer
// credit to https://stackoverflow.com/questions/62594459/how-to-check-the-correct-answer-javascript-4-buttons and https://simplestepscode.com/javascript-quiz-tutorial/
document.getElementById("submit").addEventListener("click", function() {
  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (userAnswer !== null) {
    // Check if the answer is correct
    if (userAnswer.value === questions[currentQuestion].answer) {
      // Increment the score
      score++;
      
      // Update the score display
      document.getElementById("points").textContent = score;
    }
    
    // Move to the next question
    currentQuestion++;
    
    // If there are no more questions, end the quiz
    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      // Otherwise, display the next question
      displayQuestion(currentQuestion);
    }
  }
});
// credit to https://simplestepscode.com/javascript-quiz-tutorial/ and // credit to https://www.youtube.com/watch?v=C7NsIRhoWuE&t=1094s
// Displays a question and its answer choices
function displayQuestion(index) {
  const question = questions[index];
  
  // Display the question text
  document.getElementById("question").textContent = question.question;
  
  // Display the answer choices
  let choicesHtml = "";
  for (const choice of question.choices) {
    choicesHtml += `<label><input type="radio" name="answer" value="${choice}"> ${choice}</label><br>`;
  }
  document.getElementById("choices").innerHTML = choicesHtml;
}
// Ends the quiz and displays the final score
function endQuiz() {
  clearInterval(timer);
  
  /**
 *  Check if the score is good
 */  

  let resultHtml = "";
  if (score >= 8) {
    resultHtml = "🤝 Great job!";
  } else if (score >= 5 && score <= 7) {
    resultHtml = "👍 Nice work!";
  } else {
    resultHtml = "👎 Better luck next time!";
  }
  // Display the final score and result message
  document.getElementById("result").innerHTML = `You got ${score} out of ${questions.length} correct. ${resultHtml}`;

  // Hide the submit button and show the play again button
  document.getElementById("submit").style.display = "none";
  document.getElementById("play-again").style.display = "block";
}

// Reset the quiz and start a new game
document.getElementById("play-again").addEventListener("click", function() {
  // Reset the score and timer
  score = 0;
  timeLeft = timeLimit;

  // Display the first question
  currentQuestion = 0;
  displayQuestion(currentQuestion);

  // Start the quiz timer
  startTimer();
// credit to https://www.youtube.com/watch?v=C7NsIRhoWuE&t=1094s
  // Update the score display and result message
  document.getElementById("points").textContent = score;
  document.getElementById("result").textContent = "";

  // Show the next button and hide the play again button
  document.getElementById("submit").style.display = "block";
  document.getElementById("play-again").style.display = "none";
});

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


  
  