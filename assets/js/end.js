const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("savescoreBtn");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finlaScore');
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   /*saveScoreBtn.disabled = !username.value;*/
    
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
};