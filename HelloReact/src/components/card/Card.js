import React, {Component} from 'react';
export default class Card extends Component{
// 写成动态的数据形式
	render(){
		let {imgSrc,name,meat,desc,year,likeNum} = this.props;
		return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meat}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span> {`Joined in ${year}`} </span>
                    <span>
                        <i className="empty heart icon"></i> {`${likeNum} Like`} 
                    </span>
                </div>
            </div>
			)
	}

}