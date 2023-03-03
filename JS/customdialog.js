// if (document.readyState !== 'loading') {
//     console.log('document is already ready, just execute code here');
//     showCustomAlert();
//     console.log('finish the first condition')
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         console.log('document was not ready, place code here');
//         showCustomAlert();
//     });
// }

let confirmMessage = "Confirm result: ";
let promptMessage = "Prompt result: ";

function showCustomAlert(){
    let btn = document.getElementById("customAlertBtn")
    let dia = document.getElementById("customAlertDialog")
    dia.showModal()
}


function showCustomConfirm(){
    clearCustomContent()
    
    setTimeout(() => {
        let btn = document.getElementById("customConfirmBtn");
        let dia = document.getElementById('customConfirmDialog')
        dia.showModal()

        let cancelBtn = document.getElementById('cancelFromConfirm');
        let okBtn = document.getElementById('okFromConfirm');
    }, 0);

}

function cancelConfirm(){
    document.getElementById("customOut").innerHTML = `${confirmMessage}false`;
}

function okConfirm(){
    document.getElementById("customOut").innerHTML = `${confirmMessage}true`;
}


function showCustomPrompt(){
    clearCustomContent()
    
    setTimeout(() => {
        let btn = document.getElementById('customPromptBtn')
        let dia = document.getElementById('customPromptDialog')
        dia.showModal()
    }, 0);
}

function emptyPromptValue(){
    document.getElementById("customOut").innerHTML = `User didn't enter anything`;

    //clean up input field
    let inputField = document.getElementById('customInput')
    inputField.value = ""
}

function changePromptValue(){
    let newInput = document.getElementById("customInput").value
    if(newInput == ""){
        document.getElementById("customOut").innerHTML = `User didn't enter anything`;
    } else{
        document.getElementById("customOut").innerHTML = `${promptMessage}${newInput}`;
    }

    //clean up input field
    let inputField = document.getElementById('customInput')
    inputField.value = ""
}

function clearCustomContent() {
    document.getElementById("customOut").innerHTML = "";
}

// document.addEventListener('DOMContentLoaded', showCustomAlert());
//document.addEventListener('DOMContentLoaded', showCustomConfirm());
//document.addEventListener('DOMContentLoaded', showCustomPrompt());