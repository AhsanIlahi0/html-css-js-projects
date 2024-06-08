let inputElements = document.querySelectorAll("#input");
let boxes = document.querySelectorAll("#box");
let guesses = 5;
let guess = document.getElementById("remain_guess");
guess.append("0" + guesses);
for (let i = 0; i < boxes.length; i++) {
    let val;
    switch (i) {
        case 0:
            val = "p";
            break;
        case 1:
            val = "t";
            break;
        case 2:
            val = "o";
            break;
        case 3:
            val = "n";
            break;
    }
    if (guesses > 0) {
        boxes[i].addEventListener("keydown", (event) => {
            if (guesses>0&&event.key >= "a" && event.key <= "z") {
                if (event.key === val) {
                    event.preventDefault();
                    boxes[i].value = val;
                    focusNextBox(i);
                    boxes[i].style.color = "#1bac8c";
                } else if (event.key === "Backspace") {
                    boxes[i].style.color = "#1bac8c";
                } else {
                    boxes[i].value = event.key;
                    boxes[i].style.color = "red";
                    boxes[i].style.outlineColor = "red";
                    let guessed = document.getElementById("guessed");
                    if (event.key >= "a" && event.key <= "z") {
                        guessed.append(event.key + ",");
                        guesses--;
                        guess.textContent = ("remaining guesses: " + guesses);
                    }
                }
                if (guesses===0){
                    
                }
            }
        });
    }
}
function focusNextBox(currentIndex) {
    for (let i = currentIndex + 1; i < boxes.length; i++) {
        if (!boxes[i].value) {
            // Skip boxes that already have a value
            boxes[i].focus();
            break;
        }
    }
}
reset = () => {
    for (let i of boxes) {
        if (i.value === "y" || i.value === "h") {
        } else {
            i.value = "";
        }
    }
    let guessed = document.getElementById("guessed");
    guessed.textContent = "wrong letters:";
};
isavailable = (val) => { };
