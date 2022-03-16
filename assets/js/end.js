//get elements from DOM
const username = document.getElementById("username");
//const saveScoreBtn = document.getElementById("savescoreBtn");
//get elements from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//const MAX_HIGH_SCORES = 5;
const finalScore = document.getElementById('finalScore');

if(mostRecentScore && finalScore?.innerText) {
finalScore.innerText = mostRecentScore;
}

username?.addEventListener("keyup", () => {
   /*saveScoreBtn.disabled = !username.value;*/
    
});

let saveHighScore="";
saveHighScore = e => {
    
    e.preventDefault();

    const score = {
    score: mostRecentScore,
    name: username.value
        };
        highScores.push(score);
    highScores.sort( (a,b) => b.score -a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

    
};