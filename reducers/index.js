/** @format */

const reducer = (state, action) => {
	switch (action.type) {
		case 'AGREGAR_LATLNG':
			return {
				...state,
				latlng: [...state.latlng, action.payload],
			};
		default:
			return state;
	}
};
