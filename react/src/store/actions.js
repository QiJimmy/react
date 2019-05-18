const setPageTitle = (data) => {
	return (dispatch,getState) => {
		dispatch({ type: 'SET_PAGE_TITLE', data:data })
	}
}

const setInfoList = (data) => {
	return (dispatch,getState) => {
		var pathUrl = 'http://dinner.prowiser.cn/index.php/getProById';
    	var params = {
    		user_id: 3,
    		pro_id: 59255,
    	}
    	fetch(pathUrl, {
		    method: 'post',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(params)
		})
		.then(res => res.json())
		.then( data => {
		   	dispatch({ type: 'SET_INFO_LIST', data: data.productList })
		})
	}
}

const setPersonal = (data) => {
	return (dispatch,getState) => {
		var pathUrl = 'http://dinner.prowiser.cn/index.php/mycenter';
		fetch(pathUrl, {
		    method: 'post',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({user_id: 23 })
		})
		.then(res => res.json())
		.then( res => {
		   	if(res.succ === 1){
    			var personal = {
    				user_info: res.user_data,
    				all: res.all,
    				my: res.collect,
    				finish: res.like,
    			}
    			dispatch({type: 'SET_PERSONAL_DATA', data: personal})
    		}
		})
	}
}


export{
	setPageTitle,
	setInfoList,
	setPersonal,
}
