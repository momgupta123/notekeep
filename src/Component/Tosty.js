import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tosty(props){
    useEffect(()=>
    {
    return ()=>
    {
        toast(props.mes);
    }
    },[props.mes])
  

  return (
    <>
   {/* {notify()} */}
   
    <div>
    
      <ToastContainer
      position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
    </div>
    </>
  );
}
export default Tosty