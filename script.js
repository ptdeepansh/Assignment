let toggle_btn = document.getElementById("toggle");
let menu_open = document.getElementById("toggle-menu");
let close_menu = document.getElementById("menu-close");
let blurMenu = document.getElementById("blurwala");

blurMenu.onclick = Closegg;
toggle_btn.onclick = Opengg;

let scrollPosition = 0;
function Opengg()
{
    scrollPosition = window.scrollY;
    menu_open.style.display = "block";
    blurMenu.style.display = "block";
    document.body.style.top = `-${scrollPosition}px`; // Disable body scroll
    document.body.style.position = "fixed"; // Prevent scroll jumping on mobile
}

close_menu.onclick = Closegg;

function Closegg()
{
    menu_open.style.display = "none";
    blurMenu.style.display = "none";
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
}