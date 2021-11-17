var vastus=document.getElementById("vastus");
var kogus=document.getElementById("kogus");
var vastus2=document.getElementById("vastus2");
var kogus2=document.getElementById("kogus2");
var pilt=document.getElementById("pilt");

const dollar=1.16;
const kroon=10.65;
const rub=84.20;
const frank=1.077;

const gekt=113.8;
const km2=1.138;
const m2=1138062;
const sm2=11380621942;
const mm2=1138062194188;

// korrutab(перемножает)
function calculate(val, currency){
    return(val*currency).toFixed(3);
    //toFixed(3) -? 3 märki peale komat
}

function selectOptionChange(event){
    var inputValue=kogus2.value;
    if(event.target.value==="dollar"){
        vastus2.innerHTML=calculate(inputValue,dollar) + "$";
        pilt.src="pildid/dollar.png";
    }
    else if(event.target.value==="kroon"){
        vastus2.innerHTML=calculate(inputValue,kroon) + "SEK";
        pilt.src="pildid/kroon.png";
    }
    else if(event.target.value==="rub"){
        vastus2.innerHTML=calculate(inputValue,rub) + "₽";
        pilt.src="pildid/rouble.png";
    }
    else if(event.target.value==="frank"){
        vastus2.innerHTML=calculate(inputValue,frank) + "CHF";
        pilt.src="pildid/frank.png";
    }
}
function selectOptionChange2(event){
    var inputValue=kogus4.value;
    if(event.target.value==="gekt"){
        vastus4.innerHTML=calculate(inputValue,gekt) + " hektarit";
    }
    else if(event.target.value==="km2"){
        vastus4.innerHTML=calculate(inputValue,km2) + " kilomeetrit";
    }
    else if(event.target.value==="m2"){
        vastus4.innerHTML=calculate(inputValue,m2) + " meetrit";
    }
    else if(event.target.value==="sm2"){
        vastus4.innerHTML=calculate(inputValue,sm2) + " sentimeetrit";
    }
    else if(event.target.value==="mm2"){
        vastus4.innerHTML=calculate(inputValue,mm2) + " millimeetrit";
    }
}
function radioChange(event){
    if(event.target.id=="dollar"){
        vastus.innerHTML=calculate(kogus.value,dollar) + "$";
    }
    else if(event.target.id=="kroon"){
        vastus.innerHTML=calculate(kogus.value,kroon) + "SEK";
    }
    else if(event.target.id=="rub"){
        vastus.innerHTML=calculate(kogus.value,rub) + "₽";
    }
    else if(event.target.id=="frank"){
        vastus.innerHTML=calculate(kogus.value,frank) + "CHF";
    }
}
function validate(){
    let x= document.forms["var"]["kogus"].value;
    if (x==""){
        alert("Sisesta kogus: ");
        return false;
    }
}
function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
}
