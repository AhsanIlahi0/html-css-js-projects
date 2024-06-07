appendToDisplay=(val)=>{
    let display=document.getElementById("display"); 
    if(display.textContent==0){ 
        display.textContent=null;
    }
    if(val=='left'){
        val='(';
    }
    else if(val=='right'){
        val=')';
    }
    if(val=='x'){

            let currentvalue=display.textContent;
            let display1=document.getElementById("display1");
            let newvalue=currentvalue.slice(0,-1);
            if(newvalue==''){
                newvalue='0';
                display1.textContent='';
            }
            display.textContent=newvalue;
    }
    else{
        display.append(val);   
    }
    
}
ispresent=(val)=>{
    let display=document.getElementById("display");
    display.textContent.forEach(element => {
        if(element=val){
            return true;
        }
    }
);
return false;
}
clearDisplay=()=>{
    document.getElementById("display").textContent=0;
    document.getElementById("display1").textContent="";
    x=0;
}
calculateResult=()=>{
    let x=document.getElementById("display");
    let RESULT=document.getElementById("display1");
    let result=eval(x.textContent);
    RESULT.textContent=result;
}