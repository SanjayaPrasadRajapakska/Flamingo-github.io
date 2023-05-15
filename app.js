

$(document).ready(function () {
    //hero-slider
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items:1 ,//DISPLY EKE TIBIYA YUTHU ITEAM GANANA
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,//BUTTUN EKA NETI WEI
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 600,
        center: true,/*4to 3 center wi pwnwima*/
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                
            },
            768: {
                items: 2,
                margin: 20,//4TO ATHARA GAP EKA
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
