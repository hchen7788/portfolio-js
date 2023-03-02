function searchPost(){
    let dia = document.getElementById('searchDialog')
    dia.showModal()

    let input = document.getElementById('search-post').value;
    document.getElementById('searchInput').innerText = input;

    document.getElementById('search-post').value = "";
}