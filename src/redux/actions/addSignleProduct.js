import actionTypes from "../actionTypes";


export default function addSingleProduct(data) {
    return async (dispatch) => {    
        dispatch({
          type: actionTypes.ADD_SINGLE_PRODUCT,
          payload: data,
        });
      };
  }