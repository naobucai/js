/**
 * Created by john on 2016-06-28.
 */



/*  // js代码
var card;
 card = document.getElementsByClassName("boxCard")[0].innerHTML;

 document.getElementById("content").innerHTML = "";

 for (var i = 0; i < peopleArray.length ; i++) {



 document.getElementById("content").innerHTML += card;

 document.getElementsByClassName("identity")[i].innerHTML = peopleArray[i];

 document.getElementsByClassName("number")[i].innerHTML = (i+1) + "号";

 console.log(i);

 document.getElementsByClassName("bottom-img")[i].style.visibility="hidden";
 }
*/

$(document).ready(function () {

    var peopleArray = JSON.parse(sessionStorage.array);
    console.log(peopleArray.length,peopleArray);

    for (var i = 0; i < peopleArray.length ; i++) {

        $("#content").append($(".card:first").clone(true));
        $(".identity").eq(i).html(peopleArray[i]);
        $(".number").eq(i).html((i + 1) + "号");
        console.log(peopleArray[i]);
        $(".card").eq(peopleArray.length).remove();
        $(".bottom-img").hide();
    }


    $(".footer-btn").click(function () {
        window.location.href = "task4-2.html";
    });

    // $(".identity").click(function () {
    //     $(".identity").css("background-color" , "#f5c97b");
    //     $(this).css("background-color" , "#ccc");
    // });
});


