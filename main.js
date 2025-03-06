let el = document.querySelector(".scrol");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});

document.getElementById("buttonVideo").addEventListener("click", function () {
    window.location.href = '#landing';
});

let links = document.querySelectorAll("ul.mmaa li a");

links.forEach(function (ele) {
    ele.onclick = function () {
        links.forEach(function (ele) {

            ele.classList.remove("active");
        });

        this.classList.add("active");
    };
});


let links2 = document.querySelectorAll("ul.shuffle li ");

links2.forEach(function (ele) {
    ele.onclick = function () {
        links2.forEach(function (ele) {
            ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});

let toggleMenu = document.querySelector(".toggle-menu");
let nav = document.querySelector("header nav .toggle-menu");
let closeMenu = document.querySelector("#toggle-menu");


toggleMenu.onclick = function () {
    nav.classList.toggle("open");
};



