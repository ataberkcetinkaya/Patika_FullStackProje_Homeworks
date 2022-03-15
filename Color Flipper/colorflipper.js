let btn = document.querySelector("button");
let bdy = document.getElementById("body");

btn.addEventListener("click", e => {
    e.preventDefault();
    
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    bdy.style.backgroundColor = `#${randomColor}`;
})