import React from 'react'
import { HashRouter, Route,Redirect,Switch, NavLink } from "react-router-dom";
import './home.scss'
import Personal from '../personal/personal'
import Material from '../material/material'

class Home extends React.Component {
	//组件即将被渲染到页面之前触发，此时可以进行开启定时器、向服务器发送请求等操作
	componentWillMount(){
		
	}
	
	render(){
		return (
			<div className="home">
				<HashRouter>
					<Switch>
						<Route exact path="/home" render={() => <Redirect to='/home/personal' />} />
	                    <Route path='/home/personal' component={Personal} />
	                    <Route path='/home/material' component={Material} />
	                </Switch>    
                    <div className="footer">
				        <NavLink to="/home/personal" activeClassName="selected">
				        	<i></i>
				        	<span>个人中心</span>
				        </NavLink>
						<NavLink to="/home/material" activeClassName="selected">
							<i></i>
				        	<span>当红食材</span>
						</NavLink>
				    </div>
            	</HashRouter>
			</div>
		)
	}
	//组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
	componentDidMount(){
    	
	}
	
	
}

export default Home;


