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
    constructor(props){//类中的构造函数
        super(props);
        this.state={isHasStar:false,starClass:"",year:props.year};//state是内部的状态管理
        this.handleChangeStar = this.handleChangeStar.bind(this);
        this.addYear = this.addYear.bind(this);
    }
    handleChangeStar(){//根据状态改变视图
        this.state.isHasStar = !this.state.isHasStar;
        this.state.starClass = this.state.isHasStar ? 'empty' :'';
        this.setState({
            isHasStar:this.state.isHasStar
        });
    }
    addYear(){
        let year = this.state.year;
         this.setState({
            year:year+1
        });
    }
	render(){
		let {imgSrc,name,meat,desc,likeNum} = this.props;
        let {et} = this.context;
        let {year} = this.state;//结构赋值 let的块级作用域
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
                    <span
                      onClick={this.addYear}
                    > {`${et} in ${year}`}
                     </span>
                    <span>
                        <i style={{cursor: 'pointer'}} onClick={this.handleChangeStar} className={`${this.state.starClass} heart icon`} ></i> {`${likeNum} Like`} 
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