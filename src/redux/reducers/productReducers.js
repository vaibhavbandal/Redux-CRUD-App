import actionTypes from "../actionTypes";

const initialProduct = {
  product:[
    {
    name: "Apple 12",
    color: "Silver",
    category:'Laptop',
    price: 50000,
  },
  {
    name: "Apple 15",
    category:'Laptop',
    color: "Silver",
    price: 70000,
  },
  ],
  formEdit:{
    isEdit:false,
    data:{
      
    }
  }
} 

export default function productReducer(state = initialProduct, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return state;
      break;
    case actionTypes.ADD_SINGLE_PRODUCT:
      return {...state,product:[...state.product,payload]}
      break; 
    case actionTypes.DELETE_SINGLE_PRODUCT:
      const temp = state.product.filter((value,index)=>index!==payload.index)
      return {...state,product:temp};
      break; 
    case actionTypes.EDIT_SINGLE_PRODUCT:
        let data = state.product.filter((value,index)=>index===payload.index)
        return {...state,formEdit:{isEdit:true,data:data[0],index:payload.index}}
      break; 
    case actionTypes.EDIT_SINGLE_PRODUCT_ACTUAL:
          const {formData,index} = payload;
          let data2 = state.product.filter((value,indexMain)=>{
                if(indexMain===index){
                    value.name=formData.name
                    value.color=formData.color
                    value.category=formData.category
                    value.price=formData.price
                    return true;
                }
                return indexMain!==index
          })
        return {...state,product:data2,formEdit:{
          data:null,isEdit:false
        }};
      break; 
    default:
      return state;
  }
}
