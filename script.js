// ==============================
// WHATSAPP CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = contactForm.elements["name"].value;
        const email = contactForm.elements["email"].value;
        const subject = contactForm.elements["subject"].value;
        const message = contactForm.elements["message"].value;

        const phoneNumber = "2348162015678";

        const whatsappMessage = `
Hello Ekanem!

My Name: ${name}
My Email: ${email}
Subject: ${subject}

Message:
${message}
        `;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}


// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", function() {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function() {

            preloader.classList.add("hide");

            setTimeout(function() {
                preloader.style.display = "none";
            }, 600);

        }, 1500);

    }

});

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });

}