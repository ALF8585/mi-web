document.addEventListener('DOMContentLoaded', function() {

    // --- Animación de Texto Rotatorio en el Hero Section ---
    const animatedTextElement = document.querySelector('.hero-content p .animated-text');
    const roles = [
        'Auxiliar de Audiovisuales', // Rol principal
        'Técnico en Computadores y Redes', // De tu experiencia
        'Digitador', // De tu experiencia
        'Asesor Telefónico', // De tu experiencia
        'Asesor Call Center' // De tu experiencia
    ];
    let currentRoleIndex = 0;

    // Función para animar el texto de roles
    function animateRole() {
        // Si el elemento existe y estamos en la sección hero
        if (animatedTextElement) {
            // Fade out el texto actual
            animatedTextElement.style.opacity = 0;

            setTimeout(() => {
                // Cambia el texto al siguiente rol
                animatedTextElement.textContent = roles[currentRoleIndex];
                // Fade in el nuevo texto
                animatedTextElement.style.opacity = 1;

                // Avanza al siguiente rol, volviendo al principio si es el último
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            }, 500); // Tiempo para el fade out
        }
    }

    // Inicia la animación de roles si estamos en la sección hero
    // Verificamos si el elemento 'animated-text' existe antes de iniciar el intervalo
    if (animatedTextElement) {
        // Establece el rol inicial inmediatamente
        animatedTextElement.textContent = roles[currentRoleIndex];
        animatedTextElement.style.opacity = 1;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;

        // Cambia el rol cada 3 segundos (3000 milisegundos)
        setInterval(animateRole, 3000);
    }

    // --- Botón para Volver al Inicio (Scroll to Top) ---
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Mostrar u ocultar el botón al hacer scroll
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        // Si el usuario ha scrolleado más de 200px (desde arriba)
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "flex"; // Muestra el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Oculta el botón
        }
    }

    // Evento para hacer scroll suave al hacer clic en el botón
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Comportamiento suave para el scroll
        });
    });

    // --- Menú Móvil (Botón de Hamburguesa) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navNav = document.querySelector('nav ul');

    // Evento para mostrar/ocultar el menú al hacer clic en el botón de hamburguesa
    mobileMenu.addEventListener('click', function() {
        navNav.classList.toggle('active'); // Añade o quita la clase 'active'
    });

    // Evento para cerrar el menú al hacer clic en un enlace de navegación
    navNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navNav.classList.remove('active'); // Elimina la clase 'active' para cerrar el menú
        });
    });

    // --- Validación Básica del Formulario de Contacto ---
    // Opcional: Puedes usar librerías como Formspree o un backend para un envío real.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Previene el envío por defecto del formulario
            event.preventDefault();

            // Mostrar una alerta simple como confirmación
            alert('¡Mensaje enviado! Gracias por tu interés.');

            // Limpiar los campos del formulario después de enviar
            contactForm.reset();
        });
    }
});