const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const subject = contactForm.elements["subject"].value;
    const message = contactForm.elements["message"].value;

    // Replace this with your WhatsApp number
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

// PRELOADER
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.style.display = "none";
            }, 600);
        }
    }, 1500);
});