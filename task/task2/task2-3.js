/**
 * Created by john on 2016-06-28.
 */


var clickNum = 0; // 记录点击次数
var peopleNum = 1; // 记录人物编码
var people = JSON.parse(sessionStorage.array); // 取得上一个页面传递的字符串并转化成数组


function clickBtn() {

    clickNum ++;
    //if (peopleNum < )
    console.log(clickNum);

    var i = (clickNum + 1) / 2 ;  // 计算页数
    if (i == people.length) { // 判断页数是否为数组总数
        // 改变成图片2
        document.getElementsByClassName("image")[0].src = "img/icon2.gif";

        // 更改按钮title
        document.getElementsByClassName("btn")[0].innerHTML = "法官查看";

        // 取得身份name
        var name = document.getElementsByClassName("name")[0];
        name.style.display = "inline";  // 取消隐藏元素
        name.innerHTML = "身份：" + people[peopleNum-1]; // 设置身份
    }

    else if (i > people.length) { // 当页数大于数组总数时跳转页面
        location.href = "task2-4.html";
    }

    else {
        check();    // 点击按钮更改页面内容方法
    }
}

console.log(people);

function check() {

    // 取得图片 class
    var image = document.getElementsByClassName("image")[0];
    // 取得按钮 class
    var btnTitle = document.getElementsByClassName("btn")[0];
    // 取得身份 class
    var name = document.getElementsByClassName("name")[0];

    // 判断 点击次数是否为偶数 当次数为偶数时显示页面1 否则显示页面2
    if (clickNum % 2 == 0) {
        image.src = "img/icon1.gif";
        btnTitle.innerHTML = "查看" + peopleNum + "号身份";
        document.getElementsByClassName("number")[0].innerHTML = peopleNum;
        name.style.display = "none";

    } else {
        name.innerHTML = "身份：" + people[peopleNum-1];
        peopleNum ++;
        image.src = "img/icon2.gif";
        btnTitle.innerHTML = "隐藏并传递给" + peopleNum + "号";
        name.style.display = "inline";

    }
}
