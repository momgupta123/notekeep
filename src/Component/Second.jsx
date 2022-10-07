
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
import Tosty from './Tosty';

const Second= (props) => {
    const[check, setCheck]=useState(0)
    const[note ,setNote]=useState({
        title:"",
        content:"",
      });
console.log(props.val);
    const inputEvent = (event)=>{
        
        const {name,value}=event.target;
            setNote((prevData)=>{
              return{
                ...prevData,
             [name]: value,
              };
            });
            console.log(note);
          };
          const addEvent=()=>{
           setCheck(1);

            setNote({
              title:"",
              content:"",
            });
                };
  return (
    <>
    {check?<Tosty mes={"Data can not add"}/>:""}
    {/* {props.val.lenght>=6?<Tosty mes={"Data can not add"}/>:""} */}
    
    <div className='main_note'>
        <form >
          <input type="text" name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />
          <textarea   name="content" id="" cols="" value={note.content}  onChange={inputEvent} placeholder='Write a note....' className='textarea'  ></textarea>
        
             
        <AddCircleOutlineIcon onClick={addEvent} className="plus_sign" />     
        </form>
    
        
    </div>
    </>
  )
}

export default Second