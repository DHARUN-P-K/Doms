const para = document.getElementById("msg");
console.log(para.innerText);

para.innerText="this is set via javascript";


const hiButton = document.querySelector("js button");

hiButton.addEventListener("click",()=>{
    console.log("hi");
});