
let isMobile = false;
if(document.documentElement.clientWidth < 800) isMobile = true;

window.addEventListener("resize", () => {
    if(isMobile) { if(document.documentElement.clientWidth > 800) location.reload(); }
    else if(document.documentElement.clientWidth < 800) location.reload();
});

//nav scripts ------------------------------------------------------------------------------------------->
for(i = 1; i <= 13; i++){
    let wave = document.createElement("div");
    wave.classList.add("wave");
    wave.style.gridColumn = `${i}/span 1`;
    document.querySelector("nav").appendChild(wave);
}

let menuOpen = false;
document.querySelector("#hamburger").addEventListener("click", () => {
    let menu = document.querySelector("#hamburgerMenu");
    let nav = document.querySelector("nav");
    let navMenus = document.querySelector("#masthead");
    if(menuOpen == false){
        menu.style.opacity = "1";
        menu.style.height = "140px";
        nav.style.transform = "translateY(140px)";
        navMenus.style.transform = "translateY(-140px)";
        document.querySelector("#hamburger svg:first-child").style.opacity = "0";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "rotate(45deg) translate(8px, 8px)";
        document.querySelector("#hamburger svg:nth-child(3)").style.transform = "rotate(-45deg)";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "0px";
        }); 
        if(isMobile){
            document.querySelector("main").style.display = "none";
            menu.style.border = "none";
            nav.style.transform = "translateY(320px)";
            navMenus.style.transform = "translateY(-320px)";
        }
        menuOpen = true;
    }
    else if(menuOpen == true){
        menu.style.opacity = "0";
        menu.style.height = "0px";
        nav.style.transform = "translateY(0px)";
        navMenus.style.transform = "translateY(0px)";
        document.querySelector("#hamburger svg:first-child").style.opacity = "1";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "unset";
        document.querySelector("#hamburger svg:nth-child(3)").style.transform = "unset";
        document.querySelector("main").style.display = "block";
        menu.style.border = "4px solid #e9e8e8";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "-300px";
        }); 
        menuOpen = false;
    }
});

if(isMobile){
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 32){
            document.querySelectorAll(".wave").forEach(wave =>{
                wave.style.display = "none";
            });
        }
        else if(window.scrollY < 32){
            document.querySelectorAll(".wave").forEach(wave =>{
                wave.style.display = "block";
            });
        }
    });
}
// ------------------------------------------------------------------------------------------->




//log in behavior -------------------------------------------------------------------->
let users = [];
let currentUser;
let loggedIn = false;
if(localStorage.getItem("LOGGEDIN") == "true") loggedIn = true;
if(localStorage.getItem("USERS")) users = JSON.parse(localStorage.getItem('USERS'));
if(localStorage.getItem("CURRENTUSER")) currentUser = JSON.parse(localStorage.getItem('CURRENTUSER'));

if(!loggedIn){
    document.querySelector(".navLink:first-child").innerHTML = "Log in";
    document.querySelector(".navLink:first-child").href = "log-in.html";
    document.querySelectorAll(".navLink").forEach(link =>{
        link.style.display = "none";
    });
    document.querySelector(".navLink:first-child").style.display = "block";
}


document.querySelector(".navLink:first-child").addEventListener("click", () => {
    if(loggedIn){

        localStorage.setItem("LOGGEDIN", false);
        window.location.href = "loggedout.html";
    }
});

// --------------------------------------------------------------------->
