/*
* @Author: nsus
* @Date:   2018-03-31 09:09:41
* @Last Modified by:   nsus
* @Last Modified time: 2018-04-14 09:43:20
*/
var weather;
// 请求天气数据

$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		// console.log(obj);
		weather=obj.data.weather;
		console.log(weather);
    }

});
var remen;
$.ajax({
	url:'https://www.toutiao.com/stream/widget/local_weather/city/',
	dataType:'jsonp',
	type:'get',
	success:function(o){
		//console.log(o);
		remen = o.data;
		console.log(remen);
	}	
});

function updata(){
	// 城市名称
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;
// 当前温度
var temperature=document.querySelector(".dushu");
temperature.innerHTML=weather.current_temperature+"°";
// console.log(temperature);
// 当前天气情况
var current_condition=document.querySelector(".condition");
current_condition.innerHTML=weather.current_condition;
// console.log(current_condition);
// 最高温
var dat_high_temperature=document.querySelector("#dat_high_temperature");
// console.log(dat_high_temperature);
dat_high_temperature.innerHTML=weather.dat_high_temperature;
// 最低温
var dat_low_temperature=document.querySelector("#dat_low_temperature");
// console.log(dat_low_temperature);
dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
// 今天天气情况
var dat_condition=document.querySelector("#dat_condition");
// console.log(dat_condition);
dat_condition.innerHTML=weather.dat_condition;
// 明天最高温
var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
// console.log(tomorrow_high_temperature);
tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
// 明天最低温
var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
// console.log(tomorrow_low_temperature);
tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
// 明天天气情况
var tomorrow_condition=document.querySelector("#tomorrow_condition");
// console.log(tomorrow_condition);
 tomorrow_condition.innerHTML=weather.tomorrow_condition;
 // 今天的icon
 var dat_weather_icon_id=document.querySelector(".qing");
 dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
 // 明天的icon
 var tomorrow_weather_icon_id=document.querySelector(".duoyun");
 tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
// 循环 es6 模板字符串
	var str="";
	weather.hourly_forecast.forEach((item,index)=>{
		console.log(item,index);
		str=str+`<div class="now">
	      	<div class="now_time">${item.hour}:00</div>
	    	<div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
	    	<div class="now_temp">${item.temperature}°</div>
	      </div> `
	})
$(".wrap").html(str);

 // 数组类型的对象
 // for(var i in weather.hourly_forecast){
 // 	// 创建div
 // 	var now=document.createElement("div");
 // 	// 添加类名
 // 	now.className="now";
 // 	// 插入到页面中
 // 	var wrap=document.querySelector(".wrap")
 // 	// 创建h2标签
 // 	var now_time=document.createElement("h2");
 // 	// 添加h2标签类名
 // 	now_time.className="now_time";
 // 	// 显示
 // 	now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
 // 	// 添加图标部分
 // 	var now_icon=document.createElement("div");
 // 	now_icon.className="now_icon";
 // 	now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
 // 	// 添加度数
 // 	var now_temp=document.createElement("h2");
 // 	now_temp.className="now_temp";
 // 	now_temp.innerHTML=weather.hourly_forecast[i].temperature+"°";
 // 	// 父子关系联系
 // 	now.appendChild(now_time);
 // 	now.appendChild(now_icon);
 // 	now.appendChild(now_temp);
 // 	wrap.appendChild(now);
 // }
 // // 循环 es6 模板字符串
	var str="";
	weather.forecast_list.forEach((item,index)=>{
		console.log(item,index);
		str=str+
		`<div class="con">
	      	<div class="con_date">${item.date.slice(5, 7)}/${item.date.slice(8)}</div>
	      	<div class="condition1">${item.condition}</div>
	    	<div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
	    	<div class="wind_direction">${item.wind_direction}</div>
	    	<div class="wind_level">${item.wind_level}级</div>
	      </div> `
	})
$(".wrap1").html(str);
 /*// 近一周天气
$(".wrap").html(str);
 for(var j in weather.forecast_list){
 	var con=document.createElement("div");
 	con.className="con";
 	var wrap1=document.querySelector(".wrap1");
// 近一周日期
 	var con_date=document.createElement("div");
 	con_date.className="con_date";
 	con_date.innerHTML=weather.forecast_list[j].date.slice(5, 7)+"/"+weather.forecast_list[j].date.slice(8);
 	con.appendChild(con_date);
// 近一周天气情况最高
	var condition=document.createElement("h3");
	condition.className="condition1";
	condition.innerHTML=weather.forecast_list[j].condition;
	// 明天最高温
var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
// console.log(tomorrow_high_temperature);
tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
// 明天最低温
var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
// console.log(tomorrow_low_temperature);
tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
// 近一周天气情况最高图片
	var con_picH=document.createElement("div");
	con_picH.className="con_picH";
	con_picH.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;

	var wind_direction=document.createElement("p");
	wind_direction.className="wind_direction";
	wind_direction.innerHTML=weather.forecast_list[j].wind_direction;

	var wind_level=document.createElement("span");
	wind_level.className="wind_level";
	wind_level.innerHTML=weather.forecast_list[j].wind_level+"级";

 	con.appendChild(con_date);
 	con.appendChild(condition);
 	con.appendChild(con_picH);
 	con.appendChild(wind_direction);
 	con.appendChild(wind_level);
 	wrap1.appendChild(con);
}*/
 for(var i in remen){
			var ul = document.querySelector('.remen_city ul');
			var str='';
			str+='<li>'+i+'</li>';
			ul.innerHTML += str;
			
			console.log(i);
			var h1=document.createElement("div");
			h1.className="remen_text";
			h1.innerHTML=i;
			var ul=document.createElement("ul");
			for(var m in remen[i]){
				// console.log(m);
				var li=document.createElement("li");
				li.innerHTML=m;
				ul.appendChild(li);
			}
			var remen_city=document.querySelector(".remen_city");
			remen_city.appendChild(h1);
			remen_city.appendChild(ul);
		}
}
// 请求各城市天气
function ajax(str){
	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url1,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			weather=obj.data.weather;
			updata();
			$(".cheng").css({"display":"none"});
		}
	});
}
// 页面加载完成以后执行
window.onload=function(){
	updata();
	
	$(".remen_city ul li").on("click",function(){
		
		var cityh=this.innerHTML;
		ajax(cityh);
		$(".big_box").css({"display":"none"});
	})
    $(".city").on("click",function(){
    	$(".big_box").css({"display":"block"});
		// var loaction=this.innerHTML;
		// AJAX(loaction);
	})
	// 输入框获取焦点，按钮内容变搜索
	$("input").on("focus",function(){
		$(".quxiao").html("搜索");
	})
// 操作按钮
var button=document.querySelector(".quxiao") ;
// console.log(button);
// 点击 取消 loaction消失 搜索 str1==n"城市名称" 弹出
button.onclick=function(){
	// 获取search_right的文本内容
	var text=button.innerText;
	console.log(text);
	if(text=="取消"){
		$(".remen_city").css({"display":"none"});
	}
    else{
    	// 获取input中输入的内容
    	var str1=document.querySelector("input").value;
    	// 比较 二级城市名
    	for(var i in remen){
    		for(var j in remen[i]){
    		if(str1==j){
    			ajax(str1);
    			return;
    		}
    	}
    }
    alert("没有该城市");
  }
 }
}

