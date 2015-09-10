/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {
    function resize() {
        if ($(window).width() >= 768) {
            $('.thumbnail img').attr('src', 'img/banner1.png');
            $('.sites h4').text('Check this out!');
        } else {
            if ($(window).width() <= 360) {
                $('.visit a').text('PTS Collection').css("font-size", "20px");
            }
            $('.thumbnail img').attr('src', 'img/poster1.png');
            $('.sites h4').text('Socials');
        }
    }

    resize();
    $(window).on('resize', resize);

    $('.fullpage').fullpage({
        anchors: ['section-1', 'section-2', 'section-3', 'section-4'],
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
