// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items letiable an empty array
// let items = JSON.parse(localStorage.getItem("post-list")) || [];
let items = JSON.parse(localStorage.getItem("post-list")) || [];
// if(items.length == 0){
    items = [{
        Title: "Post 1 Title",
        Date: "Post 1 Date",
        Summary: "Post 1 Summary"
    },
    {
        Title: "Post 2 Title",
        Date: "Post 2 Date",
        Summary: "Post 2 Summary"
    },
    {
        Title: "Post 3 Title",
        Date: "Post 3 Date",
        Summary: "Post 3 Summary"
    }];
//}

localStorage.setItem("post-list", JSON.stringify(items));


function addPrompt(){
    let dia = document.getElementById('addBlogEntry')
    dia.showModal()

    let saveBtn = document.getElementById('addSaveBtn')
    saveBtn.setAttribute('onclick', "addItem()")
}

// function to add item to the items array
function addItem() {
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
    localStorage.setItem("post-list", JSON.stringify(items));

    // call function to list all items
    listItems();

    // clear input box
    document.getElementById("addTitleInput").value = "Title"
    document.getElementById("addDateInput").value = "Date";
    document.getElementById("addSummaryInput").value = "Summary";
}

function editPrompt(index){
    document.getElementById("editTitleInput").value = items[index]["Title"];
    document.getElementById("editDateInput").value = items[index]["Date"];
    document.getElementById("editSummaryInput").value = items[index]["Summary"];

    let dia = document.getElementById('editBlogEntry')
    dia.showModal()

    let saveBtn = document.getElementById('editSaveBtn')
    saveBtn.setAttribute('onclick', 'editItem(' + index + ')')

}

function editItem(index){
    let editTitle = document.getElementById("editTitleInput").value;
    let editDate = document.getElementById("editDateInput").value;
    let editSummary = document.getElementById("editSummaryInput").value;

    items[index]["Title"] = editTitle;
    items[index]["Date"] = editDate;
    items[index]["Summary"] = editSummary;

    localStorage.setItem("post-list", JSON.stringify(items));
    listItems();
}

function deletePrompt(index){
    let dia = document.getElementById('deleteConfirmEntry')
    dia.showModal()
    let btn = document.getElementById('deleteConfirmBtn')
    btn.setAttribute('onclick', 'deleteItem(' + index + ')');
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("post-list", JSON.stringify(items));
  listItems();
}

// function that generates list of items and populates the html
function listItems() {
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
        "<button class='label alert' onclick='editPrompt(" +
        i +
        ")'>Edit</button>";
        list +=
        "<button class='label alert' onclick='deletePrompt(" +
        i +
        ")'>Delete</button></li>";
    }
    document.getElementById("blogList").innerHTML = list;
    //alert(document.querySelector("#blogList"))
    // document.querySelector("#blogList").innerHTML = list;
}

// function to run when page loads
(function () {
    // items.push({
    //     Title: "Post 1 Title",
    //     Date: "Post 1 Date",
    //     Summary: "Post 1 Summary"
    // });
    // items.push({
    //     Title: "Post 2 Title",
    //     Date: "Post 2 Date",
    //     Summary: "Post 2 Summary"
    // });
    // items.push({
    //     Title: "Post 3 Title",
    //     Date: "Post 3 Date",
    //     Summary: "Post 3 Summary"
    // });
    // localStorage.setItem("post-list", JSON.stringify(items));
    listItems();
})();
