import "./styles.css";
import { heading, banner, paragraph } from "./page-load";

console.log("Welcome to Resturant 42");

var content = document.getElementById("content")

var img = document.createElement("img");
img.src = banner;
img.width = window.innerWidth;
content.appendChild(img);

var h1 = document.createElement("h1");
h1.textContent = heading;
content.appendChild(h1)

var p = document.createElement("p");
p.textContent = paragraph
content.appendChild(p)