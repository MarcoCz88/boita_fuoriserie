// Chiudere la navbar cliccando fuori
$(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }
});

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';