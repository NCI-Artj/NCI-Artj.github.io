// WK 8 - Lesson Challenge

const UserAgeInput = document.getElementById("UserAgeInput");
const UserNameInput = document.getElementById("UserNameInput");
const SubmitButton = document.getElementById("SubmitButton");
const ResultMessage = document.getElementById("ResultMessage");

ResultMessage.hidden = true;

SubmitButton.addEventListener("click", function(event) {

    event.preventDefault();

    let UserAge = UserAgeInput.value;
    let UserName = UserNameInput.value;

    if (UserAge>18 && UserName!="Sam") {

        ResultMessage.hidden = false;

        ResultMessage.innerHTML="Welcome, "+UserName+"!";
    }
    else if (UserAge>18 && UserName=="Sam") {

        ResultMessage.hidden = false;

        ResultMessage.innerHTML="Sorry, "+UserName+", but you have been barred!";
    }
    else if (UserAge<=18) {

        ResultMessage.hidden = false;

        ResultMessage.innerHTML="Sorry, "+UserName+", but you must leave!";
    }
    else {

        ResultMessage.hidden = false;

        ResultMessage.innerHTML="ERROR: Please try again";
    }
});

