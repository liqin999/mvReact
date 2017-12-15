import React, {Component} from 'react';
import PropTypes from 'prop-types';
let propTypes={//后台传值检查组件的属性（类型检查）
    imgSrc:PropTypes.string,
    name:PropTypes.string,
    meat:PropTypes.string,
    desc:PropTypes.string,
    year:PropTypes.number,
    likeNum:PropTypes.number,
};

let contextTypes = {
    et: PropTypes.string
}

export default class Card extends Component{
// 写成动态的数据形式
	render(){
		let {imgSrc,name,meat,desc,year,likeNum} = this.props;
        let {et} = this.context;
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
                    <span> {`${et} in ${year}`} </span>
                    <span>
                        <i className="empty heart icon"></i> {`${likeNum} Like`} 
                    </span>
                </div>
            </div>
			)
	}

}

// 为属性指定默认值:
Card.defaultProps = {
  name: 'defaultName'
};

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;