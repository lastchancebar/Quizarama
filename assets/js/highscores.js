const highScoresList = document.getElementById ('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// set out top 5 scores with names 
highScoresList.innerHTML = highScores
    .map( score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
    .join("");