$(function () {

    $("#btnArrowPrev").click(function () {

        $("#shuttleFrame").animate({
                "margin-left": "310px"
            },
            100,
            "swing",
            function () {
                $("#shuttleFrame table:last-child").insertBefore("#shuttleFrame table:first-child");
                $("#shuttleFrame").css({"margin-left":"0"});
            });
    });


    $("#btnArrowNext").click(function () {

        $("#shuttleFrame").animate({
                "margin-left": "-310px"
            },
            100,
            "swing",
            function () {
                $("#shuttleFrame table:first-child").insertAfter("#shuttleFrame table:last-child");
                $("#shuttleFrame").css({"margin-left":"0"});
            });
    });



});
