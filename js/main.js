/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";

$(document).ready(function () {
    $('li').click(function (e) {
        e.preventDefault();
    });
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
