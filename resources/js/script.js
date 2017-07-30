/**
 * Created by root on 7/24/17.
 */

$(document).ready(function() {
    var image_index=0;
    var mobile_image_index=0
    var images_array=["resources/images/CollegePathwayHero.jpg",
        "resources/images/sinkingspring.png",
        "resources/images/first_div_bg_image.png"];
    var first_a_images_array=["resources/images/Layer-16_1.jpg",
        "resources/images/howtopayforcollege.png",
        "resources/images/iwantto.png","resources/images/studentelife.png"];
    var mobile_images_array=["resources/images/Fall17RegistrationHero.png",
        "resources/images/CollegePathwayHero.jpg",
        "resources/images/sinkingspring.png"
        ];

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
    $('.middle_div').on('mouseenter',function () {
        console.log("enter al div");
        $('.left_arrow_div').show();
        $('.right_arrow_div').show();
    });
    $('.middle_div').mouseleave(function () {
        console.log("enter al div");
        $('.left_arrow_div').hide();
        $('.right_arrow_div').hide();
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
        if(image_index>2)
            image_index=0
        $('#dynamic_img').attr("src",images_array[image_index]);
    });
    $('.left_arrow_div').click(function () {
        image_index--;
        if(image_index<0)
            image_index=2
        $('#dynamic_img').attr("src",images_array[image_index]);
        $('.ibar').css("background-color","white");
        if(image_index == 0)
            $('#bb1').css("background-color","red");
        if(image_index == 1)
            $('#bb2').css("background-color","red");
        if(image_index == 2)
            $('#bb3').css("background-color","red");
    });
    $('.right_arrow_div').click(function () {
        image_index++;
        if(image_index>2)
            image_index=0
        $('#dynamic_img').attr("src",images_array[image_index]);
        $('.ibar').css("background-color","white");
        if(image_index == 0)
            $('#bb1').css("background-color","red");
        if(image_index == 1)
            $('#bb2').css("background-color","red");
        if(image_index == 2)
            $('#bb3').css("background-color","red");
    });
    $('.ibar').click(function () {
        var id=$(this).attr('id');
        if(image_index==0 && id=='bb1')
            return;
        if(image_index==1 && id=='bb2')
            return;
        if(image_index==2 && id=='bb3')
            return;

        if(id=='bb1')
            image_index=0
        if(id=='bb2')
            image_index=1
        if(id=='bb3')
            image_index=2

        $('#dynamic_img').attr("src",images_array[mobile_image_index]);
        $('.ibar').css("background-color","white");
        $(this).css("background-color","red");

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

    //mobile events

    
    function change_image (o){
       setTimeout(function () {
           mobile_image_index++;
           if(mobile_image_index>2)
               mobile_image_index=0
           $('#moba').attr("src",mobile_images_array[mobile_image_index]);

           $('.mobile_first_div_squares_option').css("background-color","white");
           if(mobile_image_index == 0)
               $('#msu1').css("background-color","red");
           if(mobile_image_index == 1)
               $('#msu2').css("background-color","red");
           if(mobile_image_index == 2)
               $('#msu3').css("background-color","red");

           change_image (o)
       },4000);
    }
    change_image($('.mobile_page_div'));


    $('.mobile_first_arrow_container_right').click(function () {
        mobile_image_index++;
        if(mobile_image_index>2)
            mobile_image_index=0
        $('#moba').attr("src",mobile_images_array[mobile_image_index]);

        $('.mobile_first_div_squares_option').css("background-color","white");
        if(mobile_image_index == 0)
            $('#msu1').css("background-color","red");
        if(mobile_image_index == 1)
            $('#msu2').css("background-color","red");
        if(mobile_image_index == 2)
            $('#msu3').css("background-color","red");
    });

    $('.mobile_first_arrow_container_left').click(function () {
        mobile_image_index--;
        if(mobile_image_index<0)
            mobile_image_index=2
        $('#moba').attr("src",mobile_images_array[mobile_image_index]);

        $('.mobile_first_div_squares_option').css("background-color","white");
        if(mobile_image_index == 0)
            $('#msu1').css("background-color","red");
        if(mobile_image_index == 1)
            $('#msu2').css("background-color","red");
        if(mobile_image_index == 2)
            $('#msu3').css("background-color","red");
    });
    $('.mobile_first_div_squares_option').click(function () {
        var id=$(this).attr('id');
        if(mobile_image_index==0 && id=='msu1')
            return;
        if(mobile_image_index==1 && id=='msu2')
            return;
        if(mobile_image_index==2 && id=='msu3')
            return;

        if(id=='msu1')
            mobile_image_index=0
        if(id=='msu2')
            mobile_image_index=1
        if(id=='msu3')
            mobile_image_index=2

        $('#moba').attr("src",mobile_images_array[mobile_image_index]);
        $('.mobile_first_div_squares_option').css("background-color","white");
        $(this).css("background-color","red");

    });
    
    $('.container').click(function () {
        $(this).parent().children('.list').slideToggle();
    });
    $('.mobile_header_div_transparent_menu_plus').click(function () {
        $('.mobile_header_div_menu').slideToggle();
    });

    $('.mobile_2_div_op').click(function () {
        
    });
    $('.button_op').click(function () {
        $(this).parent().children('.content').slideToggle();
    });
});
