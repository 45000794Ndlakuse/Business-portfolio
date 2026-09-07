/* =========================================
SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

    const target = document.querySelector(
        this.getAttribute('href')
    );

    if (target) {

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth'
        });

    }

});

});

/* =========================================
MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    menuToggle.classList.toggle('open');

});

}

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', () => {

    navLinks.classList.remove('active');

    if (menuToggle) {
        menuToggle.classList.remove('open');
    }

});

});

/* =========================================
NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {


if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}


});

/* =========================================
ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {


let currentSection = '';

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute('id');
    }

});


navItems.forEach(link => {

    link.classList.remove('active');

    if (
        link.getAttribute('href') ===
        '#' + currentSection
    ) {
        link.classList.add('active');
    }

});


});

/* =========================================
SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
'.education-card, .skills-card, .projects-card, #contact'
);

revealElements.forEach(element => {
element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(
entries => {


    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('active');

            revealObserver.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.15
}


);

revealElements.forEach(element => {
revealObserver.observe(element);
});
