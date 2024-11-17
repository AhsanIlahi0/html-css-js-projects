
var msgs=["enter tour guess first","the number to be guessed is greater","the number to be guessed is lesser","yout guessed the number"];
let i = 0;
const Message = document.getElementById("msg");

function updateNumber() {
  if (i < 100) {
    const Num_to_guess = Math.floor(Math.random() * 100) + 1; 
    Message.textContent = Num_to_guess;
    i++;
   setTimeout(updateNumber, 20);
  }
else{
    Message.style.opacity=0;
    setTimeout(() => {
    Message.style.opacity=1;

        Message.textContent="Good luck";
    }, 500);
}

}

updateNumber(); // Start the process

const num_to_guess=Math.floor(Math.random() * (100 - 1 + 1)) + 1; 
document.getElementById("msg").textContent=num_to_guess;

let message=document.getElementById("msg");
function execute(){
    message.style.opacity=0;
    let value=document.getElementById("ip");
    if(value.value==num_to_guess){
        setTimeout(() => {
        message.style.opacity=1; 
        message.style.color="green";
        message.textContent=msgs[3];
        }, 500);
      
        
    }
    else if(value.value==''){
        setTimeout(() => {
            message.style.opacity=1;
            message.textContent=msgs[0];
        }, 500);
    }
    else if(value.value>num_to_guess){
        setTimeout(() => {
            message.style.opacity=1;
            message.textContent=msgs[2];
        }, 500);
    }
    else if(value.value<num_to_guess){
        setTimeout(() => {
            message.textContent=msgs[1];
            message.style.opacity=1;
        }, 500);
    }
}