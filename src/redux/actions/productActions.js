import actionTypes from "../actionTypes";

export default function getAllProducts() {
  return async (dispatch) => {    
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS,
      payload: null,
    });
  };
}


export function deleteProduct(index){
  return async (dispatch) => {    
    dispatch({
      type: actionTypes.DELETE_SINGLE_PRODUCT,
      payload: {index:index},
    });
  };
}

export function editProduct(index){

  return async (dispatch) => {    
    dispatch({
      type: actionTypes.EDIT_SINGLE_PRODUCT,
      payload: {index:index},
    });
  };

}

export function editProductActual(updatedData){

  return async (dispatch) => {    
    dispatch({
      type: actionTypes.EDIT_SINGLE_PRODUCT_ACTUAL,
      payload: updatedData,
    });
  };

}