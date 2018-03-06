document.body.onload = game;

var can1 = null;
var can2 = null;
var ctx1 = null;
var ctx2 = null;


var lastTime;//上一帧被执行的时间
var deltaTime;//二帧间隔的时间差

var canWidth = 0; //画布的宽和高，二个画布一样
var canHeigh = 0;//


var bgPic = new Image();//背景图

var ane = null;//海葵对象

var fruit = null;//果实对象

var mom = null;//大鱼对象


//为了大鱼移动定义鼠标位置
var mx = 0;
var my = 0;


function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init(){
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    bgPic.src = "src/background.jpg";

    canWidth = can1.width;
    canHeigh = can1.height;

    ane = new aneObj();
    ane.init();
    //ane.draw();
    console.log(ane);
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();

    mx = canWidth * 0.5;
    my = canHeigh * 0.5;

    can1.addEventListener("mousemove",onMouseMove,false);
}


function gameloop(){
    requestAnimFrame(gameloop);
    var now  = Date.now();
    deltaTime = now - lastTime;   //二帧之差
    lastTime = now;               //更新上一次时间
    //console.log(deltaTime);
    drawBackground();
    ane.draw();
    fruitMonitor();
    momFruitsCollision();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeigh);
    mom.draw();
    //console.log(aneObj);
}
function onMouseMove(e){
    if(e.offsetX || e.layerX){
      mx = e.offsetX == undefined ? e.layerX : e.offsetX;
    }
    if(e.offsetY || e.layerY){
     my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    //console.log(mx+"|"+my);
      
}