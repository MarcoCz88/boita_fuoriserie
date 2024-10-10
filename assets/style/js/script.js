let swiper; // Definisci swiper all'esterno

$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    // Inizializzare Swiper
    swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'fade',
    });

    // Aggiungere evento per il cambio slide
    swiper.on('slideChange', function () {
        const activeSlide = swiper.slides[swiper.activeIndex];
        activeSlide.blur(); // Rimuove il focus dall'elemento attivo
    });

    // Disabilitare autoplay durante lo scroll
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        swiper.autoplay.stop();

        isScrolling = setTimeout(function() {
            swiper.autoplay.start();
        }, 100);
    });

    // Prevenire scroll quando si usa il carosello
    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('wheel', function (event) {
        event.preventDefault(); // Previene il comportamento di scroll
    }, { passive: false });

});

// SERVIZI
document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreContent = button.previousElementSibling;

        // Chiude tutte le altre sezioni
        document.querySelectorAll('.show-more-content').forEach(content => {
            if (content !== moreContent && content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                content.nextElementSibling.textContent = 'Mostra di più';
            }
        });

        // Alterna la sezione corrente
        moreContent.classList.toggle('expanded');
        button.textContent = moreContent.classList.contains('expanded') ? 'Mostra di meno' : 'Mostra di più';
    });
});




// PROGETTI
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.card-container');
    cards[0].classList.add('active');
    dots[0].classList.add('active');

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            cards.forEach(card => {
                if (card.id === target) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            dots.forEach(d => {
                if (d === this) {
                    d.classList.add('active');
                } else {
                    d.classList.remove('active');
                }
            });
        });
    });

    // Aggiungi logica per le frecce delle card
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    });

    // Initialize the first card as active
    showCard(currentIndex);
});
