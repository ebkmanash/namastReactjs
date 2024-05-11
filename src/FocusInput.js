import React, { useRef, useState} from 'react';
const FocusInput = () => {
  const [value,setValue]=useState('')
  let focus=useRef(null);
  let focosing=()=>{
    focus.current.focus();
  }

  
  return (
    <div>
        <input ref={focus}></input>
        <button onClick={focosing} >focus</button>    
    </div>
  );
};
export default FocusInput;
