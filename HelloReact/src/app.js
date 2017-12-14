import React ,{Component} from 'react';
import ReactDom from 'react-dom';
require("./common/style/main.css");
require("../semantic/dist/semantic.css");
// jsx语法知识  使用babel知识 元素中的类 class - classname
// jsx中的表达式 使用大括号的形式{}
// 自定义的属性使用data-的形式
// 把一段代码封装成组件的形式   组件化的思想

import Nav from 'nav/Nav.js'
import CardWrap from 'cardWrap/CardWrap.js'

ReactDom.render(
	    <div className="ui container">
 			 <Nav/>
 			 <CardWrap/>
	    </div>,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}