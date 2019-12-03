import React, { Component } from "react";

export default function Card(props) {
	let info = props.info;
	return (
		<div className="card-content">
			<div className="card-image">
				<img src={` https://cdn.hnak.com/products/${info.img}`}/>
			</div>
			<div className="card-name">{info.name}</div>
			<span className="card-priceName">Price</span><span className="card-price card-mrp">{info.price}</span><br></br>
			<span className="card-priceName">Strike Price</span><span className="card-price">{info.strike}</span>
		</div>
	)
}