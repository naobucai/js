/**
 * Created by john on 2016-06-29.
 */


$(document).ready(function () {

    var peopleArray = JSON.parse(sessionStorage.array);
    console.log(peopleArray.length,peopleArray);

    var isChoose = false;

    var idAndNum = [];

    for (var i = 0; i < peopleArray.length ; i++) {

        $("#content").append($(".card:first").clone(true));
        $(".identity").eq(i).html(peopleArray[i]);
        $(".number").eq(i).html((i + 1) + "号");
        console.log(peopleArray[i]);
        $(".card").eq(peopleArray.length).remove();
        $(".bottom-img").hide();
    }


    $(".card").click(function () {

        var find = $(this).find(".identity");

        idAndNum[0] = ($(this).index()) + 1;
        idAndNum[1] = find.text();

        //alert($(this).index());
        console.log(find.text());
        if (find.text() == "杀手") {
            alert("杀手不能选择杀手");
            console.log("杀手不能选择杀手");
        }
        else {
            $(".identity").css("background-color" , "#f5c97b");
            find.css("background-color" , "#ccc");
            isChoose = true;
            click();
        }

    });


    $(".footer-btn").click(function () {
        if (isChoose) {
            sessionStorage.text ="<p>" + idAndNum[0] + "号被杀手杀死了，其实他的身份是" + idAndNum[1] + "<p>";

            console.log(sessionStorage.text);

            window.location.href = "task4-4.html";
        } else {
            alert("请选择一个人物杀死");
        }

    });

});

