import React, { memo, useState, useRef, useEffect} from 'react';
import Card from './Card';
import styles from './Todolist.module.css'
export default memo(function Todolist(){
const[count,setCount]=useState(0);
const addButtonHandler=()=>{
    
}
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState('');

  const inputHandler = (event) => {
    setInputState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    setTodoList([...todoList, inputState]);
    setInputState('');
    setCount((prevcount)=>(prevcount+1));
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Add New' onChange={inputHandler} value={inputState} className={styles.inputtype} />
        
            
        <input type='submit' value='Submit' />
        
      </form>
      <div>
    
      <p>{`${count} item left`}</p>
      </div>
   <Card todo={todoList}/>
    </div>
  );
});
