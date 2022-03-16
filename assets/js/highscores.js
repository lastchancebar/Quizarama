const highScoresList = document.getElementById ('highScoresList');
//get names and highscores from local storage as a string
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// set out top 5 scores with names 
highScoresList.innerHTML = highScores
    .map( score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
    .join("");