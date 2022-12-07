import logo from "./logo.svg";
import "./App.css";
import Faq from "./qua";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faKey);

setTimeout(() => {
  const question = document.querySelectorAll(".question"),
    answer = document.querySelectorAll(".answer"),
    quesbox = document.querySelector(".quesbox");

  // console.log(question);
  question.forEach((item) => {
    item.addEventListener("click", () => {
      // console.log(item);
      item.nextElementSibling.classList.toggle("active");
    });
  });
}, 1);

function App() {
  return (
    <div className="quesbox">
      <Faq ques="kire" ans="how" />
      <Faq ques="kire" ans="how" />
      <Faq ques="kire" ans="how" />
      <Faq ques="kire" ans="how" />
      <Faq ques="kire" ans="how" />
    </div>
  );
}

export default App;
