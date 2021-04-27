const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)







nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
  
  function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }





  
const questions = [
    {
    question: "How can you make a numbered list?",
    answers: [
        {text: "<ol>", correct: true},
        {text: "<ul>", correct: false},
        {text: "<list>", correct: false},
        {text: "<nl>", correct: false}
    ]
    },

    {
    question: "What is the correct HTML for making a text input field?",
    answers: [
        {text: "<textinput type='text'>", correct: false},
        {text: "<input type='textfield'>", correct: false},
        {text: "<textfield>", correct: false},
        {text: "<input type='text'>", correct: true}
    ]
    },

    {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [
        {text: "In the <body> section", correct: false},
        {text: "In the <head> section", correct: true},
        {text: "At the end of the document", correct: false},
        {text: "It automatically connects", correct: false}
    ]
    },

    {
    question: "How do you select an element with id 'demo'?",
    answers: [
        {text: "#demo", correct: true},
        {text: "demo", correct: false},
        {text: ".demo", correct: false},
        {text: "id-demo", correct: false}
    ]
    },

    {
    question: "How do you select elements with class name 'test'?",
    answers: [
        {text: "#test", correct: false},
        {text: "*test", correct: false},
        {text: ".test", correct: true},
        {text: "test {}", correct: false}
    ]
    },

    {
    question: "How do you make the text bold?",
    answers: [
        {text: "font:bold;", correct: false},
        {text: "font-style: thicc bois;", correct: false},
        {text: "style:bold;", correct: false},
        {text: "font-weight:bold;", correct: true}
    ]
    },

    {
    question: "How does a FOR loop start?",
    answers: [
        {text: "while i = 1 to 10", correct: false},
        {text: "while (i <= 10)", correct: true},
        {text: "while (i <= 10; i++)", correct: false},
        {text: "while i = (i++)", correct: false}
    ]
    },

    {
    question: "How do you call a function named 'myFunction'?",
    answers: [
        {text: "myFunction()", correct: true},
        {text: "call myFunction()", correct: false},
        {text: "call function myFunction()", correct: false},
        {text: "Hey Siri, call myFunction", correct: false}
    ]
    },

    {
    question: "How do you create a function in JavaScript?",
    answers: [
        {text: "function = exampleFunction()", correct: false},
        {text: "function:exampleFunction()", correct: false},
        {text: "function exampleFunction()", correct: true},
        {text: "function.create", correct: false}
    ]
    },

    { 
    question: "What is the correct way to write a JavaScript array?",
    answers: [
        {text: "let colors = 'red', 'green', 'blue'", correct: false},
        {text: "let colors = (1:'red', 2:'green', 3:'blue')", correct: false},  
        {text: "let colors = ['red', 'green', 'blue']", correct: true},
        {text: "let array colors = 'red', 'green', blue'", correct: false}
    ]
    },
]