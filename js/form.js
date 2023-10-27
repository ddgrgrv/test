const form = document.getElementById("contactForm");


form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    e.target.reset();
    alert("Form submitted successfully!");
});