$(document).ready(function(){
    $('.preloader').delay(1000).fadeOut('fast');
    $('.preloader-background').delay(1500).fadeOut('slow');
    $('.sidenav').sidenav();
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

// web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDlrMFCuGC5Uut-DtJbrG6GzAlGP1Y7xc8",
    authDomain: "testtaker-a.firebaseapp.com",
    databaseURL: "https://testtaker-a.firebaseio.com",
    projectId: "testtaker-a",
    storageBucket: "testtaker-a.appspot.com",
    messagingSenderId: "877261584283",
    appId:
        "1:877261584283:web:f230ad13f003fcec39133e",
    measurementId: "G-NX8Q4RWVBX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();