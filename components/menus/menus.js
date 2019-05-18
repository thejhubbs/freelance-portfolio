function initiateMenus() {
    menuToggle();
    scrollLinks();
}

function menuToggle() {
    $('body').click((e)=>{    
        //If its the menu button being clicked, toggle the menu, otherwise close it
        if(e.target.id == "menu-button") {
            $('#menu-list').slideToggle();
        } else {
            $('#menu-list').slideUp();
        }
    });
}

//Adds a smooth scroll feature to the top menu.
//              SCROLL
//LINKS must have SCROLL class and HREF with id of DIV below
function scrollLinks() {
    //SOURCE: https://howchoo.com/g/yjfjmty1zjb/how-to-animate-scroll-in-jquery
    //Takes the distance between current position & target position for a normalized scroll rate
    function getDuration(target) {
        //Set rate from .2 - 2 for drastic speed differences.
        var currentTop = $(window).scrollTop(), rate = 0.5, distance;
        distance = Math.abs(currentTop - target);
        return distance * rate;
    }

    $(".scroll").on('click', function () {
        var section = $(this).attr('href');
        var position = $(section).offset().top;
        $("HTML, BODY").animate({ scrollTop: position }, getDuration(position));
    });
}