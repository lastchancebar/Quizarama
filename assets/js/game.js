
const question = document.getElementById('question');
const choices = Array.from (document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document. getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question:"What color is a banana?",
    choice1: "<yellow>",
    choice2: "<red>",
    choice3: "<white>",
    choice4: "<blue>",
    answer: 1
    },
    {
        question:"What color is Liverpool FC?",
        choice1: "<yellow>",
        choice2: "<red>",
        choice3: "<white>",
        choice4: "<blue>",
        answer: 2
        },
        {
            question:"What color is a sparrow?",
            choice1: "<yellow>",
            choice2: "<red>",
            choice3: "<white>",
            choice4: "<brown>",
            answer: 4
        },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();

};
getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem ("mostRecentScore", score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    /* update the progress bar*/

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;




    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply =
        selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect';

        if(classToApply=== 'correct'){
            incrementScore(CORRECT_BONUS);
        }
       selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply);    
       
        getNewQuestion();
    },1000);
});
});
incrementScore = num =>{
    score += num;
    scoreText.innerText = score;
};

startGame();