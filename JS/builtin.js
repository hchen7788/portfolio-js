let confirmMessage = "Confirm result: ";
let promptMessage = "Prompt result: ";

function confirmTag(result){
    document.getElementById("confirmOut").innerHTML = `${confirmMessage}${result}`;
}

function readFromConfirm(){
    confirmTag(confirm("Do you confirm this?"));
}

function promptTag(result){
    document.getElementById("promptOut").innerHTML = `${promptMessage}${result}`;
}

function unsafePrompt(){
    let name = prompt("What is your name?");
    if(name != null){
        promptTag(name);
    } else{
        document.getElementById("promptOut").innerHTML = "User didn't enter anything";
    }
}

function safePrompt(){

}


//<b onMouseOver="alert('pwned')">Roll Me</b>