/**
 * Created by john on 2016-06-27.
 */
/*取出输入的人数*/
// var peopleNumber = document.getElementsByClassName("number")[0];

var isClick; // 判断用户是否点击发牌

var value;

/*转到查看身份页面*/
function next() {
    isClick = 1;
    /*判断输入的数值是否正确*/
    console.log(isClick);
    isTrue();
    //location.href = "task2-3.html";

}


function OnInput(event) {
    value = event.target.value;

    if (value != preValue) {

        // 判断输入的数值是否正确
        isTrue();

        var preValue = event.target.value;
    }
}


// 判断输入的数值是否正确函数
function isTrue() {

    var text = document.getElementsByClassName("number")[0];

    if (value >= 6 && value <= 18 &&
        parseInt(value) == value) {

        // 计算杀手人数
        var killer = Math.floor(value / 4);

        console.log(killer, value-killer);

        if (value == 8) killer = 1;

        // 改变界面上杀手的人数
        // 改变界面上平民的人数
        var peopleNum = [killer, value -1 ];

        for (var i = 0; i < 2; i++) {
            document.getElementsByClassName("peopleNum")[i].innerHTML = String(peopleNum[i]);
        }

        random(killer);

        text.style.color = "#fab344";

        if (isClick) {
            isClick = 0;
            location.href = "task2-3.html";
        }

    } else {
        text.style.color = "red";

        if (isClick) {
            alert("输入有误！请重新输入！");
            isClick = 0;
        }

    }

}


/*
function setter() {

 random(killer, populist);

 console.log("总人数为" + peopleNumber.value,
 "杀手为"+killer, "平民为" + populist);


 } else {
 alert("输入有误！请重新输入！");
 peopleNumber.value = "";

 }
 }

 */

/*随机分配杀手平民函数*/
function random(killer) {

    var peopleArray = [];

    /*添加杀手到数组*/
    for (var n = 0; n < killer; n++) {
        peopleArray[n] = "杀手";
    }

    /*添加平民到数组*/
    for (var p = killer; p < value; p++) {
        peopleArray[p] = "平民";
    }

    /*打乱数组*/
    peopleArray.sort( function() {
        return 0.5 - Math.random()
    });

    console.log(peopleArray);

    sessionStorage.array = JSON.stringify(peopleArray);

    var randomPeople = document.getElementsByClassName("randomPeople")[0];

    randomPeople.style.fontSize = "1.6rem";

    randomPeople.innerHTML = "";
    for (var i = 0; i < value; i++) {
        randomPeople.innerHTML += "<p>"+String(i+1) + "号是" + peopleArray[i] + "</p>";
    }
}


