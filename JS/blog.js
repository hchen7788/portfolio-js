let allBlogs

function createTemplate(){
    let addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", function(){
        var temp = document.getElementById("blogTemplate");
        var clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    });

    let box = document.getElementById('blogTemplate')
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
        editBtn.addEventListener('click', () => {
            editPost()
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

function editPost() {
    alert("trying to edit!")
}

function deletePost(el){
    alert("trying to delete!")
    // console.log(el)
    // console.log(allBlogs[allBlogs.length - 1])
    // console.log(el.getAttribute('title'))
    // delete allBlogs[allBlogs.indexOf(el)]
    console.log(allBlogs)

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
