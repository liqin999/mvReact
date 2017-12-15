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


let data = [
    {
        imgSrc: require('img/matthew.png'),
       /* name: 'Matt',*/
        meta: 'Friends',
        desc: 'Matthew is an interior designer living in New York.',
        year: 2013,
        likeNum: 75
    },
    {
        imgSrc: require('img/molly.png'),
        name: 'Molly',
        meta: 'Coworker',
        desc: 'Molly is a personal assistant living in Paris.',
        year: 2013,
        likeNum: 35
    },
    {
        imgSrc: require('img/elyse.png'),
        name: 'Elyse',
        meta: 'Coworker',
        desc: 'Elyse is a copywriter working in New York.',
        year: 2014,
        likeNum: 151
    }
];

ReactDom.render(
	    <div className="ui container">
 			 <Nav/>
 			 <CardWrap data={data}/>
	    </div>,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}