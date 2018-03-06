//海葵类


var aneObj = function(){
     this.x = [];
     this.len = [];//海葵高度
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
   for(var i=0;i<this.num;i++){
       //每个海葵，生长的位置随机，比较像自然生长
       this.x[i] = i * 16 + Math.random()*20;
       //每个海葵的高度，有基准值，再加一个随机数
       this.len[i] = 200 + Math.random()*50;
   }
//    console.log(1);
//    console.log(this.x);
}

aneObj.prototype.draw = function(){


    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.6;
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    
    for(var i=0;i<this.num;i++){
     ctx2.beginPath();
     ctx2.moveTo(this.x[i],canHeigh);//从底端向上描制
     ctx2.lineTo(this.x[i],canHeigh-this.len[i]);

     //this.headx[i] = this.amp[i]*c1+this.rootx[i];
     //ctx2.beginPath();
     //ctx2.moveTo(this.headx[i],this.heady[i]);
     //ctx2.quadraticCurveTo(this.rootx[i],this.heady[i]+100,this.rootx[i]);
     //ctx.strokeStyle();










     ctx2.stroke();
    }
    ctx2.restore();
    
}
