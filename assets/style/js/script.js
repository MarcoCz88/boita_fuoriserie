// Chiudere la navbar cliccando fuori
$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
  
    // Inizializzare Swiper
    const swiper = new Swiper('.swiper-container', {
        // Configurazione Swiper
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
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
  });
  //SERVIZI
  document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreContent = button.previousElementSibling;
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            button.textContent = 'Mostra di meno';
        } else {
            moreContent.style.display = 'none';
            button.textContent = 'Mostra di più';
        }
    });
  });
  //PROGETTI
  document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.card-container');

    // Ensure the first card and dot are active on page load
    cards[0].classList.add('active');
    dots[0].classList.add('active');

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            // Update cards
            cards.forEach(card => {
                if (card.id === target) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            // Update dots
            dots.forEach(d => {
                if (d === this) {
                    d.classList.add('active');
                } else {
                    d.classList.remove('active');
                }
            });
        });
    });
});
