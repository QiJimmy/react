import React from 'react'
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../store/actions'
class List extends React.Component {
	//初始化
	constructor(){
		super();
		this.state={
			text_name: '123',
			list_arr: [
				{ id:0,name:'home1'},{ id:1,name:'home2'},{ id:2,name:'home3'},
			],
			data:[],
		}
		this.bindValue = this.bindValue.bind(this);
		
	}
	bindValue(v){
		this.setState({
			text_name: v
		})
	}
	//组件即将被渲染到页面之前触发，此时可以进行开启定时器、向服务器发送请求等操作
	componentWillMount(){
		
	}
	render(){
		let { pageTitle, infoList,titleTab } = this.props
		if(infoList.length){
			return (
				<div>
					<div>{pageTitle}</div>
					<div>{titleTab}</div>
					<ul>
						{
							infoList.map((item,index) => {
								return(
									<li key={index} id={item.id} onClick={() => { this.props.history.push({pathname:'/list',query:{id:123}}) }}>{item.pro_name}</li>
								)
							})
						}
					</ul>
					<div>{this.state.text_name}</div>
				</div>
			)
		}else{
			return null;
		}
		
	}
	//组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
	componentDidMount(){
		let { setPageTitle, setInfoList } = this.props
		// 触发setPageTitle action
	    setPageTitle('我是home页')
	    
	    // 触发setInfoList action
	    setInfoList()
    	
	}
	//组件接收到属性时触发
	componentWillReceiveProps(){
		
	}
	//当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发
//	shouldComponentUpdate(){
//		return false;
//	}
	//组件即将被更新时触发
	componentWillUpdate(){
		
	}
	//组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作
	componentDidUpdate(){
		
	}
	//组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。
	componentWillUnmount(){
		
	}
	
	
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
	return {
	    pageTitle: state.pageTitle,
	    infoList: state.infoList,
	    titleTab: state.titleTab
	}
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch) => {
  	return {
	    setPageTitle(data) {
	        dispatch(setPageTitle(data))
	    },
	    setInfoList(data) {
	        dispatch(setInfoList(data))
	    }
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)


