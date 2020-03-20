

$( document ).ready(function() {
    let y = $(window).height();
    let imgArr = document.querySelectorAll('.fancybox');
    let imgAttr=[];
    let modalContent = document.querySelectorAll('.modal-dialog');
    let cliHeight = document.documentElement.clientHeight;

    
    //  GALLERY
    imgArr.forEach( item => {
        imgAttr.push(item.querySelector('img').getAttribute('src'));
    });

    for (let i = 0; i < imgArr.length; i++) {
        let divImg = document.createElement('div');
        let img = document.createElement('div');

        img.setAttribute('class', 'Img-js');
        $(img).css({'backgroundImage' : `url("${imgAttr[i]}")`})
        divImg.appendChild(img);  
        modalContent[i].appendChild(divImg);
    }

    //       PARALLAX EFFECT
    $(window).on( "scroll", function () {
        let scroll = $(window).scrollTop();
        let kef = scroll * 0.4;

        $('.sportgirl').css({'transform' : 'translateZ(-500px) translate(0%,' + kef + 'px) scale(2)'})

        // NAVBAR
        if ( scroll > cliHeight ) {
            $('.navbar').addClass( "active" );
        } else {
            $('.navbar').removeClass("active");
        }
    });

    $('.menu_burger').click(function () {
        let aria = $('.navbar-toggler').attr( "aria-expanded" );
        aria = !aria;
        $('.menu_burger').removeClass("show");
    })

    $(document).click(function () {
        let target = event.target; 
        if (target.classList.contains('img-fluid')) {
            $(document).on('touchmove',function(e){
                e.preventDefault();
            });
            window.onscroll = function(){
                return false;
            }
            console.log(1); 
        }
    })
   
});