var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var plusbutton=document.querySelector(".add-button")

plusbutton.addEventListener("click",function(){
    plusbutton.style.display="block"
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

//select container,add-popup,"book-title-input","book-author-input""book-description"
var container=document.querySelector(".container")
var addbutton=document.getElementById("add-popup")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var description=document.getElementById("book-description")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
     
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> <h3>${bookauthor.value}</h3><p>${description.value}</p><button onclick="del(event)">Delete</button>`
    container.append(div)

    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

function del(event)
{
    event.target.parentElement.remove()

}
