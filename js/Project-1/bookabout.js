var addbooks_btn=document.querySelector("#btn")

var add_btn=document.querySelector("#add")
var cancel_btn=document.querySelector("#cancel")

var overlay=document.querySelector("#overlay")
var popup=document.querySelector("#popup")

var container=document.querySelector("#container")
var i1=document.querySelector("#i1")
var i2=document.querySelector("#i2")
var t=document.querySelector("#t")

function addbooks()
{
    overlay.style.display="block"
    popup.style.display="block"
}

// whenever a button is clicked , the page gets refreshed , to prevent this use preventDefault
add_btn.addEventListener("click",function(event){
    event.preventDefault()           
    
    var cont=document.createElement("div")
    cont.setAttribute("class","book")
    cont.innerHTML=`<h2> ${i1.value} </h2> 
    <h5> ${i2.value} </h5> 
    <p> ${t.value} </p> 
    <button onclick="del(event)">Delete</button>`
    container.append(cont)

    overlay.style.display="none"
    popup.style.display="none"

})

cancel_btn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})


function del(event)
{
    event.target.parentElement.remove()
}


