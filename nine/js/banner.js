$(()=>{
	const LIWIDTH=1000;
	$.get("data/getlunbo.php")
		.then(data=>{
	 var html="";
	 for(var img of data){
		html+=`<li>
			<a href="${img.href}">
			<img src="${img.img}">
			</a>
		</li>`;
	 }
	 html+=`<li>
			<a href="${data[0].href}">
				<img src="${data[0].img}">
			</a>
		</li>`;
		var $ul=$(".banner_ul");
		var $btt=$(".btt");
		$ul.html(html).css("width",LIWIDTH*(data.length+1));
		$btt.html("<span></span>".repeat(data.length)).children()
			.first().addClass("hover");
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
					$btt.children(":eq("+moved+")")
					.addClass("hover")
					.siblings().removeClass("hover");
			})
		}
		var timer=setInterval(move,WAIT);
		$("#solid").hover(
			()=>{
			clearInterval(timer);
			timer=null;
		},
			()=>{
			timer=setInterval(move,WAIT);
		}
		);
		$btt.on("mouseover","span",function(){
			var $span=$(this);
			var i=$span.index();
			moved=i;
			$ul.stop(true).animate({
				left:-LIWIDTH*moved
			},DURA,()=>{
				$btt.children(":eq("+i+")")
						.addClass("hover")
						.siblings().removeClass("hover");
			})
		});
	})
})