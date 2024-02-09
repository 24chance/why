

// changing to the dark mode or light mode
var icon = document.getElementById("icon");
var logo = document.getElementById("logo");

icon.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        logo.src = "assets/images/logo_dark.png";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-lightbulb");
    } else {
        logo.src = "assets/images/logo.png";
        icon.classList.remove("fa-lightbulb");
        icon.classList.add("fa-moon");
    }
}



// showing the sidenav
var sidenav = document.querySelector(".sidenav");
var sidenavContent = document.querySelector(".sidenav ul");
var menu = document.querySelector(".fa-bars");

menu.onclick = function() {
    if (this.classList.contains("fa-bars")) {
        
        if (sidenav.style.opacity == "1") {
            sidenav.style.top = "-700px";
            sidenav.style.opacity = "0";
        }else{
            sidenav.style.opacity = "1";
            sidenav.style.top = "35px";
        }
    }else{
        searchBox.style.display = "none";
        searchBtn.style.display = "flex";
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
}


// this function is going to remove the sidenav if the user clicks outside
document.addEventListener("click", function(e){
    if (!sidenav.contains(e.target) && !menu.contains(e.target)) {
        sidenav.style.top = "-700px";
        sidenav.style.opacity = "0";
    }
})




// showing the search button

var searchBtn = document.querySelector(".fa-search");
var searchBox = document.querySelector(".c-navbar");

searchBtn.onclick = function() {
    searchBox.style.display = "flex";
    searchBtn.style.display = "none";
    menu.classList.add("fa-xmark");
    menu.classList.remove("fa-bars");
}


// showing input search when the screen is full of width

var screen = window.matchMedia("(max-width: 1168px)");
screen.addListener(checkScreen);
function checkScreen(screen) {
    if(screen.matches) {
        searchBox.style.display = "none";
        searchBtn.style.display = "flex";
    }else{
        searchBox.style.display = "flex";
        searchBtn.style.display = "none";
    }
}

checkScreen(screen)