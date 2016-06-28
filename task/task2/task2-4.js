/**
 * Created by john on 2016-06-28.
 */

var peopleArray = JSON.parse(sessionStorage.array);
console.log(peopleArray.length,peopleArray);





$(document).ready(function () {
    var card;
    card = document.getElementsByClassName("boxCard")[0].innerHTML;



    document.getElementById("content").innerHTML = "";



    for (var i = 0; i < peopleArray.length ; i++) {

        //$("#content").append($(".card:first").clone(true));


        //console.log(card+=card);

        document.getElementById("content").innerHTML += card;

        document.getElementsByClassName("identity")[i].innerHTML = peopleArray[i];

        document.getElementsByClassName("number")[i].innerHTML = (i+1) + "号";

        console.log(i);

        document.getElementsByClassName("bottom-img")[i].style.visibility="hidden";


    }
});


