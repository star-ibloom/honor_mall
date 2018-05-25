// 目的 : 让元素进行属性的改变; 

// 定时器;

// 1 关闭开启定时器 ; => 确保定时器唯一; 
// 2 计算速度并取整 => 方便取得缓冲运动速度;
// 3 判定终止并运动 => 
// 停止 : 有运动就一定有停止;  
// 运动 : 根据计算结果让元素属性有规律的发生改变;

// 第一个阶段 => 不包含 opacity; 

// 匀速运动;
// 缓冲运动;
// 圆周运动;
// 加速运动;

//   => 起始点 ; 元素当前的位置;
//   => 终止点(目标点) ; target;

// 第二阶段 => 包含 opacity;

// 元素当前的位置; => getStyle() * 100;

// 第三阶段 => 多物体运动;

// 一个定时器不够用了 => 一个物体给一个定时器;

// 第四阶段 => 多物体任意属性运动;

// 参数提取 ;  => attr 改变元素哪个属性的参数;

// move-0.9.0.js => 实现绝大多数的效果;

// 第五阶段 => 多物体任意属性 同时运动 ;

// 1.dom.timer = number  => dom.timer = object;

// 2.for 循环中 异步程序如何获取 for循环过程中的值;  
//  for in 循环让定时器获取到 当前定时器的 id => 闭包; 
//                       => 主持人(脑子不好 ，只能记住一个值 ,随意创造值);

//                       => 大兄弟 (只能记住一个值 ) 主持人找的

//                       => 小兄弟 (想要值从问大兄弟);  大兄弟找的;

// ----- 多属性同时运动成为可能;

// 3.不完美;
// 3.1 回调函数 ; => 运动执行结束 执行回调函数;
// 线索 => 抽象出来的关键点; ele.timer = object 

// 判定什么时候 动画执行结束;

//  delete ele.timer[attr] 删除掉执行结束的动画记录;
//  Object.keys(ele.timer) => 获取当前对象中所有的key值，并返回数组; 
//  => 利用这个值去判定，当前还在运动的动画有几个;

// 3.2 停不下来 => 多次调用的时候 定时器抛空;
// move.stop  --->  ele.timer ;
// 只要想要停止 => 关闭所有已经开启的定时器就可以了; 所有已经开启的定时器记录在ele.timer里;
// for in 关闭;

// 3.3 还是停不下来; => move.stop 没有合适的调用时机;
	
// 判定什么时候动画还在执行中; move.moving ;
// 只要move 调用了就判定 move.moving 为 true ; 只要调用move 那么动画就是执行中;
// 运动执行结束 执行回调函数 的 同时 把整个动画的运动状态改为 停止运动;
// move.moving = false;

// 4 .停不下来的解决方案;
// 开启之前先关闭定时器;
// 只要还有动画没有执行完毕 先停止，再继续执行 => 确保每个属性都只有一个定时器在控制;
// move.moving == ture => stop;

// ele.timer = {
// 	width:1
// }
// //关闭 1 ;

// clearInterval(ele.timer.width)

// ele.timer["width"] = 2;


//delete;

//工具!;

// delete obj.attr => 删除obj中的attr属性;

// var obj = {
// 	a : 10
// }
// delete obj.a;
// console.log(obj);

function move(ele,json,callback){
	/*
		json = {
					width:300,
					height:200,
					opacity:30
				}
	*/
	// dom.timer = {}; // 定时器容器升级了
	// for(var attr in json){
	// 	dom.timer[attr] = setInterval(function(){

	// 	})
	// }

	if(move.moving){
		move.stop(true);
	}
	/*
		dom.timer = {
			width:1,
			height:2,
			opacity:3
		}
		key : 运动的属性;
		value : 当前运动的定时器;
	*/	

	ele.timer = {}; // 定时器容器升级了
	for(var attr in json){
		(function(myAttr){
			ele.timer[attr] = setInterval(function(){
				// console.log(1);
				// 在这里找到自己属于那个attr;
				// console.log(myAttr);
				// iNow   target 
				if(myAttr == "opacity"){
					var iNow = parseInt(getStyle(ele,myAttr) * 100)
				}else{
					var iNow = parseInt(getStyle(ele,myAttr));
				}
				//target => json[myAttr];
				var speed =  (json[myAttr] - iNow) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if(json[myAttr] == iNow){
					clearInterval(ele.timer[myAttr]);
					delete ele.timer[myAttr];
					// console.log(ele.timer)
					//当前对象之中还有几项;
					// console.log(Object.keys(ele.timer).length)
					// if(Object.keys(ele.timer).length == 0){
					if(!Object.keys(ele.timer).length){
						if(callback){
							callback();
							move.moving = false;
						}
					}
				}else{
					if(myAttr == "opacity"){
						iNow = iNow + speed;
						ele.style.opacity = iNow / 100;
					}else{
						ele.style[myAttr] = iNow + speed + "px";
					}
				}
			},30)
		})(attr)
	}

	move.stop = function(bool){
		//停止所有动画;
		for(var attr in ele.timer){
			clearInterval(ele.timer[attr]);
			delete ele.timer[attr];
		}
		//立即到达目标点;
		/*	dom.timer = {
			width:1,
			height:2,
			opacity:3
		}*/
		if(bool){
			for(var attr in json){
				if(attr == "opacity"){
					ele.style.opacity = json[attr] / 100;
				}else{
					ele.style[attr] = json[attr] + "px";
				}
			}
		}
	}

	move.moving = true;
}
function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele)[attr];
	}else{
		return ele.currentStyle[attr];
	}
}
