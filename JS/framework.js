let feedback

function showFeedbackDialog(){
    let dia = document.getElementById("feedbackDialog")
    dia.showModal()

    let submitBtn = document.getElementById('submitFromFeedback')
    submitBtn.addEventListener('click', () => {
        let nameInput = document.getElementById('feedbackNameInput').value
        let contactInput = document.getElementById('feedbackContactInput').value
        let contentInput = document.getElementById('feedbackContentInput').value

        //feedback.push({nameInput, contactInput, contentInput});
        alert("Thank you for your input!")
    })
}