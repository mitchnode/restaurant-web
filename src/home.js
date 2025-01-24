import image from "./banner.jpg";

const heading = "Welcome to Restaurant 42";
const paragraph = "Restaurant 42 is the last stop before then end of the universe. Don't forget your towel and most importantly, Don't Panic."
const banner = image;

export var home = document.createElement("div")

var img = document.createElement("img");
img.src = banner;
img.width = window.innerWidth;
home.appendChild(img);

var h1 = document.createElement("h1");
h1.setAttribute("class", "title")
h1.textContent = heading;
home.appendChild(h1)

var p = document.createElement("p");
p.textContent = paragraph
home.appendChild(p)
