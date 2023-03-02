// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items letiable an empty array
let items = JSON.parse(localStorage.getItem("styled-post-list")) || [];

localStorage.setItem("styled-post-list", JSON.stringify(items));

function styledAddPrompt(){
    let dia = document.getElementById('addBlogEntry')
    dia.showModal()

    let saveBtn = document.getElementById('addSaveBtn')
    saveBtn.setAttribute('onclick', "styledAddItem()")
}

// function to add item to the items array
function styledAddItem() {
    // get the value of the input box with querySelector
    let addTitle = document.getElementById("addTitleInput").value;
    let addDate = document.getElementById("addDateInput").value;
    let addSummary = document.getElementById("addSummaryInput").value;

    // If input box is empty, return and alert the user
    if (addTitle === "" || addDate == "" || addSummary == "") return alert("Please enter data");

    // If input is valid, add item to items array
    items.push({
        Title: addTitle,
        Date: addDate,
        Summary: addSummary
    });

    // then convert to a string with JSON.stringify and save to localStorage
    localStorage.setItem("styled-post-list", JSON.stringify(items));

    // call function to list all items
    styledListItems();

    // clear input box
    document.getElementById("addTitleInput").value = "Title"
    document.getElementById("addDateInput").value = "Date";
    document.getElementById("addSummaryInput").value = "Summary";
}

function styledEditPrompt(index){
    document.getElementById("editTitleInput").value = items[index]["Title"];
    document.getElementById("editDateInput").value = items[index]["Date"];
    document.getElementById("editSummaryInput").value = items[index]["Summary"];

    let dia = document.getElementById('editBlogEntry')
    dia.showModal()

    let saveBtn = document.getElementById('editSaveBtn')
    saveBtn.setAttribute('onclick', 'styledEditItem(' + index + ')')

}

function styledEditItem(index){
    let editTitle = document.getElementById("editTitleInput").value;
    let editDate = document.getElementById("editDateInput").value;
    let editSummary = document.getElementById("editSummaryInput").value;

    items[index]["Title"] = editTitle;
    items[index]["Date"] = editDate;
    items[index]["Summary"] = editSummary;

    localStorage.setItem("styled-post-list", JSON.stringify(items));
    styledListItems();
}

function styledDeletePrompt(index){
    let dia = document.getElementById('deleteConfirmEntry')
    dia.showModal()
    let btn = document.getElementById('deleteConfirmBtn')
    btn.setAttribute('onclick', 'styledDeleteItem(' + index + ')');
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function styledDeleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("styled-post-list", JSON.stringify(items));
  styledListItems();
}

// function that generates list of items and populates the html
function styledListItems() {
    if(items.length == 0){
        document.querySelector("#blogList").innerText = "No Blog currently listed";
        return;
    }
    
    let list = "";

    for (let i = 0; i < items.length; i++) {
        list += "<li>";
        list += "Title: " + items[i]["Title"] + " ";
        list += "<br>";
        list += "Date: " + items[i]["Date"] + " ";
        list += "<br>";
        list += "Summary: " + items[i]["Summary"] + " ";
        list += "<br>"
        list +=
        "<button class='label alert' onclick='styledEditPrompt(" +
        i +
        ")'>Edit</button>";
        list +=
        "<button class='label alert' onclick='styledDeletePrompt(" +
        i +
        ")'>Delete</button></li>";
    }
    document.getElementById("blogList").innerHTML = list;
    //alert(document.querySelector("#blogList"))
    // document.querySelector("#blogList").innerHTML = list;
}

// function to run when page loads
// (function () {
//     listItems();
// })();

window.onload = () => {
    styledListItems();
}




// let allBlogs

// function createTemplate(){
//     let addBtn = document.getElementById("addBtn");
//     addBtn.addEventListener("click", function(){

//         document.getElementById('addTitleInput').value="Title"
//         document.getElementById('addDateInput').value = "Date"
//         document.getElementById('addSummaryInput').value = "Summary"

//         let dia = document.getElementById('addBlogEntry')
//         dia.showModal()
//     });

//     let saveBtn = document.getElementById("addSaveBtn");
//     saveBtn.addEventListener('click', () => {
//         addPost()
//     })
// }

// function addPost(){
//     let newTitle = document.getElementById('addTitleInput').value
//     let newDate = document.getElementById('addDateInput').value
//     let newSummary = document.getElementById('addSummaryInput').value

//     let newEl = document.createElement('p')
//     newEl.setAttribute('id', 'p4')
//     newEl.setAttribute('class', 'crudBlog')
//     newEl.setAttribute('title', newTitle)
//     newEl.setAttribute('date', newDate)
//     newEl.setAttribute('summary', newSummary)
//     allBlogs.push(newEl)

//     loadPage()
// }

// function setup(){
//     createTemplate()

//     allBlogs = document.getElementsByClassName('crudBlog');
//     allBlogs = Array.from(allBlogs)

//     loadPage()
// }

// function loadPage(){

//     // createTemplate()

//     // allBlogs = document.getElementsByClassName('crudBlog');
//     // allBlogs = Array.from(allBlogs)

//     //clear existing posts on page
//     $(document).ready(function(){
//         $('div').remove();
//     })


//     //start loading fresh
//     if(allBlogs.length == 0){
//         let postBody = document.createElement('p')
//         postBody.innerText = 'No Blog currently listed'
//         document.getElementById('blogList').appendChild(postBody)
//         return
//     }

//     for(let i = 0; i < allBlogs.length; i++){
//         let postBody = document.createElement('div')
//         let el = document.createElement('p')

//         el.setAttribute('id', allBlogs[i].getAttribute('id'))
//         el.setAttribute('class', 'crudBlog')
//         el.setAttribute('title', allBlogs[i].getAttribute('title'))
//         el.setAttribute('date', allBlogs[i].getAttribute('date'))
//         el.setAttribute('summary', allBlogs[i].getAttribute('summary'))

//         // print blog
//         el.innerText = `${el.getAttribute('title')}

//         ${el.getAttribute('date')}
        
//         ${el.getAttribute('summary')}`

//         postBody.appendChild(el)

//         let editBtn = document.createElement('button')
//         editBtn.setAttribute('class', 'fa-solid fa-pen-to-square')
//         // editBtn.setAttribute('class', 'editBtn')
//         editBtn.addEventListener('click', () => {
//             console.log(i)
//             editPost(i)
//         })

//         let deleteBtn = document.createElement('button')
//         // deleteBtn.setAttribute('class', 'deleteBtn')
//         deleteBtn.setAttribute('class', 'fa-solid fa-trash')
//         deleteBtn.addEventListener('click', () => {
//             deletePost(i)
//         })
//         postBody.appendChild(editBtn)
//         postBody.appendChild(deleteBtn)

//         document.getElementById('blogList').appendChild(postBody)
//     }
// }

// function editPost(i) {
//     //let editBtn = document.querySelector("button[parentId=" + allBlogs[i].getAttribute('id') + "]");
//     let dia = document.getElementById('editBlogEntry')

//     document.getElementById('editTitleInput').value = allBlogs[i].getAttribute('title')
//     document.getElementById('editDateInput').value = allBlogs[i].getAttribute('date')
//     document.getElementById('editSummaryInput').value = allBlogs[i].getAttribute('summary')
//     dia.showModal()
    
//     let saveBtn = document.getElementById("editSaveBtn");
//     saveBtn.addEventListener('click', () => {
//         let newTitle = document.getElementById('editTitleInput').value
//         let newDate = document.getElementById('editDateInput').value
//         let newSummary = document.getElementById('editSummaryInput').value

//         allBlogs[i].setAttribute('title', newTitle)
//         allBlogs[i].setAttribute('date', newDate)
//         allBlogs[i].setAttribute('summary', newSummary)

//         loadPage()
//     })
// }

// function deletePost(i){
//     let dia = document.getElementById('deleteConfirmEntry')
//     dia.showModal()

//     let okBtn = document.getElementById('deleteConfirmBtn')
//     okBtn.addEventListener('click', () => {
//         allBlogs.splice(i, 1);
//         loadPage();
//     });
// }


// window.addEventListener('DOMContentLoaded', setup)
