/*
    Easy Digital 
    Site v.1
    August 2024
*/

/*======================================= Rolagem da Página =======================================*/
/*======================================= Ao escolher link, fecha menu Collapse =======================================*/

$(".nav-link").on("click", function () {
    $('.navbar-collapse').collapse('hide');
});

/*======================================= Rolagem da Página =======================================*/
/*======================================= Alteração de cor do banner =======================================*/

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

/*======================================= Animação - Efeito digitação =======================================*/
/*======================================= Banner - Seja bem vindo =======================================*/

$(document).ready(function () {
    new Typed('#type-it', {
        strings: ['Easy!!', 'Digital!'],
        typeSpeed: 200,
        backDelay: 1000,
        loop: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
    });
    $.scrollIt({

    });
});


/*======================================= Mascara de campos =======================================*/
/*======================================= Formulários =======================================*/

$(document).ready(function () {
    $('#user_phone').mask('(00) 0000-0000');
});

/*======================================= Função Validar E-Mail =======================================*/
/*======================================= Teste =======================================*/

const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

/*======================================= Validar e-mail =======================================*/
/*======================================= Envio do e-mail =======================================*/

const emailInput = document.querySelector('#user_email');
const resultMessage = document.querySelector('#contact-message');
const emailForm = document.querySelector('#contact-form');
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;

    const isValid = validateEmail(email);

    if (isValid) {

        emailjs.sendForm('service_kbezpx8', 'template_41bv5wc', '#contact-form', '5jrs-CXFsaJQYjBvT')

        //mostrar mensagem para usuário
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'
        contactMessage.style.color = "#24b600";

        //remover mensagem após 5 segundos
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //limpar formulário
        contactForm.reset()

    } else {

        contactMessage.textContent = 'Mensagem não foi enviada ❌'
        contactMessage.style.color = "#ac0000";

        setTimeout(() => {

            contactMessage.textContent = ''
        }, 5000)
    }
});

/*======================================= End / Validar e-mail =======================================*/
/*======================================= Scroll Section =======================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offste = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offste && top < offste + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };

    });
};

/*======================================= End / Scroll Section =======================================*/
/*======================================= Scroll Reveal =======================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-intro h6, .home-intro', { origin: 'left' });
ScrollReveal().reveal('.home-image', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-text', { origin: 'right' });
ScrollReveal().reveal('.service-box', { origin: 'top' });
ScrollReveal().reveal('.overview', { origin: 'left' });
ScrollReveal().reveal('.maria-serva', { origin: 'left' });
ScrollReveal().reveal('.jaavm', { origin: 'right' });
ScrollReveal().reveal('.sao-bras', { origin: 'right' });
ScrollReveal().reveal('.tes-gestao', { origin: 'left' });