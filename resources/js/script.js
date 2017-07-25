/**
 * Created by root on 7/24/17.
 */

$(document).ready(function() {
    // all custom jQuery will go here
    //alert('holaaaa');
    $('.white_nav_bar_li').mouseenter(function () {
        $(this).children('.white_nav_bar_li_hide').show();
    });
    $('.white_nav_bar_li').mouseleave(function () {
        $(this).children('.white_nav_bar_li_hide').hide();
    });
});
