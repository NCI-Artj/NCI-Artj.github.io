// WK 8 - Weekly Labs Challenge

const PCScore = document.getElementById("PCScore");
const PlayerScore = document.getElementById("PlayerScore");

const RockButton = document.getElementById("RockButton");
const PaperButton = document.getElementById("PaperButton");
const ScissorsButton = document.getElementById("ScissorsButton");

const GameResultMessage = document.getElementById("GameResultMessage");

GameResultMessage.hidden = true;

let PCScoreUpdate = (0);
let PlayerScoreUpdate = (0);

RockButton.addEventListener("click", function(event) {

    event.preventDefault();

    let PCNumber = Math.floor(Math.random() * 3);

    if (PCNumber==0) { // If pick Rock and PC picks Rock

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Rock. <br> You Picked: Rock <br> It's a Draw!");
        GameResultMessage.style.backgroundColor = "White";
    }
    else if (PCNumber==1) { // If pick Rock and PC picks Paper

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Paper. <br> You Picked: Rock <br> You Lose!");
        GameResultMessage.style.backgroundColor = "red";

        PCScoreUpdate = (PCScoreUpdate+1);
        PCScore.innerHTML = ("PC Score: "+PCScoreUpdate);
    }
    else if (PCNumber==2) { // If pick Rock and PC picks Scisscors

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Scisscors. <br> You Picked: Rock <br> You Win!");
        GameResultMessage.style.backgroundColor = "green";

        PlayerScoreUpdate = (PlayerScoreUpdate+1);
        PlayerScore.innerHTML = ("Player Score: "+PlayerScoreUpdate);
    }

});

PaperButton.addEventListener("click", function(event) {

    event.preventDefault();

    let PCNumber = Math.floor(Math.random() * 3);

    if (PCNumber==0) { // If pick Paper and PC picks Rock

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Rock. <br> You Picked: Paper <br> You Win!");
        GameResultMessage.style.backgroundColor = "green";
        
        PlayerScoreUpdate = (PlayerScoreUpdate+1);
        PlayerScore.innerHTML = ("Player Score: "+PlayerScoreUpdate);
    }
    else if (PCNumber==1) { // If pick Paper and PC picks Paper

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Paper. <br> You Picked: Paper <br> It's a Draw!");
        GameResultMessage.style.backgroundColor = "White";

    }
    else if (PCNumber==2) { // If pick Paper and PC picks Scisscors

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Scisscors. <br> You Picked: Paper <br> You Lose!");
        GameResultMessage.style.backgroundColor = "red";
        
        PCScoreUpdate = (PCScoreUpdate+1);
        PCScore.innerHTML = ("PC Score: "+PCScoreUpdate);
    }

});

ScissorsButton.addEventListener("click", function(event) {

    event.preventDefault();

    let PCNumber = Math.floor(Math.random() * 3);

    if (PCNumber==0) { // If pick Scisscors and PC picks Rock

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Rock. <br> You Picked: Scisscors <br> You Lose!");
        GameResultMessage.style.backgroundColor = "red";
        
        PCScoreUpdate = (PCScoreUpdate+1);
        PCScore.innerHTML = ("PC Score: "+PCScoreUpdate);
    }
    else if (PCNumber==1) { // If pick Scisscors and PC picks Paper

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Paper. <br> You Picked: Scisscors <br> You Win!");
        GameResultMessage.style.backgroundColor = "green";
        
        PlayerScoreUpdate = (PlayerScoreUpdate+1);
        PlayerScore.innerHTML = ("Player Score: "+PlayerScoreUpdate);
    }
    else if (PCNumber==2) { // If pick Scisscors and PC picks Scisscors

        GameResultMessage.hidden = false;
        GameResultMessage.innerHTML = ("PC has picked: Scisscors. <br> You Picked: Scisscors <br> It's a Draw!");
        GameResultMessage.style.backgroundColor = "White";
    }

});