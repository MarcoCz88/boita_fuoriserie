$(document).ready(function() {

    //NAVBAR
    $(document).click(function(event) {
        if ($(".navbar-collapse").hasClass("show") && !$(event.target).closest(".navbar").length) {
            $(".navbar-toggler").click();
        }
    });

    
    $('.navbar-nav .nav-link').click(function(event) {
        if ($(".navbar-collapse").hasClass("show") && !$(event.target).closest('.dropdown').length) {
            $(".navbar-toggler").click(); 
        }
    });

    
    $('.dropdown-menu a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

   //SWIPER
    if ($('.swiper-container').length) {
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
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
        });
    }

    // SERVIZI
    $('.show-more-btn').click(function() {
        const moreContent = $(this).prev();
        $('.show-more-content').not(moreContent).removeClass('expanded').next().text('Mostra di più');
        moreContent.toggleClass('expanded');
        $(this).text(moreContent.hasClass('expanded') ? 'Mostra di meno' : 'Mostra di più');
    });

    // PROGETTI
    const dots = $('.dot');
    const cards = $('.card-container');
    if (cards.length) {
        cards.first().addClass('active');
        dots.first().addClass('active');

        dots.click(function() {
            const target = $(this).data('target');
            cards.removeClass('active').filter(`#${target}`).addClass('active');
            dots.removeClass('active').filter(this).addClass('active');
        });

        // Logica per le frecce delle card
        const prevBtn = $('#prevBtn');
        const nextBtn = $('#nextBtn');
        if (prevBtn.length && nextBtn.length) {
            let currentIndex = 0;

            function showCard(index) {
                cards.removeClass('active').eq(index).addClass('active');
                dots.removeClass('active').eq(index).addClass('active');
            }

            prevBtn.click(() => {
                currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
                showCard(currentIndex);
            });

            nextBtn.click(() => {
                currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
                showCard(currentIndex);
            });

            showCard(currentIndex);
        }
    }
});
<<<<<<< HEAD
document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = './contatti.html';
});
=======
>>>>>>> 6bc66683a2ac8bacb7b9ffe377bb29d9af5b4b5b
