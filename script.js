'use strict';
let toggle = document.querySelector('.toggle'),
  menu = document.querySelector('.menu');
toggle.onclick = function () {
  menu.classList.toggle('active');
};
