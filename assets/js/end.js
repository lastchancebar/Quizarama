//get elements from DOM
const username = document.getElementById("username");

//get elements from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const finalScore = document.getElementById('finalScore');

if(mostRecentScore && finalScore?.innerText) {
finalScore.innerText = mostRecentScore;
}

username?.addEventListener("keyup", () => {
   
    
});
//list the 5 highest scores 
let saveHighScore="";
saveHighScore = e => {
    
    e.preventDefault();

    const score = {
    score: mostRecentScore,
    name: username.value
        };
        highScores.push(score);
    highScores.sort( (a,b) => b.score -a.score);
    //take off the list any score lower than the 5 highest scores
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

    
};