import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { bookings } from "./bookings";
import { about } from "./about";

var content = document.getElementById("content")
content.appendChild(home)
function clear_content() {
    while(content.firstChild) content.removeChild(content.lastChild);
    home_button.setAttribute("style","")
    menu_button.setAttribute("style","")
    bookings_button.setAttribute("style","")
    about_button.setAttribute("style","")
}

function load_page(page) {
    clear_content()
    content.appendChild(page)
}


var home_button = document.getElementById("home")
home_button.setAttribute("style","background-color:grey;color: white;");
home_button.addEventListener("click", () => { load_page(home); home_button.setAttribute("style","background-color:grey;color: white;");})
var menu_button = document.getElementById("menu")
menu_button.addEventListener("click", () => { load_page(menu); menu_button.setAttribute("style","background-color:grey;color: white;");})
var bookings_button = document.getElementById("bookings")
bookings_button.addEventListener("click", () => { load_page(bookings); bookings_button.setAttribute("style","background-color:grey;color: white;");})
var about_button = document.getElementById("about")
about_button.addEventListener("click", () => { load_page(about); about_button.setAttribute("style","background-color:grey;color: white;");})



content.appendChild(home)
