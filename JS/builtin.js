let confirmMessage = "Confirm result: ";
let promptMessage = "Prompt result: ";

function confirmTag(result){
    document.getElementById("out").innerHTML = `${confirmMessage}${result}`;
}

function readFromConfirm(){
    confirmTag(confirm("Do you confirm this?"));
}

function promptTag(result){
    document.getElementById("out").innerHTML = `${promptMessage}${result}`;
}

function unsafePrompt(){
    let output = document.getElementById("out")
    let name = prompt("What is your name?");

    setTimeout(() => {
    //let name = prompt("What is your name?");
    if(name != null){
        promptTag(name);
    } else{
        output.innerHTML = "User didn't enter anything";
    }
}, 0);
}

function safePrompt(){
    let name = prompt("What is your name?");
    let clean = DOMPurify.sanitize(name, { USE_PROFILES: { html: true } });
    if(name != null){
        promptTag(clean);
    } else{
        document.getElementById("out").innerHTML = "User didn't enter anything";
    }
}


//<b onMouseOver="alert('pwned')">Roll Me</b>