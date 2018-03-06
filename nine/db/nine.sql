#重新创建数据库nine
SET NAMES UTF8;
DROP DATABASE IF EXISTS nine;
CREATE DATABASE tedu CHARSET=UTF8;
USE nine;
#创轮播表
CREATE TABLE `lunbo` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

INSERT INTO lunbo VALUES('1','imgs/1.jpg','轮播图片1');
INSERT INTO lunbo VALUES('2','imgs/2.jpg','轮播图片2');
INSERT INTO lunbo VALUES('3','imgs/3.jpg','轮播图片3');
INSERT INTO lunbo VALUES('4','imgs/4.jpg','轮播图片4');
INSERT INTO lunbo VALUES('5','imgs/5.jpg','轮播图片5');
INSERT INTO lunbo VALUES('6','imgs/6.jpg','轮播图片6');