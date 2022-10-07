
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import './App.css';
import Tosty from "./Component/Tosty"
import CreateNote from './Component/CreateNote';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Note from './Component/Note';
import Second from './Component/Second';


const App=() => {
  // const notify = () => toast("Wow so easy!");
  // const showToastMessage = () => {
    // toast.warn('🦄 Wow so easy!');

  //   toast('Success Notification !', {
  //       // position: toast.POSITION.TOP_RIGHT
  //   //  toast("Wow so easy!");
  // });
// };
const[cond,setCond]=useState(0)
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
 
setAddItem((prevData)=>{
  return[...prevData, note];
});

};

const onDelete=(id)=>{
  if(addItem.length <2){
    setCond(1)
  return(  <Tosty/>
  );
  }
  else{
    setAddItem((olddata)=>
    olddata.filter((currdata,index)=>{
      setCond(0)
      return index !== id;
     
    })
    
    );
    
    };
        
  }

useEffect(()=>
{

},[])

return (

<div className="App">
     <Header/>
     {cond?<Tosty mes={"Data Can't Delete"}/>:""}
    {addItem.length<6?
     <CreateNote passNote={addNote} 
      val={addItem} />:<Second val={addItem}/>}
     
     {addItem.map((val,index)=>{
      return(
        <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
      );
     })}
     <Footer/>
    </div>
  );
}

export default App;
