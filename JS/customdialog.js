export function showContent(index){
    var temp = document.getElementsByTagName("template")[index];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}