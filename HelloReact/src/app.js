import React ,{Component} from 'react';
import ReactDom from 'react-dom';
require("./common/style/main.css");

// jsx语法知识  使用babel知识 元素中的类 class - classname
// jsx中的表达式 使用大括号的形式{}
// 自定义的属性使用data-的形式
let num = 888;
let domem = <em>数量</em>;
let w1 = "hello";

ReactDom.render(
	<div>
		<span className='col-red' data-msg='first'>{w1}</span>
		<span>{num}</span>
		{domem}
		<span>world</span>
	</div>,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}