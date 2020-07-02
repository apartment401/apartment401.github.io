// Removes the loading screen after 1500 ms, and supports smooth scrolling on click
$(document).ready(function(){
    $('.preloader').delay(1000).fadeOut('fast');
    $('.preloader-background').delay(1500).fadeOut('slow');
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.slider').slider({'height': 500});
    $('ul.tabs').tabs();
    // Add smooth scrolling to all links
    $('a')
    .not('[type="panel"]')
    .on('click', function(event) {
        if (this.hash !== "") {
            console.log("Move!");
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
    });
});
