/**
 * Created by root on 7/24/17.
 */

$(document).ready(function() {
    // all custom jQuery will go here
    //alert('holaaaa');
    var image_index=0;
    var images_array=["resources/images/CollegePathwayHero.jpg",
        "resources/images/sinkingspring.png",
        "resources/images/first_div_bg_image.png"];

    $('#gra').on('mouseenter',function () {
        console.log("enter al div");
        $('.first_left_arrow_div').show();
        $('.first_right_arrow_div').show();
    });
    $('#gra').mouseleave(function () {
        console.log("enter al div");
        $('.first_left_arrow_div').hide();
        $('.first_right_arrow_div').hide();
    });

    $('.white_nav_bar_li').mouseenter(function () {
        $(this).children('.white_nav_bar_li_hide').show();
    });
    $('.white_nav_bar_li').mouseleave(function () {
        $(this).children('.white_nav_bar_li_hide').hide();
    });
    $('.first_left_arrow_div').click(function () {
        image_index--;
        if(image_index<0)
            image_index=2
        $(this).parent().children('.first_div_image_div').children('.images').attr("src",images_array[image_index]);


    });
    $('.first_right_arrow_div').click(function () {
        image_index++;
        if(image_index>3)
            image_index=0
        $('#dynamic_img').attr("src",images_array[image_index]);


    });
        

});
