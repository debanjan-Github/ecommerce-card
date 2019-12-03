const initialState = {
	productData : []
}

const reducer = (state=initialState, action) => {

	switch (action.type) {
		case "ADD_PRODUCT_DATA":
			state = {
				...state,
				productData : action.data
			}
			break;
	}
	return state;
};

export default reducer;