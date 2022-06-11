import reduxLogo from '../images/redux1.png'
export function Navbar() {
  return (
    <>
      <div className="drop-shadow-md min-w-full bg-white rounded-lg">
        <div className="text-center text-2xl px-3 py-2 text-purple-800 ">
            
          <div className='flex  justify-center space-x-4'>
              <img className='w-10' src={reduxLogo} />
              <span className='py-1 font-normal' >Redux CRUD APP </span> 
              <img className='w-10' src={reduxLogo} />
           </div>
        </div>
       
        
      </div>
    </>
  );
}
