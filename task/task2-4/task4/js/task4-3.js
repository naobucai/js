/**
 * Created by john on 2016-06-29.
 */


$(document).ready(function () {



    var peopleArray = JSON.parse(sessionStorage.array);
    console.log(peopleArray.length,peopleArray);

    var id = parseInt(sessionStorage.deaths); //记录杀手杀人还是投票

    var isChoose = false;

    var num;

    $(".bottom-img").hide();

    for (var i = 0; i < peopleArray.length ; i++) {

        $("#content").append($(".card:first").clone(true));
        $(".identity").eq(i).html(peopleArray[i]);
        $(".number").eq(i).html((i + 1) + "号");
        console.log(peopleArray[i]);
        $(".card").eq(peopleArray.length).remove();
    }

    if (id % 2) {
        $(".footer-btn").html("投死");
        $(".ChangeText").eq(0).html("发言讨论结束，大家请投票");
        $(".ChangeText").eq(1).html("点击得票人数最多人的头像")

    }

    $(".card").click(function () {

        var find = $(this).find(".identity");

        if (find.text() == "死亡") {
            alert("此角色已死亡")
        }
        else {
            if (!(id % 2 == 0 || sessionStorage.deaths == undefined)) {
                console.log("投票杀人", id % 2);

                num = ($(this).index()); // 编号
                console.log(num);

                $(".bottom-img").hide();
                $(".bottom-img").eq(num).show();

                $(".identity").css("background-color", "#f5c97b");
                find.css("background-color", "#ccc");
                isChoose = true;


            } else {
                console.log("我是杀手", id % 2);

                if (find.text() == "杀手") {
                    alert("杀手不能选择杀手");
                    console.log("杀手不能选择杀手");
                }
                else {
                    num = ($(this).index()); // 编号
                    console.log(num);

                    $(".identity").css("background-color", "#f5c97b");
                    find.css("background-color", "#ccc");
                    isChoose = true;
                    $(".bottom-img").hide();
                    $(".bottom-img").eq(num).show();
                }
            }
        }





        // if (find.text() == "杀手") {
        //     alert("杀手不能选择杀手");
        //     console.log("杀手不能选择杀手");
        // }
        // else if (find.text() == "死亡") {
        //     alert("此角色已死亡")
        // }
        // else {
        //     num = ($(this).index()); // 编号
        //     console.log(num);
        //
        //     $(".identity").css("background-color" , "#f5c97b");
        //     find.css("background-color" , "#ccc");
        //     isChoose = true;
        // }

        $(".identity:contains(死亡)").css("background-color" , "#ccc");
    });
    $(".identity:contains(死亡)").css("background-color" , "#ccc");



    $(".footer-btn").click(function () {
        if (isChoose) {
            //sessionStorage.text ="<p>" + idAndNum[0] + "号被杀手杀死了，其实他的身份是" + idAndNum[1] + "<p>";
            //console.log(sessionStorage.text);
            //sessionStorage.idAndNum = JSON.stringify(idAndNum);
            //console.log();

            //$(".card").eq(idAndNum[0]).find(".identity").html("死亡");

            //peopleArray[idAndNum[0]] = "死亡";
            //sessionStorage.array = JSON.stringify(peopleArray);
            //console.log(peopleArray.length,peopleArray);


            sessionStorage.num = num;
            console.log(num);

            window.location.href = "task4-4.html";
        } else {
            alert("请选择一个人物杀死");
        }

    });

});

