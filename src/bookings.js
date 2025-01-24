import image from "./banner.jpg";
const heading = "Bookings";
const paragraph = "Book a table for your special occasion or just a night out."
const banner = image;

export var bookings = document.createElement("div")

var img = document.createElement("img");
img.src = banner;
img.width = window.innerWidth;
bookings.appendChild(img);

var h1 = document.createElement("h1");
h1.setAttribute("id", "title")
h1.textContent = heading;
bookings.appendChild(h1)

var p = document.createElement("p");
p.textContent = paragraph
bookings.appendChild(p)