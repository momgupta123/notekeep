import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';  
 const Note=(props)=> {

   const onDelete=()=> {
      props.deleteItem(props.id);
  }
    return (
      <div className="note">
        <h1>{props.title} </h1>
        <p>{props.content}</p>
        <button onClick={onDelete}  className="btn">
      
        <DeleteOutlineIcon   className='deleteIcon'/>  
        </button>
      </div>
    );
    }
  
  
  export default Note;