let box=document.querySelector(".colorbox");
let btn=document.querySelector("button");

function randomcol(){
    let r=Math.floor(Math.random()*225);
    let g=Math.floor(Math.random()*225);
    let b=Math.floor(Math.random()*225);
    let color=`rgb(${r},${g},${b})`;
    box.style.backgroundColor=color;
    

}
btn.addEventListener("click",()=>{
    randomcol();
})