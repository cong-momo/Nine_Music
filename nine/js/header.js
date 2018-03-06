(()=>{
	ajax({
		type:"get",
		url:"header.html"
	}).then(html=>{
		document.getElementById("header").innerHTML=html;
		window.onscroll=function(){
			var scrollTop=
				document.documentElement.scrollTop
				||document.body.scrollTop;
			var headerTop=
      document.getElementById("header-top");
			if(scrollTop>=300)
				headerTop.className="clear fixed";
			else
				headerTop.className="clear";
		}
	})
})()
