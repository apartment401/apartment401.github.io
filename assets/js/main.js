$(document).ready(function(){
    $('.preloader').delay(750).fadeOut('fast');
    $('.preloader-background').delay(1000).fadeOut('slow');
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
    // Add smooth scrolling to all links
    $('a')
    .not('[type="panel"]')
    .on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});