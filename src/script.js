import "./style.css";
import { homePage } from "./homePage.js";
import { loadMenu } from "./menu.js";


alert("salam ziba !");
homePage();

document.getElementById('menu').addEventListener('click',loadMenu);
document.getElementById('home').addEventListener('click',homePage)


