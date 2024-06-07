let inputElements = document.querySelectorAll('#input');  // Selecting all elements with the id 'input'
let boxes = document.querySelectorAll('#box');  // Selecting all elements with the class 'box'

for (let i = 0; i <boxes.length; i++) {
    let val;
    switch(i){
        case 0:
            val='p';
            break;
        case 1:
            val='y';
            break;
        case 2:
            val='t';
            break;
        case 3:
            val='h';
            break;
        case 4:
            val='o';
            break;
        case 5:
            val='n';
            break;
    }
    boxes[i].addEventListener('keydown', (event) => {
        if (event.key === val ) {
            event.preventDefault();
            boxes[i].value=val;
            focusNextBox(i);
        }
       else if(event.key==='Backspace'){
            boxes[i].style.color='#1bac8c';

        }
        else {
            boxes[i].style.color='red';
            let guessed=document.getElementById("guessed");
            guessed.append(event.key+',')
        }
    });
}
function focusNextBox(currentIndex) {
    for (let i = currentIndex + 1; i < boxes.length; i++) {
        if (!boxes[i].value) {  // Skip boxes that already have a value
            boxes[i].focus();
            break;
        }
    }
}
reset=()=>{
    for(let i of boxes){
        if(i.value==='y'||i.value==='h')
        {

        }
       else{
           i.value='';
           }
    }
}