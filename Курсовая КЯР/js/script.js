
function toggleAnswer(faqId) {
    const ask = document.getElementById(faqId);
    if (ask.classList.contains('active')) {
        ask.classList.remove('active');
    } else {
        ask.classList.add('active');
    }
}

const scrollToSection = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
};

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(e.target.getAttribute('href'));
    });
});

function clickBurger() {
    const Burger = document.getElementsByClassName('burger-menu')[0];
    if (Burger.classList.contains('active')) {
        Burger.classList.remove('active');
    } else {
        Burger.classList.add('active');
    }
}

document.addEventListener('click', (el) => {
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerBlock = document.getElementById('burgerBlock');
    if (!burgerMenu.contains(el.target) && !burgerBlock.contains(el.target)) {
        burgerMenu.classList.remove('active');
    }
});

document.addEventListener('keydown', (el) => {
    if (el.key === 'Escape') {
        document.getElementById('burgerMenu').classList.remove('active');
    }
});
