/**
 * Created by john on 2016-06-27.
 */

function setter() {
    /*取出输入的人数*/
    var peopleNumber = document.getElementsByClassName("number")[0];

    /*判断输入的数值是否正确*/
    if (peopleNumber.value >=6 && peopleNumber.value <= 18 &&
        parseInt(peopleNumber.value) == peopleNumber.value) {

        /*计算杀手人数*/
        var killer = Math.floor(peopleNumber.value / 4);
        if (peopleNumber.value == 8) killer = 1;


        /*计算平民人数*/
        var populist = peopleNumber.value - killer;

        /*改变界面上杀手的人数*/
        /*改变界面上平民的人数*/
        var peopleNum = [killer, populist];

        for (var i = 0; i < 2; i++) {
            document.getElementsByClassName("peopleNum")[i].innerHTML = String(peopleNum[i]);
        }

        random(peopleNumber.value, killer, populist);

        console.log("总人数为" + peopleNumber.value,
            "杀手为"+killer, "平民为" + populist);

    } else {
        alert("输入有误！请重新输入！");
        peopleNumber.value = "";
    }
}

/*随机分配杀手平民函数*/
function random(peopleNumber, killer, populist) {
    var peopleArray = [];

    /*添加杀手到数组*/
    for (var n = 0; n < killer; n++) {
        peopleArray[n] = "杀手";

    }

    /*添加平民到数组*/
    for (var p = killer; p <peopleNumber; p++) {
        peopleArray[p] = "平民";
    }

    /*打乱数组*/
    peopleArray.sort(function(){ return 0.5 - Math.random() });

    var randomPeople = document.getElementsByClassName("randomPeople")[0];

    randomPeople.style.fontSize = "1.6rem";

    randomPeople.innerHTML = "";
    for (var i = 0; i < peopleNumber; i++) {
        randomPeople.innerHTML += "<p>"+String(i+1) + "号是" + peopleArray[i] + "</p>";
    }
}
