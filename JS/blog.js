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
        alert("saving from add!")
        addPost()
    })
}

function addPost(){
    alert("adding new post!")
    let newTitle = document.getElementById('addTitleInput').value
    let newDate = document.getElementById('addTitleInput').value
    let newSummary = document.getElementById('addTitleInput').value

    let newEl = document.createElement('p')
    newEl.setAttribute('id', 'p4')
    newEl.setAttribute('class', 'crudBlog')
    newEl.setAttribute('title', newTitle)
    newEl.setAttribute('date', newDate)
    newEl.setAttribute('summary', newSummary)
    allBlogs.push(newEl)

    console.log(allBlogs.length)
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

    $(document).ready(function(){
        $('div').remove();
    })
    console.log(allBlogs.length)



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
        editBtn.innerText = "Edit"
        editBtn.setAttribute('class', 'editBtn')
        editBtn.setAttribute('parentId', el.getAttribute('id'))
        editBtn.addEventListener('click', () => {
            editPost(el)
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute('class', 'deleteBtn')
        deleteBtn.addEventListener('click', () => {
            deletePost(el)
        })
        postBody.appendChild(editBtn)
        postBody.appendChild(deleteBtn)

        document.getElementById('blogList').appendChild(postBody)
    }
}

function editPost(el) {
    let editBtn = document.querySelector("button[parentId=" + el.getAttribute('id') + "]");
    let dia = document.getElementById('editBlogEntry')

    document.getElementById('editTitleInput').value = el.getAttribute('title')
    document.getElementById('editDateInput').value = el.getAttribute('date')
    document.getElementById('editSummaryInput').value = el.getAttribute('summary')
    dia.showModal()
    
    let saveBtn = document.getElementById("editSaveBtn");
    saveBtn.addEventListener('click', () => {
        alert("saving from edit!")
    })
}

function deletePost(el){
    alert("trying to delete!")
    // console.log(el)
    // console.log(allBlogs[allBlogs.length - 1])
    // console.log(el.getAttribute('title'))
    // delete allBlogs[allBlogs.indexOf(el)]

    //console.log(allBlogs)
    console.log(el)
    console.log(allBlogs.indexOf(el))

    let temp = el
    el = allBlogs[allBlogs.length - 1]
    allBlogs[allBlogs.length - 1] = temp

    console.log(allBlogs)
    // console.log(el)
    // console.log(allBlogs[allBlogs.length - 1])
}


//window.onload = loadPage
window.addEventListener('DOMContentLoaded', setup)
