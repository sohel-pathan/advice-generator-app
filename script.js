// decalre and assign variables
const adviceId = document.querySelector("#quote__id")
const adviceElm = document.querySelector("#advice")
const dice = document.querySelector(".dice")

// create getAdvice() function to get advice and advice Id from Api
const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceId.textContent = data.id;
        adviceElm.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}

// run getAdvice() function when user click on dice button
dice.addEventListener("click", () => getAdvice() )
