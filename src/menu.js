import image from "./banner.jpg";
const heading = "Menu";
const paragraph1 = "Pizza"
const paragraph2 = "Pasta"
const paragraph3 = "Steak"
const paragraph4 = "Shnitzel"
const banner = image;

export var menu = document.createElement("div")

var img = document.createElement("img");
img.src = banner;
img.width = window.innerWidth;
menu.appendChild(img);

var h1 = document.createElement("h1");
h1.setAttribute("id", "title")
h1.textContent = heading;
menu.appendChild(h1)

var p = document.createElement("p");
p.textContent = paragraph1
menu.appendChild(p)
var p = document.createElement("p");
p.textContent = paragraph2
menu.appendChild(p)
var p = document.createElement("p");
p.textContent = paragraph3
menu.appendChild(p)
var p = document.createElement("p");
p.textContent = paragraph4
menu.appendChild(p)