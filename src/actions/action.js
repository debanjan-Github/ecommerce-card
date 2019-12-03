export function setData(data, name) {
	return dispatch => {
		switch(name) {
			case 'productData' : 
				dispatch({
					type : "ADD_PRODUCT_DATA",
					data : data
				})
			break;
		}
	}
}