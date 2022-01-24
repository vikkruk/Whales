"use strict";

function changeContent(index, id) {
  let element = document.getElementById(id);
  let sections = document.querySelectorAll("section");
  let buttons = document.querySelectorAll("button");
  let media = document.getElementsByClassName("media");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("visible");
    sections[i].classList.remove("transform");
    buttons[i].classList.remove("active");
    media[i].classList.remove("opacity");
  }
  element.classList.add("visible");

  setTimeout(() => {
    element.classList.add("transform");
    media[index].classList.add("opacity");
  }, 200);
  setTimeout(() => {
    buttons[index].classList.add("active");
  }, 500);
}
