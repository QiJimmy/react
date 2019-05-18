import React from 'react'
import all_img from '../../img/all_img.png'

export default class My extends React.Component {
	constructor(props){
		super(props);
		this.state={
			show_list:[
				{ img: all_img, name: '蓝莓山药', address: '望湘园（长泰广场店）' },
				{ img: all_img, name: '蓝莓山药', address: '望湘园（长泰广场店）' },
				{ img: all_img, name: '蓝莓山药', address: '望湘园（长泰广场店）' },
			],
		}
	}
	render(){
		return (
			<div className="all-out">
				{
					this.props.data.map( (item,index) => {
						return(
							<div className="all" key={index}>
								<div><img src={all_img} alt="index" /></div>
								<div>
									<span><em>{item.pro_name}</em><i>{item.pro_name}</i></span>
									<span>已收藏</span>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}



