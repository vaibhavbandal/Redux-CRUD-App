import { useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import  getAllProducts, { deleteProduct, editProduct } from "../redux/actions/productActions";



export function UserTable() {

    const product = useSelector((state)=>state.product.product)
    const formEdit = useSelector((state)=>state.product.formEdit)
    
    const dispatch = useDispatch();
  useEffect(()=>{

 
  },[])

  const handleDelete = (index)=>{
    !formEdit.isEdit &&  dispatch(deleteProduct(index))
  }

  function handleEdit(index){
         dispatch(editProduct(index))
  }

  return (
    <>
      <div className="code-preview rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 overflow-hidden">
          <h3 className="text-center pb-5" >Product List</h3>
        <div className="relative overflow-auto max-h-80  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400  overflow-y">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                 No
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th> 
                <th scope="col" className="px-6 py-3">
                  Edit
                </th> 
                <th scope="col" className="px-6 py-3">
                  Delete
                </th> 
              
              </tr>
            </thead>
            <tbody>
                {
                   product && product.map((value,index)=>{
                    const {name,color,category,price} = value;
                        return  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {index+1}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {name}
                        </th>
                        <td className="px-6 py-4">{color}</td>
                        <td className="px-6 py-4">{category}</td>
                        <td className="px-6 py-4">{price}</td>
                        <td className="px-6 py-4 text-red-800">
                        <span onClick={()=>{handleEdit(index)}} className="hover:cursor-pointer" ><MdEdit/></span>
                        </td>
                        <td onClick={()=>{handleDelete(index)}} className="px-6 py-4 text-red-800 hover:cursor-pointer">
                        <span><MdDelete/></span>
                        </td>
                      </tr>
                    })
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
