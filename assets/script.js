(function(){
    // Functions
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
  
            // ...add a button
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
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // if answer is correct
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Commonly used data types DO NOT include:",
        answers: {
          a: "Strings",
          b: "Booleans",
          c: "Alerts",
          d: "Number"
        },
        correctAnswer: "c" //alerts
      },
      {
        question: "The condition in an if / else statements is enclosed within ___?",
        answers: {
          a: "Quotes",
          b: "Curly Brackets",
          c: "Parentheses",
          d: "Square Brackets"
        },
        correctAnswer: "c" //parentheses
      },
      {
        question: " Arrays in Javascript can be uses to store ______?",
        answers: {
          a: "Numbers and Strings",
          b: "Other Arrays",
          c: "Booleans",
          d: "All of the above"
        },
        correctAnswer: "d" //all of the above
      },
      {
          question: "A very useful tool used during debugging and developmemt for printing content in the debugger is...",
          answers: {
              a: "Javascript",
              b: "Terminal",
              c: "For Loops",
              d: "console.log"
          },
      
      correctAnswer: "d" //console.log
        },
 
      {
          questions: "String values must be enclosed within ___ when being assigned to variables",

          answers: {
              a: "Commas",
              b: "Curly Brackets",
              c: "Quotes",
              d: "Parantheses"
            },
        correctAnswer: "c" //quotes
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    //seperating
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();