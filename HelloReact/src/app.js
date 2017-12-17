import React ,{Component} from 'react';
import ReactDom from 'react-dom';
require("./common/style/main.css");
require("../semantic/dist/semantic.css");
// jsx语法知识  使用babel知识 元素中的类 class - classname
// jsx中的表达式 使用大括号的形式{}
// 自定义的属性使用data-的形式
// 把一段代码封装成组件的形式   组件化的思想

import Nav from 'nav/Nav.js'
import Home from 'home/Home.js'
import CardWrap from 'cardWrap/CardWrap.js'
import PropTypes from 'prop-types';

//ui组件库
import {ButtonToolbar,Button} from 'react-bootstrap';
//bootstrap.Button

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

class App extends Component{
    constructor(props){
        super(props);//根据状态的变化实现选项卡的功能
        this.state = {
            view:'home'
        };
        this.changeView = this.changeView.bind(this);//绑定this

    }
    getChildContext(){
        return {
            et:'win'
        }
    }

    componentDidMount(){//组件第一次渲染的时候调用
        console.log("App组件渲染")
    }
    componentDidUpdate(){//组件更新完成，状态改变触发组件更新
         console.log("App组件更新")
    }
    componentWillUnmount(){//组件移除的时候调用
       console.log("App组件被移除")
    }
        changeView(view){//改变状态，然后渲染相应的组件视图
        this.setState({
            view:view
        })
    }

     render(){//组件渲染到页面中
        let {data} = this.props;
        let {view} = this.state;//使用结构赋值的形式取到对象中的值
        let showComponent = null;
        switch(view){
            case 'home'://jsx的语法，可以将一个元素赋值给一个变量
              showComponent = <Home />
              break;
            case 'list':
               showComponent = <CardWrap data={data}/>
               break;
            default:
        }

        return (
            <div className="ui container">
                 <Nav changeView={this.changeView}/>
                 {showComponent}
                 <Button bsStyle="success">Success</Button>
            </div>
            )
     }
}

App.childContextTypes = {
    et:PropTypes.string
}

ReactDom.render(
	 <App data={data}/> ,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}