let jokeTextEl = document.getElementById("jokeText");
let spinnerE1 = document.getElementById("spinner");
let jokeBtnE1 = document.getElementById("jokeBtn");

let options = {
    method: "GET"

}

function getRandomJoke() {
    spinnerE1.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;
            spinnerE1.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}

jokeBtnE1.addEventListener("click", getRandomJoke)