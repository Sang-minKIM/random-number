const number = document.querySelector(".num");

function onClick(range) {
    const randomNumber = Math.floor(Math.random() * range * 10) + 1;
    number.innerText = randomNumber;
}
