import React from 'react';
import { HashRouter, Route,Switch,Redirect } from "react-router-dom";
import '../style/style.scss'
import Home from '../pages/home/home';
import List from '../pages/list/list';

class routerIndex extends React.Component {
  	render(){
    	return (
           	<HashRouter>
           		<Switch>
           			<Route exact path="/" render={() => <Redirect to='/home' />} />
	           		<Route path='/home' component={Home} />
	              	<Route path='/list/:id' component={List} />
              	</Switch>
        	</HashRouter>
    	)
  	}
}

export default routerIndex;


