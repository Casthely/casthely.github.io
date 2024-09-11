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
        loop: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
    });
});


/*======================================= Mascara de campos =======================================*/
/*======================================= Formulários =======================================*/

$(document).ready(function () {
    $('#user_phone').mask('(00) 0000-0000')
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