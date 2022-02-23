const input = document.querySelector("#guess-input");
const start = document.querySelector("#guess-btn");
const message = document.querySelector(".message");
let random;

function getRandomNumber() {
    random = Math.floor(Math.random() * (10 - 1) + 1);
    return random;
}

getRandomNumber();

start.addEventListener("click", checkNumber);

let field = 0;

function checkNumber() {
    field++;
    console.log(random);

    if (start.innerHTML === "Начать новую игру") {
        message.innerHTML = "";
        start.innerHTML = "Проверить";
        input.value = "";
        field = 0;
    } else if (input.value > 10 || input.value < 1) {
        message.innerHTML = `Введите валидное число`;
        field--;
    } else if (+input.value === random) {
        input.value = "";
        input.style.border = "2px solid green";
        message.innerHTML = `Угадали, поздравляем! `;
        start.innerHTML = "Начать новую игру";
        getRandomNumber();
    } else if (input.value !== random && field < 3) {
        input.value = "";
        input.style.border = "2px solid red";
        message.innerHTML = `Вы не угадали. У вас есть еще ${3 - counter} попытки`;
    } else if (field > 2) {
        message.innerHTML = `Вы проиграли`;
        start.innerHTML = "Начать новую игру";
        getRandomNumber();
        input.style.border = "1px solid";
    }
}