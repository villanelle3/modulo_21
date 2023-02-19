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

    var opinions = [
        '"Aut esse architecto sed quibusdam galisum aut eius atque ex quae laboriosam ut rerum veniam. Ut minus autem sit neque veritatis non atque illo vel reprehenderit nisi ad odit dolor et sequi dolor. Et minus nemo aut blanditiis sunt eos voluptas sunt aut voluptatem vitae."',
        '"A consequatur debitis in velit nihil aut consectetur iure et galisum temporibus qui illo quis est pariatur asperiores. Est ducimus voluptas ea distinctio corporis ut ipsum assumenda! Et perferendis exercitationem non perferendis quod sed ipsum facilis ex omnis tenetur aut facere maxime et voluptate consequatur. Est corrupti voluptatem sit autem omnis sit quia quibusdam."',
        '"Lorem ipsum dolor sit amet. Est numquam facilis ut harum maxime qui ratione nulla et autem corporis. Cum soluta enim aut laudantium consectetur ea ipsa excepturi aut provident deleniti nam cupiditate aperiam."',
        '"Et voluptatibus voluptas non maxime voluptas id quia enim est commodi reprehenderit et veniam accusantium eos quas sint. Id voluptatem placeat sit esse ipsam et explicabo delectus et voluptatem voluptatum."',
        '"Sit illo iure qui pariatur assumenda ut veritatis expedita eos nihil perferendis eum mollitia iste hic sint temporibus? Ab aperiam itaque hic quis nemo aut quos iusto 33 distinctio fugiat."',
        '"Est doloribus voluptas non nesciunt sunt cum autem quasi in harum perferendis aut quidem delectus. Quo perferendis quos a omnis omnis sit provident incidunt eos quaerat repellendus? Et illum accusantium ea numquam dolor sit voluptas Quis ut fuga voluptas ut ratione fugiat. Qui culpa obcaecati est officiis exercitationem ut ducimus minus aut aliquid omnis et quia quisquam qui eius voluptates ut minus quasi."'
    ];

    var people = [
        "Dominic Norris",
        "Sidney Butler",
        "Tommy Mcdaniel",
        "Margie Goodwin",
        "Keith Cervantes",
        "Gavin Stark"
    ]

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

    // setInterval(function() {
    //     var i = Math.round((Math.random()) * opinions.length);
    //     if (i == opinions.length) --i;
    //     $("#opinion").html(opinions[i]);
    //     $("#person").html(people[i]);
    // }, 6 * 1000);

})

