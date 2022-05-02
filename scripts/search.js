// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import nav from "./../components/navbar.js";
console.log(nav);
let navbar = document.querySelector("#navbar");
navbar.innerHTML = nav();

let val = JSON.parse(localStorage.getItem("search"));
let url = `https://masai-mock-api.herokuapp.com/news?q=${val}`;
let container = document.querySelector("#results");
fetching(url).then((data) => append(data, container));

function append(data, container) {
  container.innerHTML = "";
  let { articles } = data;
  articles.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("news");

    let img = document.createElement("img");
    img.src = el.urlToImage;

    let divs = document.createElement("div");

    let title = document.createElement("h3");
    title.innerText = el.title;

    let desc = document.createElement("p");
    desc.innerText = el.description;
    divs.append(title, desc);
    div.append(img, divs);
    container.append(div);
    div.addEventListener("click", () => {
      myfunc(el);
    });
  });
}

async function fetching(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
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
