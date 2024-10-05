let boxes = document.querySelectorAll("input#box");
let guesses = 5;
let guess = document.getElementById("remain_guess");
guess.append("0" + guesses);

const word = "türkey";

for (let i = 0; i < boxes.length; i++) {
    let val = word[i];
    
    boxes[i].addEventListener("keydown", (event) => {
        if (guesses > 0 && event.key.toLowerCase() >= "a" && event.key.toLowerCase() <= "z") {
            if (event.key.toLowerCase() === val) {
                event.preventDefault();
                boxes[i].value = val;
                focusNextBox(i);
                boxes[i].style.color = "#1bac8c";
            } else if (event.key === "Backspace") {
                boxes[i].style.color = "#1bac8c";
                boxes[i].style.outlineColor = "#1bac8c";
            } else {
                boxes[i].value = event.key.toLowerCase();
                boxes[i].style.color = "red";
                boxes[i].style.outlineColor = "red";
                let guessed = document.getElementById("guessed");
                guessed.append(event.key.toLowerCase() + ",");
                guesses--;
                guess.textContent = ("remaining guesses: " + guesses);
            }
            if (Array.from(boxes).map(box => box.value).join('') === word) {
                let result = document.getElementById("win");
                result.style.visibility = "visible";
                result.removeAttribute("hidden");
                boxes[0].classList.add('disabled');
                document.getElementById("break").style.backgroundColor = "#1ae490";
            }
            if (guesses === 0) {
                for (let box of boxes) {
                    box.style.color = "red";
                    box.style.outlineColor = "red";
                }
                let result = document.getElementById("win");
                result.style.visibility = "visible";
                result.removeAttribute("hidden");
                result.style.backgroundColor = "red";
                result.textContent = "you lost";
                document.getElementById("break").style.backgroundColor = "red";
            }
        }
    });
}

function focusNextBox(currentIndex) {
    for (let i = currentIndex + 1; i < boxes.length; i++) {
        if (!boxes[i].value) {
            boxes[i].focus();
            break;
        }
    }
}

reset = () => {
    for (let i of boxes) {
        i.value = "";
    }
    let guessed = document.getElementById("guessed");
    guessed.textContent = "wrong letters:";
    guesses = 5;
    guess.textContent = ("remaining guesses: " + guesses);
    let result = document.getElementById("win");
    result.style.visibility = "hidden";
    document.getElementById("break").style.backgroundColor = "#c7c7c7";
};
