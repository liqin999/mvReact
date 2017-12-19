require("./common/style/base.css");
require("./common/style/index.css");

import Item from 'components/Item';
import Footer from 'components/Footer';

class App extends React.Component{
	render(){
		return(
           <div>
           	<header className='header'>
           		<h1>todos</h1>
           		<input type="text" className='new-todo' />	
           	</header>
           	<section className='main'>
           	   <input type="checkbox" className='toggle-all' />
           	   <ul className='todo-list'> 
	           	   	<Item />	
	           	   	<Item />
	           	   	<Item />
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