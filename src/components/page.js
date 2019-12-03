import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setData } from "../actions/action";
import Card from "./card";
import { productData as products } from "../clientData/productData"
var productData = products;	


class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productData : []
		}
	}
	componentDidMount() {
		this.setState({
			productData : this.getdata()
		})

		this.props.setData(this.getdata(), 'productData');
	}
	getdata = () => {
		let requiredData = []
		productData[0]["items"].forEach((item, index) => {

			let name = item["system"]["name"],
				img = item["images"]["primary"]["base"],
				price = item["price"]["invoicePrice"],
				strike = item["price"]["sellPrice"];

			requiredData.push({
				name : name,
				img : img,
				price : Math.round(price),
				strike : Math.round(strike)
			})
		})
		return requiredData.slice(0,6);
	}

	render() {
		let state = this.state,
			props = this.props;
		return (
			<div className="main-content">
				{ props.productData.length ? 
					props.productData.map((item, index) => {
						return <Card key={index} info={item}/>
					}) : null
				}
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		productData : state.productData
	}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
	setData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Page)
