//果实类
var fruitObj = function(){
       this.alive = [];//是否活着BOOL
       this.orange = new Image();//桔色图片
       this.blue = new Image();//蓝色图片
       this.x = [];//果实的位置
       this.y = [];//果实的位置
       this.l = [];//图片的长度（由小变大）
       this.spd = [];//每个果实速度
       this.fruitType = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;//初始每个海葵活动的 ..
        this.x[i] = 0;
        this.y[i] = 0;
        //this.born(i);//初始化时让所有果实都出生   不能让所有果实一开始都出生。。
        this.spd[i] = Math.random()*0.017+0.003;  //[0.005-0.015)
        this.fruitType[i]="";
    } 
   this.orange.src = "./src/fruit.png";
   this.blue.src = "./src/blue.png";
};

//保持屏幕上果实数量，最少15个

fruitObj.prototype.draw = function(){ 
  for(var i=0;i<this.num;i++){
       //find an ane,grow,fly up
       if(this.alive[i]){//如果是活动状态才显示
        if(this.l[i]<14){    
          this.l[i]+=this.spd[i]*deltaTime;//慢慢变大  两帧之间的时间间隔这样使界面平滑
        }else{
           this.y[i]-=this.spd[i]*3*deltaTime;//向上 
        }  
         if(this.fruitType[i]=="blue"){
             var pic = this.orange;
         }else{
             var pic = this.blue;
         }


        ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
        //浮出屏幕
        if(this.y[i]<10){
           this.alive[i]=false;
        }
     } 
 }
};

//更新数据，
fruitObj.prototype.update = function(){ 
    var num = 0;
    for(var i=0;i<this.num;i++){
        if(this.alive[i])num++;
    }

};


//果实出生的方法
//成熟的果实15个，一旦少于这个数，就要开始出生了。
//食物是海葵产生的，我们要
//随机找一个海葵
//获取它的位置，产生一个食物
fruitObj.prototype.born = function(i){ 
    var aneID = Math.floor(Math.random()*ane.num);
    //果实的XY
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeigh - ane.len[i];
    this.l[i] = 0;//初始化时大小均为0
    this.alive[i]=true;
    this.fruitType[i] = Math.random()<0.9?"orange":"blue";
};


function fruitMonitor(){
    var num = 0;
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i])num++;
    }
    if(num<15){

        //send fruit
        sendFruit();
        return;
    }
}

function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
             fruit.born(i);
             return;
        }
    }
}

fruitObj.prototype.dead = function(i){
    this.alive[i]=false;
}