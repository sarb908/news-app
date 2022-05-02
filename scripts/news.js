// Ude Import export (MANDATORY)
import nav from "./../components/navbar.js";
let navbar = document.querySelector("#navbar");
navbar.innerHTML = nav();

let data = JSON.parse(localStorage.getItem("news"));
let container = document.querySelector("#detailed_news");
app(data);
function app(el) {
  let div = document.createElement("div");
  // div.classList.add("news");

  let img = document.createElement("img");
  img.src = el.urlToImage;

  let title = document.createElement("h3");
  title.innerText = el.title;

  let desc = document.createElement("p");
  desc.innerText = el.description;
  div.append(img, title, desc);

  container.append(div);
}
let fin = document.querySelector("#search_input");
fin.addEventListener("keydown", (event) => search(event));
function search(event) {
  if (event.key == "Enter") {
    localStorage.setItem("search", JSON.stringify(fin.value));
    window.location.href = "search.html";
  }
}
function myfunc(el) {
  localStorage.setItem("news", JSON.stringify(el));
  window.location.href = "news.html";
}
