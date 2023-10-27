const cookie = document.getElementById("acceptCookies"); 

function acceptCookies() {
    document.getElementById("cookieAlert").style.display = "none";
    localStorage.setItem("cookiesAccepted", true);
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted") != true) {
        document.getElementById("cookieAlert").style.display = "block";
    }
    
});

cookie.addEventListener("click", acceptCookies);