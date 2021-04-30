# Software Engineer Interview Simulator

https://jakeschultz89.github.io/Software-Engineer-Interview-Simulator/

# Resources Used

https://www.youtube.com/watch?v=f4fB9Xg2JEY


# HOW TO PLAY

Congratulations, you have been selected for an interview at the hottest tech company in your area! Before offering you a fulltime position, you will need to complete an interview. The interview consists of ten questions relating to HTML, CSS and JavaScript. 

Depending on how well you perform, you may be offered the job! 

1) Begin the game by clicking "Start the Interview".
2) You will see the first question and the timer will start. For each question you will get a new ten second timer. Answer the question before the timer runs out or it counts as an incorrect response.
3) Score 0 - 40,000 points and you will be denied the job. Score 50,000 - 70,000 points and you will be offerer the job. Score 80,000 - 100,000 points and you will be offered the job AND a higher salary!

## Start Up Screen:

![Start-Screen](start-screen-readme.png)

# HOW TO INSTALL

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code

OR

Click the link below to play directly in your browser:

https://jakeschultz89.github.io/Software-Engineer-Interview-Simulator/

# HOW IT WORKS
```javascript
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text")); 
const progressText = document.querySelector("#progressText"); 
const scoreText = document.querySelector("#score");

let currentQuestion = {}; 
let acceptingAnswers = true; 
let score = 0; 
let questionCounter = 0; 
let availableQuestions = []; 

let questions = [
    {
      question: "How can you make a numbered list?",
      choice1: "<ol>",
      choice2: "<ul>",
      choice3: "<list>",
      choice4: "<nl>",
      answer: 1,
    },
  
    {
      question: "What is the correct HTML for making a text input field?",
      choice1: "<textinput type='text'>",
      choice2: "<input type='textfield'>",
      choice3: "<input type='text'>",
      choice4: "<textfield>",
      answer: 3,
    },
  
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      choice1: "In the <head> section",
      choice2: "In the <body> section",
      choice3: "At the end of the document",
      choice4: "It automatically connects",
      answer: 1,
    },
  
    {
      question: "How do you select an element with id 'demo'?",
      choice1: "id-demo",
      choice2: "demo",
      choice3: ".demo",
      choice4: "#demo",
      answer: 4,
    },
  
    {
      question: "How do you select elements with class name 'test'?",
      choice1: "#test",
      choice2: "*test",
      choice3: ".test",
      choice4: "test {}",
      answer: 3,
    },
  
    {
      question: "How do you make the text bold?",
      choice1: "font-style: thicc bois;",
      choice2: "font-weight:bold;",
      choice3: "style:bold;",
      choice4: "font:bold;",
      answer: 2,
    },
  
    {
      question: "How does a FOR loop start?",
      choice1: "while i = 1 to 10",
      choice2: "while (i <= 10)",
      choice3: "while (i <= 10; i++)",
      choice4: "while i = (i++)",
      answer: 2,
    },
  
    {
      question: "How do you call a function named 'myFunction'?",
      choice1: "myFunction()",
      choice2: "call myFunction()",
      choice3: "call function myFunction()",
      choice4: "Hey Siri, call myFunction",
      answer: 1,
    },
  
    {
      question: "How do you create a function in JavaScript?",
      choice1: "function = exampleFunction()",
      choice2: "function:exampleFunction()",
      choice3: "function exampleFunction() ",
      choice4: "function.create",
      answer: 3,
    },
  
    {
      question: "What is the correct way to write a JavaScript array?",
      choice1: "let colors = 'red', 'green', 'blue'",
      choice2: "let colors = (1:'red', 2:'green', 3:'blue')",
      choice3: "let colors = ['red', 'green', 'blue']",
      choice4: "let array colors = 'red', 'green', blue'",
      answer: 3,
    }
  ];

  const SCORE_POINTS = 10000; 
  const MAX_QUESTIONS = 10; 

  startGame = () => { 
      questionCounter = 0; 
      score = 0; 
      availableQuestions = [...questions]; 
      getNewQuestion(); 
  }

  getNewQuestion = () => { 
      if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { 
          localStorage.setItem("mostRecentScore", score); 

          return window.location.assign('end.html'); 
      }
      questionCounter++ 
      progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS} `; 

      const questionsIndex = Math.floor(Math.random() * availableQuestions.length); 
      currentQuestion = availableQuestions[questionsIndex]; 
      question.innerText = currentQuestion.question; 

      choices.forEach(choice => { 
          const number = choice.dataset["number"]; 
          choice.innerText = currentQuestion["choice" + number];
      })

      availableQuestions.splice(questionsIndex, 1); 

      acceptingAnswers = true; 
  }

  choices.forEach(choice => { 
      choice.addEventListener('click', e => { 
          if(!acceptingAnswers) return 

          acceptingAnswers = false
          const selectedChoice = e.target
          const selectedAnswer = selectedChoice.dataset["number"]  

          let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect" 

          if(classToApply === "correct") { 
              incrementScore(SCORE_POINTS) 
          }

          setTimeout(() => { 
              getNewQuestion()

          }, 10) 
      })
  })

  incrementScore = num => { 
      score +=num 
      scoreText.innerText = score 
  }

  startGame()
  ```


# FUTURE CONSIDERATIONS

Stretch goals for this project include:

 * Getting a 10 second timer to run for each question.

 * Having the end page show a different image depending on what your score was.

# PROCESS WORK

## Initial Wireframes:

### Start Screen
![Start-Screen](homescreen-wireframe.png)

### Question Screen Example
![Question-Screen](question-wireframe.png)

### Result Screen Example
![Result-Screen](result-wireframe.png)