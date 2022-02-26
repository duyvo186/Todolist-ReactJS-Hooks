import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value 
        :'');


    const inputRef = useRef(null)

    useEffect(()=> {

        inputRef.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value);
    }
   const handleSubmit = e => {
       e.preventDefault();

       props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
       });
          
      
       setInput('');
   };
  return (
    
      <form className="todo-form" onSubmit={handleSubmit} >
          {
              props.edit ? ( <>
              <input type='text' placeholder='Sua viec can lam' value={input}
                name='text' className= 'todo-input' onChange={handleChange}
                ref={inputRef}
                />
                          <button class="todo-button edit">Sua</button>
              </>
                ) : 
                          (
<>
                            <input type='text' placeholder='Thêm việc cần làm' value={input}
                name='text' className= 'todo-input' onChange={handleChange}
                ref={inputRef}
                />
                          <button class="todo-button">Thêm Việc Cần Làm</button></>
                          )
              
          }

    </form>

  )
}

export default TodoForm;