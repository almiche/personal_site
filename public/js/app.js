

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

    
    $('.selection,.list-group-item').click(function(){
        request = new XMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (request.readyState == 4 && request.status == 200)
            {
                callback(request.responseText); // Another callback here
            }
        }; 
        switch($(this).text()) {
            case "Home":
                request.open("GET", "/", true);
                break;
            case "Projects":
                request.open("GET", "/projects", true);
                 break;
            case "About Me":
                request.open("GET", "/aboutme", true);
                break;
            case "Resume":
                request.open("GET", "/resume", true);
                break;
        }

        request.send();
    });

    function callback(response){
        $("#projects_selection").fadeOut('slow');
        $("#centerpiece").replaceWith(response);
        $("#projects_selection:hidden:first").fadeIn('slow');
    }


    function vertMenu(){

    }

    


});