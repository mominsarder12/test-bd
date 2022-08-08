var button = document.getElementById("btn");
var input = document.getElementById("number");
var statusBar = document.getElementById("status");

button.addEventListener("click", function(){
    if(input.value == ""){
        statusBar.innerText = "you are not enter any number in the filled"
    }else if(input.value == 0){
        statusBar.innerText = "please input a valid number 1 to real price of petrol";
        statusBar.style.backgroundColor = "red";
        statusBar.style.padding = "20px"
    }else if (input.value >= 110){
        statusBar.innerText = "your country going to like sri-lanka. please stop it to going"
    }
    else if(input.value <= 50){
        statusBar.innerText = "your petrol price is very low"
    }
    else{
        statusBar.innerText = "situation is normal"
    }
})



