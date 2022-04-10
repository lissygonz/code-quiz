const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){
    // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');

}


function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

//Questions to the quiz
const myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        a: "Strings",
        b: "Booleans",
        c: "Alerts" ,
        d: "Number"
      },
      correctAnswer: "c" //alerts
    },
    {
      question: "The condition in an if / else statement is enclosed within _________.",
      answers: {
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses" ,
        d: "Square Brackets"
      },
      correctAnswer: "c" //parentheses
    },
    {
      question: "Which tool can you use to ensure code qualityArrays in JavaScript can be used to store ________."?",
      answers: {
        a: "Numbers and Strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All of the above"
      },
      correctAnswer: "d" //all of the above
    }
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:"?",
        answers: {
          a: "Javascript",
          b: "Terminal",
          c: "For Loops",
          d: "console.log"
        },
        correctAnswer: "d" //console.log
      }
      {
        question: "String values must be enclosed within ______ when being assigned to variables."?",
        answers: {
          a: "Commas",
          b: "Curly Brackets",
          c: "Quotes",
          d: "Parentheses"
        },
        correctAnswer: "c" //quotes
      }

  ];