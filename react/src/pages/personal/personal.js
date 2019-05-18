import React from 'react'
import './personal.scss'
import { connect } from 'react-redux'
import { setPersonal } from '../../store/actions'
import { set_title } from '../../util/set_title'
import All from '../../component/all/all'
import My from '../../component/my/my'
import Finish from '../../component/finish/finish'
//import user_pic from '../../img/user-pic.png'

class Personal extends React.Component {
	constructor(){
		super();
		this.state={
			list_tab: ['全部','我的收藏','已求菜谱'],
			tab:0,
			personal:{
				user_info:{},
				all:[],
				my:[],
				finish:[],
			},
		}
		this.choose = this.choose.bind(this);
		this.show_list = this.show_list.bind(this);
	}
	//列表切换
	choose(index){
		this.setState({
			tab: index
		})
	}
	
	show_list(personalData){
		if(this.state.tab === 0){
			return(
				<All data={ personalData.all }/>
			)
		}else if(this.state.tab === 1){
			return(
				<My data={ personalData.my }/>
			)
		}else if(this.state.tab === 2){
			return(
				<Finish data={ personalData.finish }/>
			)
		}
	}
	
	componentWillMount(){
		let { setPersonal } = this.props
		let { personalData } = this.props
		if(!Object.keys(personalData).length){
			setPersonal()
		}
	}
	
	render(){
		let { personalData } = this.props
		if(Object.keys(personalData).length){
			return (
				<div className="personal">
					<div className="info-out">
						<div className="info">
							<div>
								<span><img src={personalData.user_info.avatar} alt='头像' /></span>
								<span><em>{personalData.user_info.nick_name}</em><i>职位: {personalData.user_info.job}</i></span>
							</div>
							<div>
								<span><em>{personalData.user_info.collect_count}</em><i>收藏</i></span>
								<span><em>{personalData.user_info.like_count}</em><i>求菜谱</i></span>
							</div>
						</div>
					</div>
					<ul className="list">
						{
							this.state.list_tab.map( (item,index) => {
								return(
									<li className={ this.state.tab === index? 'on' : '' } key={index} onClick={ () => this.choose(index) }>{item}</li>
								)
							})
						}
					</ul>
					<div className="show">
						{
							this.show_list(personalData)
						}
					</div>
				</div>
			)
		}else{
			return null;
		}
	}
	
	componentDidMount(){
		set_title('个人中心');
		
	}
	
}

const mapStateToProps = (state) => {
	return {
		personalData: state.personalData,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPersonal(data) {
			dispatch(setPersonal(data))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Personal)
