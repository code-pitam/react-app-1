import React from "react";
import App from "./App";

const question = document.querySelectorAll(".question"),
  answer = document.querySelectorAll(".answer"),
  quesbox = document.querySelector(".quesbox");

console.log(question);
question.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
    item.nextElementSibling.classList.toggle("active");
  });
});
