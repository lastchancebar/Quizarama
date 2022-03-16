//calling the DOM for quiz components
const question = document.getElementById('question');
//Node list converted to array
const choices = Array.from (document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document. getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById('loader');
const game = document.getElementById("game");
//quiz components
let currentQuestion = {}; 
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];
 //get random questions from Open Trivia Database - external API
fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")
.then( function (res) {
        return res.json();
    })

.then(loadedQuestions => {
console.log(loadedQuestions.results);
questions = loadedQuestions.results.map( loadedQuestion => {
    const formattedQuestion = {
        question: loadedQuestion.question
    };
const answerChoices = [...loadedQuestion.incorrect_answers];
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

answerChoices.forEach((choice, index) =>{ 
    formattedQuestion["choice" +  (index+1)] = choice;
}); 
return formattedQuestion;
});

startGame();
  })
.catch(err => {
    console.error(err);

  });  
    
// 10 questions per game - 10points per correct answer

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

//Start game at 0 
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");

};
getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem ("mostRecentScore", score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    
    /* update the progress bar*/

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;



//Load a question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
//load choices 
    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
//To not repeat question in the round
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;

};
//match choice to correct answer and increment score if apply
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

