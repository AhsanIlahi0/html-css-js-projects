let sel=0;
let pc=0,rc=0,sc=0;
let you;
function select(id){
    let x=document.getElementById(id);
    if(id=="paper_clicked"){
        if(pc%2==0){
            sel=1;
            x.src="images/paper_clicked.png";
            document.getElementById("rock_clicked").src="images/rock.png";
            document.getElementById("scissor_clicked").src="images/scissor.png";
            document.getElementById("img3").style.outline="none";
            document.getElementById("img1").style.outline="none";
            document.getElementById("img2").style.outline='5px solid rgb(44, 219, 111)';
            pc++;
            rc=0;
            sc=0;
            you="paper"
        }
        else{
            sel=0;
            pc++;
            x.src="images/paper.png";
            document.getElementById("img2").style.outline="none";
        }
        // x.border="1px solid green"
    }
    else if(id=="rock_clicked"){
        if(rc%2==0)
        {
            sel=1;
            you="rock";
            rc++; 
            pc=0;
            sc=0;
            x.src="images/rock_clicked.png";
            document.getElementById("paper_clicked").src="images/paper.png";
            document.getElementById("scissor_clicked").src="images/scissor.png";
            document.getElementById("img2").style.outline="none";
            document.getElementById("img3").style.outline="none";
            document.getElementById("img1").style.outline='5px solid rgb(44, 219, 111)';
            
        }
        else{
            sel=0;
            rc++;
            x.src="images/rock.png";
            document.getElementById("img1").style.outline="none";
        }
    }
    else{
        if(sc%2==0){
            sel=1;
            you="scissor";
            sc++;
            rc=0;
            pc=0;
            x.src="images/scissor_clicked.png";
            document.getElementById("rock_clicked").src="images/rock.png";
            document.getElementById("paper_clicked").src="images/paper.png";
            document.getElementById("img1").style.outline="none";
            document.getElementById("img2").style.outline="none";
            document.getElementById("img3").style.outline='5px solid rgb(44, 219, 111)';
            
        }
        else{
            sel=0;
            sc++;
            x.src="images/scissor.png";
            document.getElementById("img3").style.outline="none";
        }
    }
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let computer;
function computer_choice(){
    let randomInt = getRandomInteger(1, 3); // Random integer between 1 and 10 (inclusive)
    if(sel==0)
    {
        alert("plz select 1 option");
    }
    switch(randomInt){
        case 1:
            computer="rock";
            document.getElementById("rock_clicked").src="images/rock_clicked.png";
            document.getElementById("img1").style.outline="5px solid red";
            break;
        case 2:
            computer="paper";
            document.getElementById("paper_clicked").src="images/paper_clicked.png";
            document.getElementById("img2").style.outline="5px solid red";
            break
        case 3:
            computer="scissor";
            document.getElementById("scissor_clicked").src="images/scissor_clicked.png";
            document.getElementById("img3").style.outline="5px solid red";

            break;
    }
    let winner=winner_check();
    if(winner=="computer"){
        let valueDIV=document.getElementById("computer");
        let value=parseInt(valueDIV.textContent);
        value++;
        valueDIV.textContent=value;

        alert("computer won");
        sel=0;
        rc=pc=sc=0;
        setTimeout(function(){
            document.getElementById("img1").style.outline="none";
            document.getElementById("img2").style.outline="none";
            document.getElementById("img3").style.outline="none";
            document.getElementById("paper_clicked").src="images/paper.png";
            document.getElementById("rock_clicked").src="images/rock.png";
            document.getElementById("scissor_clicked").src="images/scissor.png";
        },2000)

    }
    else if(winner==0){
        alert ("draw");
        sel=0;
        rc=pc=sc=0;
        setTimeout(function(){
            document.getElementById("img1").style.outline="none";
            document.getElementById("img2").style.outline="none";
            document.getElementById("img3").style.outline="none";
            document.getElementById("paper_clicked").src="images/paper.png";
            document.getElementById("rock_clicked").src="images/rock.png";
            document.getElementById("scissor_clicked").src="images/scissor.png";
        },2000)
    }
    else{
        let valueDIV=document.getElementById("you");
        let value=parseInt(valueDIV.textContent);
        value++;
        valueDIV.textContent=value;
        alert("you won");
        sel=0;
        rc=pc=sc=0;
        setTimeout(function(){ 
            document.getElementById("img1").style.outline="none";
            document.getElementById("img2").style.outline="none";
            document.getElementById("img3").style.outline="none";
            document.getElementById("paper_clicked").src="images/paper.png";
            document.getElementById("rock_clicked").src="images/rock.png";
            document.getElementById("scissor_clicked").src="images/scissor.png";
        },2000)
    }
}
function winner_check(){
    if(computer==you){
        return 0;
    }
    else if(computer=="rock"&&you=="paper"){
        return "you";
    }
    else if(computer=="rock"&&you=="scissor"){
        return "computer";
    }
    else if(computer=="paper"&&you=="rock"){
        return "computer";
    }
    else if(computer=="paper"&&you=="scissor"){
        return "you";
    }
    else if(computer=="scissor"&& you=="rock"){
        return "you";
    }
    else if(computer=="scissor"&&you=="paper"){
        return "computer";
    }
    else{
        return 0;
    }
}
function reset(){
    let valuediv1=document.getElementById("you");
    let valuediv2=document.getElementById("computer");
    valuediv1.textContent="0";
    valuediv2.textContent="0";
    alert("score reseted successfully");
}