window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // const images = ["../assets/images/photomania-16a4f2cfa28b5dccd3ca06968e887d5e.jpg", "../assets/images/studio-ghibli-7415572_960_720.jpg"]
    // var img = $("#imagemain")[0];
    // setInterval(function(){
    //     let random = Math.floor(Math.random() * 2)
    //     img.src = images[random]
    // }, 8000)
    $(function (){
        $(document).scroll(function () {
            var $nav = $(".navbar-dark");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

});
