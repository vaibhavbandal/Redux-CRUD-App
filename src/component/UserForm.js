import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdViewModule } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import addSingleProduct from "../redux/actions/addSignleProduct";
import { editProductActual } from "../redux/actions/productActions";

export function UserForm() {
  const dispatch  = useDispatch();
  const [formData,setFormData] = useState({name:'',color:'',category:'',price:''})
  const [isEdit,setIsEdit] = useState(false);
  const [formButton,setFormButton] = useState('Register')
  
  const editFormData = useSelector((state)=>state.product.formEdit)

  const handleRegister = ()=>{
    const {name,color,category,price} = formData;
    if(name===''||color===''||category===''||price===''){
      alert('Fill Form !')
      return;
    }

    if(formButton==='Register'){
      dispatch(addSingleProduct(formData))
      setFormData({name:'',color:'',category:'',price:''})
    }else if(formButton==='Update'){
      
          dispatch(editProductActual({formData,index:editFormData.index}));
          setFormButton('Register')

          setFormData({name:'',color:'',category:'',price:''})
    }

}
  useEffect(()=>{
      
      if(editFormData.isEdit){
          const {name,color,category,price} = editFormData.data;
          setFormButton('Update')
          setFormData({name,color,category,price})
        }else{
          setFormButton('Register')
          
      }
      
      
  },[editFormData])


  const handleChange = (e) =>{
      setFormData((pre)=>{
        return {...pre,[e.target.name] : e.target.value}
      })
  }




  return (
    <>
      <div className="code-preview rounded-xl  bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 overflow-hidden">
        <div className="px-2 py-2 text-center sm:px-2 md:px-4 lg:px-4 ">
          <h3 className="flex justify-center space-x-1 text-purple-400  ">
            <span className="text-2xl"> Register Form </span>
            <span className="flex justify-center pt-2 text-2xl">
              <MdViewModule />
            </span>
          </h3>
        </div>

        <div className="px-2 py-2  sm:px-2 md:px-4 lg:px-4 xl:px-20   ">
          <input 
            onChange={handleChange}
            name='name'
            value={formData.name}
            className="rounded border text-sm font-medium  w-full"
            type={"text"}
            placeholder="Product Name"
          />
        </div>

        <div className=" px-2 py-2 sm:px-2 md:px-4 lg:px-4 xl:px-20 ">
          <input 
            onChange={handleChange}
            name='color'
            value={formData.color}
            className="rounded border text-sm font-medium    w-full"
            type={"text"}
            placeholder="Color"
          />
        </div>
        <div className=" px-2 py-2 sm:px-2 md:px-4 lg:px-4 xl:px-20">
          <input 
            onChange={handleChange}
            name="category"
            value={formData.category}
            className="rounded border text-sm font-medium  w-full"
            type={"text"}
            placeholder="Category"
          />
        </div>
        <div className=" px-2 py-2 sm:px-2 md:px-4 lg:px-4 xl:px-20 ">
          <input 
            onChange={handleChange}
            name="price"
            value={formData.price}
            className="rounded border text-sm font-medium    w-full"
            type={"text"}
            placeholder="Price"
          />
        </div>
        <div className="px-2 py-2 sm:px-2 md:px-4 lg:px-4 flex justify-center content-center ">
          <button 
            onClick={handleRegister}
            className="hover:bg-purple-400 text-black px-4 py-2 rounded-sm 
                border
                active:bg-purple-800
                border-black
                hober:bg-white
                hover:border-0
                hover:drop-shadow-2xl
                hover:text-white
                flex justify-center space-x-1 
                "
          >
            <span className="text-sm">{formButton}</span>
            <span className="pt-1">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
