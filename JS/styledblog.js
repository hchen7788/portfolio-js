let allBlogs

function createTemplate(){
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function(){

        document.getElementById('addTitleInput').value="Title"
        document.getElementById('addDateInput').value = "Date"
        document.getElementById('addSummaryInput').value = "Summary"

        let dia = document.getElementById('addBlogEntry')
        dia.showModal()
    });

    let saveBtn = document.getElementById("addSaveBtn");
    saveBtn.addEventListener('click', () => {
        addPost()
    })
}

function addPost(){
    let newTitle = document.getElementById('addTitleInput').value
    let newDate = document.getElementById('addDateInput').value
    let newSummary = document.getElementById('addSummaryInput').value

    let newEl = document.createElement('p')
    newEl.setAttribute('id', 'p4')
    newEl.setAttribute('class', 'crudBlog')
    newEl.setAttribute('title', newTitle)
    newEl.setAttribute('date', newDate)
    newEl.setAttribute('summary', newSummary)
    allBlogs.push(newEl)

    loadPage()
}

function setup(){
    createTemplate()

    allBlogs = document.getElementsByClassName('crudBlog');
    allBlogs = Array.from(allBlogs)

    loadPage()
}

function loadPage(){

    // createTemplate()

    // allBlogs = document.getElementsByClassName('crudBlog');
    // allBlogs = Array.from(allBlogs)

    //clear existing posts on page
    $(document).ready(function(){
        $('div').remove();
    })


    //start loading fresh
    if(allBlogs.length == 0){
        let postBody = document.createElement('p')
        postBody.innerText = 'No Blog currently listed'
        document.getElementById('blogList').appendChild(postBody)
        return
    }

    for(let i = 0; i < allBlogs.length; i++){
        let postBody = document.createElement('div')
        let el = document.createElement('p')

        el.setAttribute('id', allBlogs[i].getAttribute('id'))
        el.setAttribute('class', 'crudBlog')
        el.setAttribute('title', allBlogs[i].getAttribute('title'))
        el.setAttribute('date', allBlogs[i].getAttribute('date'))
        el.setAttribute('summary', allBlogs[i].getAttribute('summary'))

        el.innerText = `${el.getAttribute('title')}
        Date: ${el.getAttribute('date')}
        Summary: ${el.getAttribute('summary')}`

        postBody.appendChild(el)

        let editBtn = document.createElement('button')
        editBtn.setAttribute('class', 'fa-solid fa-pen-to-square')
        // editBtn.setAttribute('class', 'editBtn')
        editBtn.addEventListener('click', () => {
            console.log(i)
            editPost(i)
        })

        let deleteBtn = document.createElement('button')
        // deleteBtn.setAttribute('class', 'deleteBtn')
        deleteBtn.setAttribute('class', 'fa-solid fa-trash')
        deleteBtn.addEventListener('click', () => {
            deletePost(i)
        })
        postBody.appendChild(editBtn)
        postBody.appendChild(deleteBtn)

        document.getElementById('blogList').appendChild(postBody)
    }
}

function editPost(i) {
    //let editBtn = document.querySelector("button[parentId=" + allBlogs[i].getAttribute('id') + "]");
    let dia = document.getElementById('editBlogEntry')

    document.getElementById('editTitleInput').value = allBlogs[i].getAttribute('title')
    document.getElementById('editDateInput').value = allBlogs[i].getAttribute('date')
    document.getElementById('editSummaryInput').value = allBlogs[i].getAttribute('summary')
    dia.showModal()
    
    let saveBtn = document.getElementById("editSaveBtn");
    saveBtn.addEventListener('click', () => {
        let newTitle = document.getElementById('editTitleInput').value
        let newDate = document.getElementById('editDateInput').value
        let newSummary = document.getElementById('editSummaryInput').value

        allBlogs[i].setAttribute('title', newTitle)
        allBlogs[i].setAttribute('date', newDate)
        allBlogs[i].setAttribute('summary', newSummary)

        loadPage()
    })
}

function deletePost(i){
    let dia = document.getElementById('deleteConfirmEntry')
    dia.showModal()

    let okBtn = document.getElementById('deleteConfirmBtn')
    okBtn.addEventListener('click', () => {
        allBlogs.splice(i, 1);
        loadPage();
    });
}


window.addEventListener('DOMContentLoaded', setup)
