/**
 * Created by john on 2016-06-30.
 */


$(document).ready(function () {

    var peopleArray = JSON.parse(sessionStorage.array);

    console.log(peopleArray);

    var isWho = false;

    $.each(peopleArray, function (i, val) {
        if (val == "杀手") isWho = true;
    });

    if (isWho) {
        console.log("杀手胜利");
        $(".icon").find("img").attr("src", "../img/killer.gif")

    } else {
        console.log("平民胜利");
        $(".icon").find("img").attr("src", "../img/populist.gif")

    }

});


