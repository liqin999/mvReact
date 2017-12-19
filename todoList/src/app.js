

class App extends React.Component{
	render(){
		return(
           <div> this is a demo111</div>
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