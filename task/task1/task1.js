/**
 * Created by john on 2016-06-27.
 */

    /*定义一个变量用来储存上一个改变过颜色的格子*/
    var preRandomChild = 0;

function changeColor() {
    
    /*取得id content*/
    var content = document.getElementById("content");

    /*取得content下的class checks*/
    var child = content.getElementsByClassName("checks");

    /*生成0-8之间的一个随机数，对应九宫格的随机一个格子*/
    var randomChild = Math.floor(Math.random() * child.length);

    /*创建数组，包含红蓝绿三种颜色*/
    var colors = ["red","blue","green"];

    /*生成0-2之间的一个随机数，对应随机一种颜色*/
    var number = Math.floor(Math.random() * colors.length);

    /*取得上一个颜色并将它背景颜色还原成原始颜色*/
    child[preRandomChild].style.backgroundColor="#d58512";

    /*取得随机一个格子并将它的颜色改变成随机一个颜色*/
    child[randomChild].style.backgroundColor=colors[number];

    /*取得上一个改变颜色的格子*/
    preRandomChild = randomChild;

    switch (number) {
        case 0:
            console.log('格子',randomChild+1,'变成红色');
            break;
        case 1:
            console.log('格子',randomChild+1,'变成蓝色');
            break;
        case 2:
            console.log('格子',randomChild+1,'变成绿色');
            break
    }
}

setInterval("changeColor()", 1000);


