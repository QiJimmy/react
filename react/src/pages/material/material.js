import React from 'react'
import { set_title } from '../../util/set_title'
import './material.scss'
import food_pic from '../../img/food-1.jpg'
import f_d1 from '../../img/f-d-1.jpg'
import f_d2 from '../../img/f-d-2.jpg'
import f_d3 from '../../img/f-d-3.jpg'
//import { connect } from 'react-redux'
//import { setTitle } from '../../store/actions'


class Material extends React.Component {
	constructor(props){
		super(props);
		//console.log(this.props.match.params.id);
		this.state={
			title: ['全部','主材','辅料','口味'],
			tab:0,
			table_list:[
				{ food_pic: food_pic, name: '泰国香米', flag: false, f_list:[ { img: f_d1, name: '滑炒紫苏桂鱼丁' },{ img: f_d2, name: '茴香鲑鱼配时蔬' },{ img: f_d3, name: '香煎臭桂鱼' }, ] },
				{ food_pic: food_pic, name: '泰国香米', flag: false, f_list:[ { img: f_d1, name: '滑炒紫苏桂鱼丁' },{ img: f_d2, name: '茴香鲑鱼配时蔬' },{ img: f_d3, name: '香煎臭桂鱼' }, ] },
				{ food_pic: food_pic, name: '泰国香米', flag: false, f_list:[ { img: f_d1, name: '滑炒紫苏桂鱼丁' },{ img: f_d2, name: '茴香鲑鱼配时蔬' },{ img: f_d3, name: '香煎臭桂鱼' }, ] },
			],
			
		}
	}
	
	choose(index){
		this.setState({
			tab: index
		})
	}
	
	pull_down(index){
		var table_list = this.state.table_list;
		table_list[index].flag = !table_list[index].flag;
		this.setState({
			table_list: table_list
		})
	}
	
	render(){
		return (
			<div className="material">
				<ul className="title-list">
					{
						this.state.title.map( (item,index) => {
							return(
								<li className={this.state.tab === index? 'on' : ''} onClick={ () => this.choose(index) } key={index}>{item}</li>
							)
						})
					}
				</ul>
				<div className="show-list">
					{
						this.state.table_list.map( (item,index) => {
							return(
								<div className="table" key={index}>
									<div className="top">
										<img src={item.food_pic} alt="img" />
										<span>{item.name}</span>
									</div>
									{
										item.flag?
										<ul className="center">
											{
												item.f_list.map( (v,k) => {
													return(
														<li key={k} onClick={ () => { this.props.history.push({pathname:'/list/'+k}) } }>
															<img src={v.img} alt="img" />
															<span>{v.name}</span>
														</li>
													)
												})
											}
										</ul>
										:
										null
									}
									<div className="bottom">
										{
											item.flag? <span onClick={ () => this.pull_down(index) }>收起菜谱<i className="on"></i></span>
											:
											<span onClick={ () => this.pull_down(index) }>相关菜谱<i></i></span>
										}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
	componentDidMount(){
		set_title('当红食材');
		
	}
}

//const mapDispatchToProps = (dispatch) => {
//	return {
//		setTitle(title){
//			dispatch(setTitle(title))
//		}
//	}
//}

export default Material



