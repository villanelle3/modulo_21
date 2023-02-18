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
    $(window).resize(function(){
        var width = $(window).width();
        if(width <= 959){
            img.src = imageMobile;
        }
        else{
            img.src = imageDesc;
        }
    });
})

