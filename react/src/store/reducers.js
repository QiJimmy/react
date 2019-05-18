import { combineReducers } from 'redux'
import state_data from './state'

const pageTitle = (state = state_data.pageTitle,action) => {
	switch(action.type){
		case 'SET_PAGE_TITLE':
		  return action.data
		default:
		  return state
	}
}

const infoList = (state = state_data.infoList,action) => {
	switch(action.type){
		case 'SET_INFO_LIST':
		  return action.data
		default:
		  return state
	}
}

const titleTab = (state = state_data.titleTab,action) => {
	switch(action.type){
		case 'SET_TITLE_TAB':
		  return action.data
		default:
		  return state
	}
}

const personalData = (state = state_data.personal_data,action) => {
	switch(action.type){
		case 'SET_PERSONAL_DATA':
		   return action.data
		default:
		   return state
	}
}

export default combineReducers({
	pageTitle,
	infoList,
	titleTab,
	personalData,
})

