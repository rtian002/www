
const html=`
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style type="text/css">
html {
	font-family: arial,Hiragino Sans GB,Microsoft Yahei,"微软雅黑",Tahoma,Helvetica,STHeiti;
	background:#ccc
}
#header {
	height: 75pt
}
#logo {
	margin-left: 75pt
}
#nav {
	overflow: hidden;
	height: 40px;
	background: #001e6a;
	text-align: center;
	opacity: .8
}
#menu,#nav {
	position: relative
}
#menu {
	margin: 0 0 0 100px;
	padding: 0;
	list-style: none
}
.submenu {
	float: left;
	display: inline-block;
	width: 60px;
	color: #fff;
	line-height: 36px;
	cursor: pointer;
	user-select:none;
}
.m_mark {
	position: absolute;
	z-index: -1;
	background: #c00;
	transition: all .4s ease
}
.m_mark,.submenu {
	margin: 2px 0;
	height: 36px;
	border-radius: 3px
}
#main {
	margin: 10px 0
}
#demo {
	position: relative;
	margin: 0 auto
}
#demo ul {
	margin: 0;
	padding: 0;
	list-style: none
}
.block {
	position: absolute;
	display: inline-block;
	overflow: hidden;
	opacity: .9;
	transform-origin:left bottom;
	transition: all 0.3s ease-in-out;
}
.block,.cont {
	border-radius: 3px;
}
.cont {
	position: relative;
	display: table-cell;
	padding: 0 5px;
	vertical-align: middle;
	text-align: center
}
.cont span {
	display: block;
	color: #ddd
}
.mark {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 0;
	border-radius: 0;
	transition: .4s ease-in-out
}
.mark a {
	display: table-cell;
	padding: 0 5px;
	color: #aaa;
	vertical-align: middle;
	text-decoration: none;
	font-size: 1.4vw
}
.mark .title {
	color: #fff;
	font-weight: 500
}
.block:hover .mark {
	top: 0;
	left: 0;
	height: 100%;
	border-radius: 3px;
	background: #000;
	opacity: .92
}
#datenav {
	height: 40px;
}
#dnav {
	margin: 0;
	margin: 0 auto;
	padding: 0;
	width: 35pc;
	list-style: none
}
#refresh {
	float: left;
	margin: 2px 20px;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background: #a6c8c6;
	text-align: center;
	cursor: pointer
}
#refresh img {
position:relative;left:-5px;top:-5px;
	opacity: .8
}
.dnav {
	display: inline-block;
	margin: 5px;
	width:5pc;
	height: 30px;
	border-radius: 10px;
	background: #a6c8c6;
	color: #666;
	text-align: center;
	line-height: 30px;
	cursor: pointer
}
#refresh:hover {
	background: #3a8bda
}
#refresh:hover img {
	opacity: .9
}
.dnav:hover {
	background: #3a8bda;
	color: #ddd;
	opacity: .6;
	transition: all .2s ease-in
}
.mactive {
	background: #c00;
	color: #fff
}
.dactive {
	background: #3a8bda;
	color: #ddd
}
#footer {
	color: #111;
	text-align:center;
}
  </style>
 </head>
 <body>
 <div id="header">
	<div id="logo">
	<img src="https://gitee.com/rtian/images/raw/master/wukong.jpg"/>
<!-- 	<img src="2.png" height="100px" align="middle"><img src="22.png" height="75px" align="middle">
 -->	</div>
 </div>
 <div id="nav">
	<ul id="menu">
		<div class="m_mark" ></div>
		<li hot="0" class="submenu mactive">全部</li>
		<li hot="2" class="submenu">国内</li>
		<li hot="1" class="submenu">国际</li>
		<li hot="5" class="submenu">社会</li>
		<li hot="14" class="submenu">军事</li>
		<li hot="6" class="submenu">财经</li>
		<li hot="10" class="submenu">汽车</li>
		<li hot="8" class="submenu">科技</li>
		<li hot="4" class="submenu">娱乐</li>
		<li hot="3" class="submenu">体育</li>
	</ul>
 </div>
 <div id="main">
	<div id="demo">
	<ul>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
		<li class="block"><div class='cont'></div><div class='mark'></div></li>
	</ul>
	</div>

 </div>
 <div id="footer">
 <hr>
<div id="copyright" >CopyRight @ ritan 2016</div>
 </div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script>
//-------------------------------------------
	var rtian={//-------初始化参数
		_row:2,
		_col:4,
		_split:6,
		_hot:0,
		_date:'',
		_bwidth:($(window).width()-200)/8,
		_count:21,//和_block的数量保持一致
		_posi:[],
		_json:[],
		_color:['#1A4335','#08689F','#1188D4','#A5231F','#4E47A9','#E28618','#1883E2','#204AC9'],
	};
	rtian._block=[
		[{bclass :'d',posi :[0,0]}],
		[{bclass :'a',posi :[0,0]},{bclass :'a',posi :[1,0]},{bclass :'a',posi :[0,1]},{bclass :'a',posi :[1,1]}],
		[{bclass :'a',posi :[0,0]},{bclass :'b',posi :[1,0]},{bclass :'a',posi :[0,1]}],
		[{bclass :'b',posi :[0,0]},{bclass :'a',posi :[1,0]},{bclass :'a',posi :[1,1]}],
		[{bclass :'a',posi :[0,0]},{bclass :'a',posi :[1,0]},{bclass :'c',posi :[0,1]}],
		[{bclass :'c',posi :[0,0]},{bclass :'a',posi :[0,1]},{bclass :'a',posi :[1,1]}],
		[{bclass :'b',posi :[0,0]},{bclass :'b',posi :[1,0]}],
		[{bclass :'c',posi :[0,0]},{bclass :'c',posi :[0,1]}],
		];
	rtian.setPosi=function(){
		var e=this,
			n=0;
		for(let i=0;i<e._block.length-1;i++){
			var rnd = parseInt(Math.random() * (e._block.length - (i + 1)) + i + 1);
			[e._block[i],e._block[rnd]]=[e._block[rnd],e._block[i]]
		}
		for (var i=0;i<e._row ;i++ ){
			for (var ii=0;ii<e._col ;ii++ ){
				var ablock=e._block[i*e._col+ii];
				for (var j=0;j<ablock.length ; j++){
					e._posi[n]= e._posi[n] || {};
					e._posi[n].c=ablock[j].bclass;
					e._posi[n].p=[ablock[j].posi[0]*e._bwidth + ii*e._bwidth*2 , ablock[j].posi[1]*e._bwidth*0.75 + i*e._bwidth*1.5];
					n++;
				}
			}
		}
	};
	rtian.setBlock=function(){
		var e=this;
		$('.block').each(function(i,el){
				$(el).removeClass('a b c d');
				$(el).addClass(e._posi[i].c);
				$(el).css({'background':e._color[Math.floor(Math.random() * 8)],'transform':'translate('  + e._posi[i].p[0] + 'px,'  + e._posi[i].p[1] + 'px)'});
			});
	};

	rtian.block_format=function(){
		var e=this;
		$('#demo').css({'width':e._bwidth*8 + 'px','height':(e._bwidth*3 + e._split) + 'px' });
		$('.a').css({'width':(e._bwidth-e._split) + 'px','height':(e._bwidth*0.75-e._split) + 'px'});
		$('.b').css({'width':(e._bwidth-e._split) + 'px','height':(e._bwidth*1.5-e._split) + 'px'});
		$('.c').css({'width':(e._bwidth*2-e._split) + 'px','height':(e._bwidth*0.75-e._split) + 'px'});
		$('.d').css({'width':(e._bwidth*2-e._split) + 'px','height':(e._bwidth*1.5-e._split) + 'px'});
	};

	rtian.menu=function(){
		var e=this;
		$('.m_mark').css({'left':$('.mactive').position().left + 'px','width':$('.mactive').width() + 'px'});
		$('.submenu').hover(function(){
			$('.m_mark').css({'left':$(this).position().left + 'px','width':$(this).width() + 'px'});
		
		},function(){
		$('.m_mark').css({'left':$('.mactive').position().left + 'px','width':$('.mactive').width() + 'px'});
		});
	};

	rtian.redraw=function(){
		var e=this;
		e.setPosi();
		e.setBlock();
		e.block_format();
		// e.getdata();
		// e.setContent();
		// e.cont_format();
	};
//----------------页面事件--------------------------------
	$('#refresh').on('click',function(){
		rtian.redraw();
	});
	$(window).on('resize',function(){
		var	bw=($(window).width()-200)/8;
		rtian._bwidth=bw;
		rtian.redraw();
	});
	$('#menu li').each(function(i,e){
		$(e).on('click',function(){
			$('.submenu').removeClass('mactive');
			$(e).addClass('mactive');
			rtian._hot=$(e).attr('hot');
			rtian.redraw();
		});
	});
	$('#dnav li').each(function(i,e){
		$(e).on('click',function(){
			$('.dnav').removeClass('dactive');
			$(e).addClass('dactive');
			rtian._date=$(e).attr('date');
			rtian.redraw();
		});
	});
	$('#demo').on('mousewheel',function(){
		rtian.redraw();
	});
//-----------------------------
	$(function(){
		var e=rtian;
			e.menu();
			// e.datelist();
			e.redraw();
			// $('.block').css({'transition':'transform .3s ease-in-out'});
	});




</script>
 </body>
</html>
`

export default {
  async fetch(request, env, ctx) {
    return new Response(html,{
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
