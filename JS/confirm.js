function readFromConfirm(){
    let prompt = "Please press Cancel or OK.";
    let text = "";
    if(confirm(prompt) == true){
        text = "The value returned by the confirm method is: OK";
    } else{
        text = "The value returned by the confirm method is: Cancel";
    }
    document.getElementById("out").innerHTML = text;
}