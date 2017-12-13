import React ,{Component} from 'react';
import ReactDom from 'react-dom';
require("./common/style/main.css");

ReactDom.render(
	<div>Hello React,welcome back</div>,
	document.getElementById("root")
);

if(module.hot){
	module.hot.accept()
}