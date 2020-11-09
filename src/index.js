import loadAbout from "./about";
import loadContacts from "./contacts";
import loadMenu from "./menu";

const content = document.querySelector("#content");

const about = document.querySelector("#about");
about.addEventListener("click", () => {
    content.innerHTML = "";
    loadAbout(content);
});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu(content);
});

const contacts = document.querySelector("#contacts");
contacts.addEventListener("click", () => {
    content.innerHTML = "";
    loadContacts(content);
});




 loadAbout(content);
