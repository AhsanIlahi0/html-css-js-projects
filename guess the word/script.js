let boxes = document.querySelectorAll("input#box");
let guesses = 5;
let guess = document.getElementById("remain_guess");
guess.append("0" + guesses);

const word = "turkey";

for (let i = 0; i < boxes.length; i++) {
    let val = word[i];
    
    boxes[i].addEventListener("keydown", (event) => {
        // Allow Backspace, Arrow Keys, and Delete for navigation and correction
        if (
            event.key === "Backspace" || 
            event.key === "ArrowLeft" || 
            event.key === "ArrowRight" || 
            event.key === "Delete"
        ) {
            return; // Let these keys function normally
        }
    
        // Check if the pressed key is a valid alphabet (lowercase or uppercase)
        if (guesses > 0 && /^[a-zA-Z]$/.test(event.key)) {
            event.preventDefault(); // Prevent default behavior
            if (event.key.toLowerCase() === val) {
                boxes[i].value = val; // Correct letter
                focusNextBox(i); // Focus on the next box
                boxes[i].style.color = "#1bac8c";
            } else {
                boxes[i].value = event.key.toLowerCase(); // Incorrect letter
                boxes[i].style.color = "red";
                boxes[i].style.outlineColor = "red";
                let guessed = document.getElementById("guessed");
                guessed.append(event.key.toLowerCase() + ",");
                guesses--;
                guess.textContent = "remaining guesses: " + guesses;
            }
    
            // Check for a win condition
            if (Array.from(boxes).map(box => box.value).join('') === word) {
                let result = document.getElementById("win");
                result.style.visibility = "visible";
                result.removeAttribute("hidden");
                boxes[0].classList.add('disabled');
                document.getElementById("break").style.backgroundColor = "#1ae490";
            }
    
            // Check for a loss condition
            if (guesses === 0) {
                for (let box of boxes) {
                    box.style.color = "red";
                    box.style.border = "1px solid red";
                    box.style.outlineColor = "red";
                }
                boxes.forEach(box => box.setAttribute('disabled', true));
                let result = document.getElementById("win");
                result.style.visibility = "visible";
                result.removeAttribute("hidden");
                result.style.backgroundColor = "red";
                result.textContent = "you lost";
                document.getElementById("break").style.backgroundColor = "red";
            }
        } else {
            event.preventDefault(); // Ignore non-alphabet keys
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
    boxes[0].focus();
};
