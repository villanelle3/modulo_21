window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    $(function (){
        $(document).scroll(function () {
            var $nav = $(".navbar-dark");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

});

$(document).ready(function(){
    var img = $("#imagemain")[0];
    const imageMobile = ["../assets/images/studio-ghibli-7415572_960_720-MOBILE.jpg"];
    const imageDesc = ["../assets/images/studio-ghibli-7415572_960_720.jpg"];

    var img2 = $("#img2")[0];
    const imageMobile2 = ["../assets/images/img2-MOBILE.jpg"];
    const imageDesc2 = ["../assets/images/img2.jpg"];

    $(window).resize(function(){
        var width = $(window).width();
        if(width <= 959){
            img.src = imageMobile;
            img2.src = imageMobile2;
        }
        else{
            img.src = imageDesc;
            img2.src = imageDesc2;
        }

        if(width <= 959 && width >= 768 ){
            $('.var').removeClass('col-md-6').addClass('col-md-12');
        }
        else{
            $('.var').removeClass('col-md-12').addClass('col-md-6');
        }

    });
})

