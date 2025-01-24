import image from "./banner.jpg";
const heading = "About";
const paragraph = "Restaurant 42 is locally owned and operated by two brothers born on the edge."
const banner = image;

export var about = document.createElement("div")

var img = document.createElement("img");
img.src = banner;
img.width = window.innerWidth;
about.appendChild(img);

var h1 = document.createElement("h1");
h1.setAttribute("id", "title")
h1.textContent = heading;
about.appendChild(h1)

var p = document.createElement("p");
p.textContent = paragraph
about.appendChild(p)