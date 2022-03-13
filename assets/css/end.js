const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("savescoreBtn");
username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.ariaValueMax;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
};