$(document).ready(function(){
'use strict';

let addClass = document.querySelector(".leftMenu");

if(innerWidth > 992)
    addClass.classList.remove('collapse');
    addClass.classList.remove('navbar-collapse');
});