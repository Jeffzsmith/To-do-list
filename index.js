count=0;
function todo(){
    count++;
    var input=document.querySelector(".txt").value;
    var li=document.createElement("li");
    var ul=document.querySelector(".ul");
    ul.appendChild(li);
    li.textContent+=input;

    document.querySelector(".txt").value="";
    if(count>0){
        ul.addEventListener("click",function(event){
            event.target.classList.toggle("strike");
        })
    }
}
document.querySelector(".btn").addEventListener("click",todo);
document.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
    todo();
    }
})

