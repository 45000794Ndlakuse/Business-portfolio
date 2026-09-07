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
'.education-timeline-item, .skills-card, .projects-card, #contact'
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

/* =========================================
PROJECT DETAILS EXPANSION
========================================= */

const projectDetailButtons =
document.querySelectorAll('.project-details-btn');

projectDetailButtons.forEach(button => {


button.addEventListener('click', () => {

    const projectCard =
        button.closest('.project-card');


    const isExpanded =
        projectCard.classList.contains('expanded');


    /*
    Close other project cards.
    This keeps the portfolio clean and prevents
    too many expanded cards at once.
    */

    document
        .querySelectorAll('.project-card.expanded')
        .forEach(card => {

            card.classList.remove('expanded');

            const cardButton =
                card.querySelector(
                    '.project-details-btn span'
                );

            if (cardButton) {
                cardButton.textContent =
                    'View Project Details';
            }

        });


    /*
    Expand selected project.
    */

    if (!isExpanded) {

        projectCard.classList.add('expanded');


        const buttonText =
            button.querySelector('span');


        if (buttonText) {
            buttonText.textContent =
                'Hide Project Details';
        }

    }

});


});

/* =========================================
HORIZONTAL PROJECT CAROUSEL
========================================= */

const projectsCarousel =
document.querySelector('.projects-grid');

const previousProjectButton =
document.querySelector('.project-nav-left');

const nextProjectButton =
document.querySelector('.project-nav-right');

if (
projectsCarousel &&
previousProjectButton &&
nextProjectButton
) {


const scrollProjects = direction => {

    const projectCard =
        projectsCarousel.querySelector('.project-card');


    if (!projectCard) return;


    const cardWidth =
        projectCard.offsetWidth;


    const gap = 24;


    projectsCarousel.scrollBy({

        left:
            direction * (cardWidth + gap),

        behavior: 'smooth'

    });

};


previousProjectButton.addEventListener(
    'click',
    () => scrollProjects(-1)
);


nextProjectButton.addEventListener(
    'click',
    () => scrollProjects(1)
);


}

/* =========================================
MOUSE WHEEL HORIZONTAL SCROLL
========================================= */

if (projectsCarousel) {


projectsCarousel.addEventListener(
    'wheel',
    event => {

        /*
        Convert vertical mouse wheel movement
        into horizontal project scrolling.
        */

        if (
            Math.abs(event.deltaY) >
            Math.abs(event.deltaX)
        ) {

            event.preventDefault();

            projectsCarousel.scrollBy({

                left: event.deltaY,

                behavior: 'smooth'

            });

        }

    },
    {
        passive: false
    }
);


}

/* =========================================
SKILLS STAGGER ANIMATION
========================================= */

const skillCards =
document.querySelectorAll('.skills-card');

skillCards.forEach((card, index) => {
card.style.transitionDelay =
    `${index * 120}ms`;

});
