/**
 * Created by root on 7/24/17.
 */

$(document).ready(function() {
    var image_index=0;
    var images_array=["resources/images/CollegePathwayHero.jpg",
        "resources/images/sinkingspring.png",
        "resources/images/first_div_bg_image.png"];
    var first_a_images_array=["resources/images/Layer-16_1.jpg",
        "resources/images/howtopayforcollege.png",
        "resources/images/iwantto.png","resources/images/studentelife.png"];

    $('.galeria').on('mouseenter',function () {
        console.log("enter al div");
        $('.first_left_arrow_div').show();
        $('.first_right_arrow_div').show();
    });
    $('.galeria').mouseleave(function () {
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
    $('.first_a_col_individual_div').click(function () {

        var i = 0;
        if ($(this).attr('id') == 'col1')
            i = 0;
        if ($(this).attr('id') == 'col2')
            i = 1;
        if ($(this).attr('id') == 'col3')
            i = 2;
        if ($(this).attr('id') == 'col4')
            i = 3;

        $('#image_first_a').attr("src", first_a_images_array[i]);
    //filter: sepia() saturate(4) hue-rotate(324deg);
    });

    $('.first_a_col_individual_div').mouseenter(function () {
        var isIt=false;
        var src = $('#image_first_a').attr('src');
        if($(this).attr('id') == 'col1' && src==first_a_images_array[0])
            isIt=true;
        if($(this).attr('id') == 'col2' && src==first_a_images_array[1])
            isIt=true;
        if($(this).attr('id') == 'col3' && src==first_a_images_array[2])
            isIt=true;
        if($(this).attr('id') == 'col4' && src==first_a_images_array[3])
            isIt=true;

        if(isIt)
            $('#image_first_a').css("filter", "sepia() saturate(4) hue-rotate(324deg)");
    });
    $('.first_a_col_individual_div').mouseleave(function () {
        $('#image_first_a').css("filter", "none");
    });

});
