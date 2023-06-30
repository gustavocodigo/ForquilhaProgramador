function toggle_menu() {
    let nav = document.getElementById("navigation")
    if ( nav.style.display == "none") {
        nav.style.display = "flex"
    }else{
        nav.style.display = "none"
    }
    nav.classList.toggle("show-nav-bar")
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("navigation").style.display = "none"
})
