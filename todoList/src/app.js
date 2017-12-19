require("./common/style/base.css");
require("./common/style/index.css");

import Item from 'components/Item';
import Footer from 'components/Footer';

class App extends React.Component{

constructor(props) {
    super(props);
    this.state={//数据的形式 id  value  hascompleted
    	todoData:[]
    }
    this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
    this.onDestory = this.onDestory.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
 }

handleKeyDownPost(ev){// 在文本框按下enter键的时候执行 s定义数据的形式 按下文本框的时候将值id
// 和状态放进状态中，然后然后根据状态中的数据进行渲染列表  在子列表中根据回传的数据 进行删除元素
	if(ev.keyCode !== 13) return;
	let value = ev.target.value.trim();
	let id = new Date().getTime();
	if(value == ""){
		return
	}
	let todo ={};
	todo.id = id;
	todo.value =value;
	todo.hasCompleted = false;
	let {todoData} =this.state;
    todoData.push(todo);

    this.setState({
    	todoData
    });
    ev.target.value = "";
    console.log(this.state.todoData);
}

	onDestory(todo){//删除指定的元素
		let {todoData} = this.state;
		todoData = todoData.filter((item)=>{
			 return todo.id !==  item.id;
		})
		this.setState({todoData})
	}

	onClearCompleted(){//删除所有完成的事件
		let {todoData} =this.state;
		todoData = todoData.filter((item)=>{
			 return  !item.hasCompleted;
		})
		this.setState({todoData})

	}

	render(){//render是元素的渲染的到页面中的行为
		let items = null;
		let {todoData} =this.state;
		let {onDestory,onClearCompleted} = this;
		items = todoData.map((item,i)=>{// 根据数组的多少就行元素的创建
			return (//将列表相关的属性数据和方法传递到子组件中
					 <Item 
					  {...{
					  	onDestory,
					  	todo:item
					  }}  
					 key={i}/>
				)
		});

		return(
           <div>
           	<header className='header'>
           		<h1>todos</h1>
           		<input type="text" onKeyDown = {this.handleKeyDownPost} className='new-todo' />	
           	</header>
           	<section className='main'>
           	   <input type="checkbox" className='toggle-all' />
           	   <ul className='todo-list'> 
	           	   {items}
           	   </ul>
           	</section>
           	<Footer />
           </div>
		)
	}
}

ReactDOM.render(
	<App />,
	  document.getElementById('root')
	);

if(module.hot){
	module.hot.accept();
}