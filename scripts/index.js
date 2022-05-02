// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import nav from "./../components/navbar.js";
console.log(nav);
let navbar = document.querySelector("#navbar");
navbar.innerHTML = nav();

function cSearch(id) {
  let container = document.querySelector("#results");
  container.innerHTML = "";
  console.log(id);
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`;
  fetching(url).then((data) => append(data, container));
}

let fin = document.querySelector("#search_input");
fin.addEventListener("keydown", (event) => search(event));
function search(event) {
  if (event.key == "Enter") {
    localStorage.setItem("search", JSON.stringify(fin.value));
    window.location.href = "search.html";
  }
}

cSearch("in");

function myfunc(el) {
  localStorage.setItem("news", JSON.stringify(el));
  window.location.href = "news.html";
}

let india = document.querySelector("#in");
india.addEventListener("click", (event) => {
  console.log(india.id);
  cSearch(india.id);
});

let ch = document.querySelector("#ch");
ch.addEventListener("click", (event) => {
  console.log(ch.id);
  cSearch(ch.id);
});

let us = document.querySelector("#us");
us.addEventListener("click", (event) => {
  console.log(us.id);
  cSearch(us.id);
});

let uk = document.querySelector("#uk");
uk.addEventListener("click", (event) => {
  console.log(uk.id);
  cSearch(uk.id);
});

let nz = document.querySelector("#nz");
nz.addEventListener("click", (event) => {
  cSearch(nz.id);
});

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
