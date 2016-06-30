/**
 * Created by john on 2016-06-29.
 */

$(document).ready(function () {

    //var isKill = 0;

    var isClick = 1;

    $(".btnClick").click(function () {
       if (isClick) {
           $(".course").hide();
           isClick = 0;
       } else {
           $(".course").show();
           isClick = 1;
       }

   });

    var day = parseInt(sessionStorage.deaths);

    console.log(day);

    day = sessionStorage.deaths == undefined ? day = 1 : (day / 2) + 1 ;

    $(".day").html(day);

    $(".killerClick").click(function () {
       // isKill = 1;
        location.href = "task4-3.html"
    })
});
