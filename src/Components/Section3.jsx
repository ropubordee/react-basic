import React, { useState } from 'react'
import useStore from '../Store/pubordeeStore'

const Section3 = () => {
    const [text,setText] = useState('')
    const arr1 = useStore((state)=>(state.arr1))
    const addTodo = useStore((state)=> state.addTodo)
    const delTodo = useStore((state)=> state.delTodo)

    const handleAddTodo = ()=>{
        addTodo(text)
    }
    const handleChange =(e)=>{
       setText(e.target.value);
        
    }
    const handleDelTodo = (id)=>{
        delTodo(id);
        
    }
  return (
    <div>
      Todo {arr1.length}
      <input type="text" onChange={handleChange} />
      <p>
        <button onClick={handleAddTodo}>Add</button>
      </p>
      {
        arr1.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>handleDelTodo(index)}>Del</button>
            </li>
        ))
      }
    </div>
  )
}

export default Section3
