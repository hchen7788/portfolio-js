function showBlogs(){
    let allBlogs = document.getElementsByClassName('crudBlog');
    allBlogs = Array.from(allBlogs)

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
        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        postBody.appendChild(editBtn)
        postBody.appendChild(deleteBtn)

        document.getElementById('blogList').appendChild(postBody)
    }
}

window.onload = showBlogs