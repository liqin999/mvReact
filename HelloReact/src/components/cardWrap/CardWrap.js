import React, {Component} from 'react';
import Card from 'card/Card.js'


export default class CardWrap extends Component{
	render(){//es6的模块化的基础
		let {data} = this.props;//结构赋值接受父集传递的数据
		//根据数据进行渲染Card组件 ...扩展运算符，将一个对象扩展到一个属性上
		let cards =data.map((item,index)=>{//最终是根据数据返回的jsx元素
			return (
					<Card key={index} {...item}/>
				)
		})

		return (
			   <div className="ui cards">
					{cards}
				</div>
			)
		}

}		

