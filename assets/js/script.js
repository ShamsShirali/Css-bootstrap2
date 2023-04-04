"use strict";

let hamburger=document.querySelector('.hamburger');
let todo=document.querySelector('.todo');

hamburger.addEventListener('click', ()=>{
    todo.classList.toggle('active');
    hamburger.classList.toggle=('fa-solid','fa-xmark','text-white');
})