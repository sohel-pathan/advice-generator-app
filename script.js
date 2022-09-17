const adviceId = document.querySelector("#quote__id")
const adviceElm = document.querySelector("#advice")
const dice = document.querySelector(".dice")

dice.addEventListener("click", () => {
    getAdvice()
})

function getAdvice(){
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