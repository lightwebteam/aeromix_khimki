

$( document ).ready(function() {
    let y = $(window).height();
    let imgArr = document.querySelectorAll('.fancybox');
    let imgAttr=[];
    let modalContent = document.querySelectorAll('.modal-dialog');
    let cliHeight = document.clientheight;

    
    //  GALLERY
    imgArr.forEach( item => {
        imgAttr.push(item.querySelector('img').getAttribute('src'));
        
        // genImg(item);
    });

    for (let i = 0; i < imgArr.length; i++) {
        let divImg = document.createElement('div');
        let img = document.createElement('div');

        img.setAttribute('class', 'Img-js');
        $(img).css({'backgroundImage' : `url('${imgAttr[i]}')`})
        divImg.appendChild(img);  
        modalContent[i].appendChild(divImg);
    }

    console.log(imgAttr)

    // function genImg(index) {
    //     let divImg = document.createElement('div');
    //     let img = document.createElement('div');

    //     img.setAttribute('class', 'Img-js');
    //     img.style.backgroundImage = `url(${imgAttr[index]})`
    //     divImg.appendChild(img);  
    //     modalContent.appendChild(divImg);
    // }

    //       PARALLAX EFFECT
    $(window).on( "scroll", function () {
        let scroll = $(window).scrollTop();
        let kef = scroll * 0.4;

        $('.sportgirl').css({'transform' : 'translateZ(-500px) translate(0%,' + kef + 'px) scale(2)'})
        if ( scroll > 870 ) {
            $('.navbar').addClass( "active" );
        }else if (cliHeight <= 667) {
            $('.sportgirl').css({'transform' : 'translateZ(-500px) translate(0%,' + kef + 'px) scale(2)'})
        } else {
            $('.navbar').removeClass("active");
        }
    });
});