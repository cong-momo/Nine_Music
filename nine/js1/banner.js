$(()=>{
	const WIDTH=1000;
	$.get("data/index/getlunbo.php")
	.then(data=>{
		var html="";
		for(var img of data){
		html+=`<li>
			<a href="${img.href}" title="${img.title}">
			<img src="${img.img}">
			</a>	
			</li>`;	
		}
		html+=`<li>
			<a href="${data[0].href}"
				title="${data[0].title}">
				<img src="${data[0].img}">
			</a>
		</li>`;
		var $ul=$(".banner-img");
		var $ids=$(".indicators")
		$ul.html(html).css("width",LIWIDTH*(data.length+1));
		$ids.html("<li></li>".repeat(data.length))
			.children().first().addClass("hover");
		const WAIT=3000,DURA=300;
		var moved=0,timer=null;
		function move(dir=1){
			moved+=dir;
			$ul.animate({
				left:-LIWIDTH*moved
			},DURA,()=>{
				if(moved==data.length){
					$ul.css("left",0)
					moved=0;
				}
				$ids.children(":eq("+moved+")")
					.addClass("hover")
					.siblings().removeClass("hover");
			})
		}
		var timer=setInterval(move,WAIT);
		$("#banner").hover(
			()=>{
			clearInterval(timer);
			timer=null;
		},
			()=>{
			timer=setInterval(move,WAIT);		
			}
		);
		$("[data-move=right]").click(()=>{
			if(!$ul.is(":animated"))
				move();
		});
		$("[data-move=left]").click(()=>{
			if(!$ul.is(":animated")){
				if(moved==0){		
					$ul.css("left",-LIWIDTH*data.length);
					moved=data.length;
				}
			move(-1);
			}
		})
		$ids.on("mouseover","li",function(){
			var $li=$(this);
			var i=$li.index();
			moved=i;
			$ul.stop(true).animate({
				left:-LIWIDTH*moved
			},DURA,()=>{
				$ids.children(":eq("+i+")")
						.addClass("hover")
						.siblings().removeClass("hover");
			})
		});
	})
})