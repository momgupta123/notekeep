import React, { useState } from 'react'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const CreateNote = (props) => {
  
  const[note ,setNote]=useState({
    title:"",
    content:"",
  });

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
props.passNote(note);
setNote({
  title:"",
  content:"",
});
    };
  return(
    <div>
    <div className='main_note'>
        <form >
          <input type="text" name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />
          <textarea   name="content" id="" cols="" value={note.content}  onChange={inputEvent} placeholder='Write a note....' className='textarea'  ></textarea>
        
             
        <AddCircleOutlineIcon onClick={addEvent} className="plus_sign" />     
        </form>
    
        
    </div>
    
    
        </div>
 

  )
  }


export default CreateNote;