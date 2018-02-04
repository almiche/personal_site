

$(document).ready(function(){

    //Center to sidebar animation
    $('.navbar.navbar-inverse li').click(function(){

       $(this).toggleClass('active'); 

        $('#title').animate({
            top:'2%',
        }, 1000,function(){
            $('.navbar.navbar-inverse li').fadeOut();
            //Menu into drop down
        });

        $('#name').animate({
            fontSize:'2em'
        },1000);
       
        $('#student').animate({
            fontSize:'1em'
        },1000);

    });

    $('.nav-item').click(function(){
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
        
        request.open("GET", "https://raw.githubusercontent.com/almiche/personal_site/master/"+ pageName + ".html", true);
        request.send();
    }
        

    function callback(response){
        $("#centerpiece").empty().append(response);
    }

});