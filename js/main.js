/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {

    function resize() {
        if ($(window).width() > 600) {
            $('.thumbnail img').attr('src', 'img/banner1.png');
            $('.sites h4').text('Check this out!');
        } else {
            $('.sites h4').text('Socials');
            $('.youtube-link').text("");
            $('.facebook span').remove();
        }
    }

    $('li').click(function (e) {
        e.preventDefault();
    });

    resize();
    $(window).on('resize', resize);

    $('.fullpage').fullpage({
        verticalCentered: true,
        scrollingSpeed: 700,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 0) {
                return false;
            }
            if ((index === 1) && (direction === "down")) {
                $('.arrow').animate({
                    "bottom": "0px",
                    opacity: 0
                }, 300);
            }

            if ((index === 2) && (direction === "up")) {
                $('.arrow').animate({
                    "bottom": "20px",
                    opacity: 1
                }, 300);
            }
        }
    });
});
