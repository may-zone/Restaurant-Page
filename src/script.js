import "./style.css";

alert("salam ziba !");

const header = document.createElement('header');
header.innerHTML = `
<nav>
<button id="home"> Home </button>
<button id="menu"> Menu </button>
<button id="about"> About us </button>
</nav>

`
document.body.prepend(header);