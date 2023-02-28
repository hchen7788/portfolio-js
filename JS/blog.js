let allBlogs

function createTemplate(){
    let addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", function(){
        // var temp = document.getElementById("blogEntry");
        // var clon = temp.content.cloneNode(true);
        // document.body.appendChild(clon);
        let dia = document.getElementById('blogEntry')
        dia.showModal()
    });
}

function savePost(){
    let saveTitle = document.querySelector('titleInput').value
}

function loadPage(){

    createTemplate()
    // savePost()

    allBlogs = document.getElementsByClassName('crudBlog');
    allBlogs = Array.from(allBlogs)

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
    let dia = document.getElementById('blogEntry')

    let inputTitle = document.getElementById('titleInput')
    inputTitle.value = el.getAttribute('title')
    let inputDate = document.getElementById('dateInput')
    inputDate.value = el.getAttribute('date')
    let inputSummary = document.getElementById('summaryInput')
    inputSummary.value = el.getAttribute('summary')
    dia.showModal()
    
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

function createPost(){
    alert('trying to create a new post!')
}

//window.onload = loadPage
window.addEventListener('DOMContentLoaded', loadPage)
