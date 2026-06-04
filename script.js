// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// COUNTER ANIMATION

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// SCROLL REVEAL

window.addEventListener('scroll', reveal);

function reveal(){

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop = reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add('active');

        }

    });

}



// PREMIUM DARK MODE

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {

    document.body.classList.toggle('dark-mode');

});
// CONTACT FORM VALIDATION

function validateForm(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    if(name === "" || email === ""){

        alert("Please fill all required fields!");

        return false;

    }

    return true;

}

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if(name === "" || email === "" || message === ""){

            alert("All fields are required!");
            return;

        }

        let submissions =
        JSON.parse(localStorage.getItem("contacts")) || [];

        submissions.push({
            name,
            email,
            message,
            date: new Date().toLocaleString()
        });
        

        localStorage.setItem(
            "contacts",
            JSON.stringify(submissions)
        );

        alert("Message submitted successfully!");

        form.reset();

    });

}