

$(document).ready(function(){
    $('.navbar.navbar-inverse li').click(function(){

       $(this).toggleClass('active'); 

        $('#title').animate({
            left: '1%',
            top:'10%',
        }, 1000,function(){
            $('.navbar.navbar-inverse li').fadeOut();
            $('#vertical_menu:hidden:first').fadeIn('slow');
        });

        $('#name').animate({
            fontSize:'2em'
        },1000);
       
        $('#student').animate({
            fontSize:'1em'
        },1000);

    $('vertical_menu li').click(function(){
        $(this).css()
    });
    
    });

    
    $('#projects').click(function(){
       $("#projects_selection:hidden:first").fadeIn('slow');
    });


    function vertMenu(){

    }

    


});