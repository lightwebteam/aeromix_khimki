$( document ).ready(function() {
    let y = $(window).height();


    //       PARALLAX EFFECT
    $(window).on( "scroll", function () {
        let scroll = $(window).scrollTop();
        let kef = scroll * 0.4;
        let offset = -scroll;

        $('.sportgirl').css({
            'transform' : 'translateZ(-500px) translate(0%,' + kef + 'px) scale(2)'
        })
        if ( scroll > 870 ) {
            $('.navbar').addClass( "active" );
        } else {
            $('.navbar').removeClass("active");
        }
    });

    //   GALLERY IMG ADD
    $('.fancybox').click(function () {
        function closeImage (attr) {
            $(this).css({
                'display' : 'none'
            })
        }
        let imgAttr = $(this).children(0).attr('src');
        let imgPopup = '<div class="img_wrap" onClick="closeImage(this)"></div>';
        imgPopup.concat('<img class="image_popup" src="'+imgAttr+'" alt="">')
        $(this).append(imgPopup);

        return false; 
    });


});