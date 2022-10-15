

let inputBlock=document.querySelector(".input-form");
let addButton=document.querySelector(".btn-add");
let ulitems=document.querySelector(".ul-items");
let form=document.getElementById("form-wraper");


form.addEventListener("submit",function(event){
    event.preventDefault();
}
);
addButton.addEventListener("click", function(){
    let value = inputBlock.value;
    let li=document.createElement("li");
    li.classList=("listyle");
   
    let deletButton=document.createElement("button");
    let deletButtonI=document.createElement("i");
    deletButtonI.classList=("fa-solid fa-trash-can");
    
    deletButton.appendChild(deletButtonI);
    

    

    deletButton.addEventListener("click",function(){
        li.remove();

    })
    li.textContent=value;
    li.appendChild(deletButton);

    ulitems.appendChild(li);
    inputBlock.value = "  ";
   
}
);
let clearButton=document.getElementById("clearAll");
clearButton.addEventListener("click",function(){
  ulitems.textContent=" ";
    
});




let navBar=document.getElementById("navigation");

let burgerBar=document.getElementById("burger-bar");

let toogleBar=document.getElementById("toogle-menu");


// burgerBar.addEventListener("click",function(){
//     navBar.classList.toggle("active");
// });

toogleBar.addEventListener("click",function(){
    toogleBar.classList.toggle("toogleActive")
    navBar.classList.toggle("active");
   
});
// if(toogleBar.class=toogleActive){
//     navBar.classList.toggle("active");

// }