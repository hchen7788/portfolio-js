let confirmMessage = "Confirm result: ";
let promptMessage = "Prompt result: ";

function showCustomAlert(){
    let button = document.getElementById("customAlertBtn");
    button.addEventListener("click", function(){
        var temp = document.getElementById("alertTemplate");
                var clon = temp.content.cloneNode(true);
                document.body.appendChild(clon);
    });
}

function showCustomConfirm(){
    let button = document.getElementById("customConfirmBtn");
    let cancelBtn = document.getElementById('cancelFromConfirm');
    let okBtn = document.getElementById('okFromConfirm');

    button.addEventListener("click", () => {
        var temp = document.getElementById("confirmTemplate");
        var clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    });

    // cancelBtn.addEventListener('click', () => {
    //     // document.getElementById("customOut").innerHTML = `hi from cancel`;
    // });
    // okBtn.addEventListener('click', () =>{
    //     document.getElementById("customOut").innerHTML = `hi from ok`;
    // });

}

function showCustomPrompt(){
    let button = document.getElementById("customPromptBtn");
    button.addEventListener("click", () => {
        var temp = document.getElementById("promptTemplate");
        var clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    });
}

document.addEventListener('DOMContentLoaded', showCustomAlert());
document.addEventListener('DOMContentLoaded', showCustomConfirm());
document.addEventListener('DOMContentLoaded', showCustomPrompt());