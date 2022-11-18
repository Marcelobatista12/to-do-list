//creating list
let btnshow =  document.getElementById("btnshow")
//add element
let item;
let array = []
    let btnadd = document.getElementById("btnadd")
//add element
window.addEventListener("load",showItems)
function addItem (){
if(location.myarray){
    array = JSON.parse(localStorage.getItem("myarray"))

}
let newItem = document.getElementById("imput_value").value
array.push(newItem)
document.getElementById("imput_value").value = ""
localStorage.myarray = JSON.stringify(array)
}
function showItems(){
    let list = document.getElementById("list")
list.innerHTML=""
if(localStorage.myarray){
    array = JSON.parse(localStorage.getItem("myarray"))
}
for(let i in array){
    let li = document.createElement("li")
li.innerHTML = array[i]
list.appendChild(li)
}
}
