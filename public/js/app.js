

$(document).ready(function(){

    //Center to sidebar animation
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

    });

    $('.selection,.list-group-item').click(function(){
        pageFactory( $(this).attr('value'), callback);

    });

    function pageFactory(pageName,callback){
        
        request = new XMLHttpRequest();
            request.onreadystatechange = function()
            {
                if (request.readyState == 4 && request.status == 200)
                {
                    callback(request.responseText); 
                }
            }; 
        
        request.open("GET", "/" + pageName, true);
        request.send();
    }
        

    function callback(response){
        $("#projects_selection").fadeOut('slow');
        $("#centerpiece").empty().append(response);
        $("#projects_selection:hidden:first").fadeIn('slow');
    }

});