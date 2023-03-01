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

        cancelBtn.addEventListener('click', () => {
            document.getElementById("customOut").innerHTML = `${confirmMessage}false`;
        });
        okBtn.addEventListener('click', () => {
            document.getElementById("customOut").innerHTML = `${confirmMessage}true`;
        });
    }, 0);

}


function showCustomPrompt(){
    clearCustomContent()
    
    setTimeout(() => {
        let btn = document.getElementById('customPromptBtn')
        let dia = document.getElementById('customPromptDialog')
        dia.showModal()
    }, 0);

    let btn = document.getElementById('customPromptBtn')
    let dia = document.getElementById('customPromptDialog')
    dia.showModal()
}

function emptyPromptValue(){
    document.getElementById("customOut").innerHTML = `User didn't enter anything`;

    //clean up input field
    let inputField = document.getElementById('customInput')
    inputField.value = ""
}

function changePromptValue(){
    let newInput = document.getElementById("customInput").value
    document.getElementById("customOut").innerHTML = `${promptMessage}${newInput}`;

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