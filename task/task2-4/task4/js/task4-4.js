/**
 * Created by john on 2016-06-29.
 */


$(document).ready(function () {

    //var array = JSON.parse(sessionStorage.idAndNum);
    //console.log(array);

    /* 记录杀人之前的数据，并改变界面内容 */

    var peopleArray = JSON.parse(sessionStorage.array);
    var num = parseInt(sessionStorage.num);
    console.log(peopleArray, "杀死"+ (num + 1));

    if (sessionStorage.text == undefined) sessionStorage.text = "";

    $(".box").append(sessionStorage.text + "<p>" + (num+1) + "号被杀手杀手了，其实身份是" + peopleArray[num] + "<p>");


    /* 记录杀人之后的数据改变数组 */

    peopleArray[num] = "死亡";
    sessionStorage.array = JSON.stringify(peopleArray);



    /* 记录死亡人数 */
    var deaths = 0;

    $.each(peopleArray, function (i, val) {
        if (val == "死亡") deaths++;
        // if (val == "杀手") isEnd = false;
        // if (val == "平民") isEnd = false;
        // if (val == "杀手") isEnd = true;
        // if (val == "平民") isEnd = true;

    });

    var isKiller = $.grep(peopleArray, function (value) {
        return value == "杀手";
    });

    var isPopulist = $.grep(peopleArray, function (value) {
        return value == "平民"
    });

    console.log(isKiller.length, isPopulist.length);

    sessionStorage.deaths = deaths;

    console.log(deaths, sessionStorage.deaths);

    if (!isKiller.length || !isPopulist.length) {
        console.log("游戏结束");
        $(".footer-btn").html("查看游戏结果");
    }
    else if (deaths % 2 == 0) {
        $(".footer-btn").html("下一天");
        $(".footer-text").hide();
        $(".footer-icon").hide();
    }

    $(".footer-btn").click(function () {
        sessionStorage.text = $(".box").html();

        if (!isKiller.length || !isPopulist.length) {
            window.location.href = "task4-5.html";
        }
        else if (deaths % 2 == 0) {
            window.location.href = "task4-2.html" ;
        }
        else {
            window.location.href = "task4-3.html" ;
        }

    });



});
