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

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SE Interview Sim</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div id="home" class="flex-column flex-center">
            <h1>Software Engineer Interview Simulator</h1>
            <img src="homescreen.png" alt="">
            <h4>Try to get as many questions right as you can. Only highscores will land you the job. Good luck!</h4>
            <a href="game.html" id="startBtn" class="btn">Click Here to Begin the Interview</a>
            <h4>INSTRUCTIONS: Click an answer to move on to the next question. At the end of game you can see if your score lands you the job.</h4>
        </div>
    </div>
    <script src="script.js"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SE Interview Sim</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <audio>
        <source src="music.mp3" type="audtio/mpeg">
    </audio>
    <div class="container">
        <div id="game" class="justify-center flex-column">
            <div id="hud">
                <div class="hud-item">
                    <p id="progressText" class="hud-prefix">
                        Question
                    </p>
                </div>
                <div class="hud-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score" name="score">
                         0
                    </h1>
                </div>
            </div>
            <h1 id="question">What is the answer to this question?</h1>
            <div class="choice-container">
                <p class="choice-prefix">A)</p>
                <p class="choice-text" data-number="1">Choice</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">B)</p>
                <p class="choice-text" data-number="2">Choice 2</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">C)</p>
                <p class="choice-text" data-number="3">Choice 3</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">D)</p>
                <p class="choice-text" data-number="4">Choice 4</p>
            </div>
        </div>
    </div> 
    <script src="script.js"></script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SE Interview Sim</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="end" class="flex-center flex-column">
            <!-- <h1 id="finalScore">0</h1> -->
            <h3>80,000 - 100,000 = You got the job AND a higher salary!</h3>
            <h3>50,000 - 70,000 = You're hired!</h3>
            <h3>0 - 40,000 = Sorry, you did not get the job.</h3>
            <a href="index.html" class="btn" id="tryAgain">Try again?</a>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

body {
    background: black;
    font-family: 'VT323', monospace;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
}

* {
    box-sizing: border-box; /* border-box accounts for height and width automatically */
    margin: 0;
    padding: 0;
    font-size: 62.5%;
}

h1 {
    font-size: 45px;
    color: rgb(14, 245, 6);
    background: black;
    text-align: center;
}

img {
    max-height: 400px;
    max-width: 500px;
    margin: 15px 0 15px 0;
    filter: opacity(90%);
    filter: color rgb(14, 245, 6);
}

h4 {
    font-size: 2.4rem;
    color: rgb(14, 245, 6);
    margin-bottom: 5rem;
    background: black;
    text-align: center;
}

h2 {
    font-size: 4.2rem;
    margin-bottom: 4rem;
}

h3 {
    display: flex;
    flex-direction: column;
    min-height: 5vh;
    font-size: 3.5rem;
    color: rgb(14, 245, 6);
    background: black;
    text-align: justify;
    margin-top: 100px;
    
}

#tryAgain {
    margin-top: 50px;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.flex-center {
    justify-content: center;
    align-items: center;
}

.text-center {
    text-align: center;
}

.btn {
    font-size: 2.4rem;
    padding: 2rem 0;
    width: 30rem;
    text-align: center;
    margin-bottom: 1rem;
    text-decoration: none;
    color: rgb(14, 245, 6);
    background: black;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
}

.btn:hover {
    cursor: pointer;
    transition: transform 150ms;
    transform: scale(1.03);
}

.choice-container {
    display: flex;
    margin-bottom: 0.8rem;
    width: 100%;
    color: rgb(14, 245, 6);
    border-radius: 4px;
    background:none;
    font-size: 50px;
    min-width: 80rem;
}

.choice-container:hover {
    cursor: pointer;
    transform: scale(1.02);
    transform: transform 100ms; 
}

.choice-prefix {
    padding: 2rem 2.5rem;
    color: rgb(14, 245, 6);
}

.choice-text {
    padding: 2rem;
    width: 100%;
}

#hud {
    display: flex;
    justify-content: space-between;
}

.hud-prefix {
    text-align: center;
    font-size: 2rem;
}

.hud-main-text {
    text-align: center;
}

#progressText {
    color: rgb(14, 245, 6);
    margin-top: 35px;
}

@media screen and (max-width: 375px) {
   
    * {
        max-width: 350px;
        max-height: 800px;
    }
   
    .choice-container {
        min-width: 300px;
    }
}
```

```javascript
const question = document.querySelector("#question"); //querySelector makes it so I can target id or class.
const choices = Array.from(document.querySelectorAll(".choice-text")); //this targets the text of the answer choices.
const progressText = document.querySelector("#progressText"); //this targets the text that will show question 1 of 10, 2 of 10, etc.
const scoreText = document.querySelector("#score"); // scoreText will be used in the HUD and end page.
// const finalScore = document.querySelector('#finalScore'); //final score to be displayed on end.html

let currentQuestion = {}; //makes currentQuestion an empty opject that can be manipulated later.
let acceptingAnswers = true; 
let score = 0; //establishing score as a number
let questionCounter = 0; //question counter will be a number
let availableQuestions = []; //the available questions are in an array

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

  const SCORE_POINTS = 10000; //each question correct will award the player with 10,000 points
  const MAX_QUESTIONS = 10; //the game will run for a total of 10 questions

  startGame = () => { // function for starting the game
      questionCounter = 0; //counter will start at 0(empty)
      score = 0; //score will always start back at 0 points
      availableQuestions = [...questions]; // spread operator - the game will pull from the array of questions
      getNewQuestion(); //present a question
  }

  getNewQuestion = () => { //function for getting the questions
      if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) { //if there are no more questions
          localStorage.setItem("mostRecentScore", score); //the score is saved to local storage

          return window.location.assign('end.html'); //score is displayed on end.html
      }
      questionCounter++ // as each question is asked
      progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS} `; //shows a counter for the player to know which question they are currently on.

      const questionsIndex = Math.floor(Math.random() * availableQuestions.length); //this makes it so that the questions are asked in random order each time.
      currentQuestion = availableQuestions[questionsIndex]; // keeps track of which question we are on
      question.innerText = currentQuestion.question; //this tells the game which question to show

      choices.forEach(choice => { //function for showing the array choices
          const number = choice.dataset["number"]; //this is what labels the answer in the array as the correct asnwer.
          choice.innerText = currentQuestion["choice" + number];
      })

      availableQuestions.splice(questionsIndex, 1); //this adds/removes the questions from the array to the container.

      acceptingAnswers = true; //?
  }

  choices.forEach(choice => { //function for checking answers or choices.
      choice.addEventListener('click', e => { //this function happens on a click.
          if(!acceptingAnswers) return //if the click is not on an answer, return, wait for next click.

          acceptingAnswers = false
          const selectedChoice = e.target
          const selectedAnswer = selectedChoice.dataset["number"]  //the right choice is connected to the question by the "number".

          let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect" //this allows the game to decipher if the answer was right or wrong.

          if(classToApply === "correct") { // if the answer is correct
              incrementScore(SCORE_POINTS) //add incremental points
          }

          setTimeout(() => { //this times out so it prompts the new question
              getNewQuestion()

          }, 10) //milliseconds before screen changes.
      })
  })

  incrementScore = num => { //function to increase score
      score +=num //score + increcement number (10000)
      scoreText.innerText = score 
  }

  startGame()
  ```


# FUTURE CONSIDERATIONS

Stretch goals for this project include:

 * Getting a 10 second timer to run for each question.

 * Having the end page show a different image depending on what your score was.

 * Get audio to play during the game (NES Ducktales theme)

# PROCESS WORK

## Initial Wireframes:

### Start Screen
![Start-Screen](homescreen-wireframe.png)

### Question Screen Example
![Question-Screen](question-wireframe.png)

### Result Screen Example
![Result-Screen](result-wireframe.png)