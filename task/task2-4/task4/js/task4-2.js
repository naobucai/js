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

    $(".killerClick").click(function () {
       // isKill = 1;
        location.href = "task4-3.html"
    })
});
