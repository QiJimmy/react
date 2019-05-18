import React from 'react'
import all_img from '../../img/all_img-1.png'

export default class All extends React.Component {
	constructor(props){
		super(props);
		this.state={
			show_list:[
				{ img: all_img, name: '宫保鸡丁', address: '绿茶餐厅(七宝万科广场店)' },
				{ img: all_img, name: '宫保鸡丁', address: '绿茶餐厅(七宝万科广场店)' },
				{ img: all_img, name: '宫保鸡丁', address: '绿茶餐厅(七宝万科广场店)' },
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
									{
										item.action === 'collect'? <span>已收藏</span>
										: item.action === 'like'? <span>以求菜谱</span> : ''
									}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}



