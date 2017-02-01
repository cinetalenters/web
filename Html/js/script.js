        $(document).ready(function () {
              
            //HEADER
              $(document).ready(function (e) {
                $(window).scroll(function (event) {
                    var sTop = $(window).scrollTop();
                    if (sTop > 10) {
                        $('.sticky-header').addClass('fixed-header');
                    }
                    else {
                        $('.sticky-header').removeClass('fixed-header');
                    }
                });
              });
            
            //PARTNERS SLIDER
            $("#owl-demo2").owlCarousel({
                navigation: true, 
                items: 5, 
                afterInit: function (elem) {
                    var that = this
                    that.owlControls.prependTo(elem)
                }
            });
            
            //MOVIE SLIDER
            var owl3 = $('.movieSlider');
            owl3.owlCarousel({
                nav: true
                , items: 3
                , dots: true
                , loop: true
            , });
            
            //BORN TODAY SLIDER
            var owl2 = $('.born-today');
            owl2.owlCarousel({
                nav: true
                , items: 2
                , margin: 10
            , });
            
            //LOCATION SLIDER
            var owl1 = $('.location-container');
            owl1.owlCarousel({
                nav: true
                , items: 4
            , });
            
            //CAROUSEL SLIDER
            var owl = $("#owl-consta")
                , owlTeam = $('#owl-team')
                , animStyle = "fadeInRight";
            owl.owlCarousel({
                navigation: false
                , smartSpeed: 500
                , paginationSpeed: 2500
                , autoplay: true
                , loop: true
                , items: 1
                , itemsDesktop: false
                , itemsDesktopSmall: false
                , itemsTablet: false
                , itemsMobile: false
                , onInitialize: doAnimation(animStyle)
            });
            owl.on('changed.owl.carousel', function (event) {
                doAnimation(animStyle);
            });

            function doAnimation(animName) {
                var animEnd = 'webkitAnimationEnd animationend';
                var target1 = $('.item .caption-text h1')
                    , target2 = $('.item .caption-text h3')
                    , target3 = $('.item .caption-text p');
                target1.addClass('animated ' + animName + '').one(animEnd, function () {
                    target1.removeClass('animated ' + animName + '')
                });
                target2.addClass('animated ' + animName + '').one(animEnd, function () {
                    target2.removeClass('animated ' + animName + '')
                });
                target3.addClass('animated ' + animName + '').one(animEnd, function () {
                    target3.removeClass('animated ' + animName + '')
                });
            }
        });
        
        //WOW ANIMATION
        wow = new WOW({
            animateClass: 'animated'
            , offset: 100
            , callback: function (box) {
                // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        });
        wow.init();
        
        //AUD & JOB SLIDER
        $(document).ready(function(){
          $('.job-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical: true,
            prevArrow: '.controllers .prev',
            nextArrow: '.controllers .next',
            
          });
        });
       
        //TALENT SLIDER
        $(document).ready(function(){
          $('.slider').slick({
            infinite: true,
            slidesPerRow: 5,
            rows: 2,
            prevArrow: '.controllers .prev1',
            nextArrow: '.controllers .next1',
            
          });
        });