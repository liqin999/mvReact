import React ,{Component} from 'react';
import ReactDom from 'react-dom';
require("./common/style/main.css");
require("../semantic/dist/semantic.css");
// jsx语法知识  使用babel知识 元素中的类 class - classname
// jsx中的表达式 使用大括号的形式{}
// 自定义的属性使用data-的形式

class Nav extends Component{
	render(){
		return(
			<div className="ui three item menu">
			  <a className="active item">社论</a>
			  <a className="item">Reviews</a>
			  <a className="item">即将举办的活动</a>
			</div>
		)
	}
}

class Body extends Component{
	render(){
		return (
			<div>
				<img className='img1' src={require("./common/img/128H.jpg")}/> 
			</div>

			)
	}
}

ReactDom.render(
	    <div className="ui container">
 			<Nav/>
			<Body />
	    </div>,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}