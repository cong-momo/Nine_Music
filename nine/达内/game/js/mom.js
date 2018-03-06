//大鱼妈妈
var momObj = function(){
    this.x;
    this.y;
    this.angle;//大鱼角度
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
}
momObj.prototype.init = function()
{
    this.x = canWidth * 0.5;//保存在中间
    this.y = canHeigh * 0.5;//
    this.angle = 0;//初始角度为0
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";
    
}
momObj.prototype.draw = function(){
    //使用全局函数，，让我们大鱼移动驱向鼠标
    //mx my 鼠标坐标 x y 大鱼位置
    this.x = lerpDistance(mx,this.x,0.98);//运动的反映调慢一些 0.9--0.98
    this.y = lerpDistance(my,this.y,0.99);

    //delta angle  每一帧都要更新角度
    //Math.atan2(y,x)  atan() 方法可返回数字的反正切值。

   //获取坐标差.

   var deltaY = my - this.y;
   var deltaX = mx - this.x;
   //计算大鱼与鼠标的角度差。。
   var beta = Math.atan2(deltaY,deltaX)+Math.PI;//-PI,PI
   //让大鱼的角度趋向于鼠标的角度
   //lerp angle 
   //                目标值    当前值 
   this.angle = lerpAngle(beta,this.angle,0.9);

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
    ctx1.restore();
}