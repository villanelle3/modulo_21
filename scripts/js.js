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

    $('.v-carousel').each(function (index, element)
    {
        element = $(element);
        element.css({
            'display': 'inline-block',
            'vertical-align': 'bottom',
            'position': 'relative',
            'overflow': 'hidden'});

        var list = element.children().first();

        ul = $(list);
        ul.index = 0;
        ul.css({
            'display': 'block',
            'margin': '0',
            'padding': '0',
            'position': 'relative',
            'top': '0'});

        var maxHeight = 0;

        ul.children().each(function (index, li)
        {
            li = $(li);
            li.css({
                'display': 'block',
                'list-style-type': 'none',
                'margin': '0',
                'padding': '0'});

            if (li.height() > maxHeight)
                maxHeight = li.height();
        }).css('height', maxHeight + 'px');

        element.css('height', maxHeight + 'px');

        startTimer(ul);
    });

    function animate(ul) {

        if (ul.timeout) {
            clearTimeout(ul.timeout);
        }

        var li = ul.children();

        ul.index = ul.index === li.length - 1 ? 0 : ul.index + 1;

        ul.stop(true).animate({
            'top': -li.eq(ul.index).position().top
        }, 'slow', function () {
            startTimer(ul);
        });
    }

    function startTimer(ul) {

        if (ul.timeout) {
            clearTimeout(ul.timeout);
        }

        ul.timeout = setTimeout(function () {

            animate(ul);

        }, 5000);
    }
})

