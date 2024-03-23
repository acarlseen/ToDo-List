import React, {useRef, useState} from 'react'
import {v4 as uuid4} from 'uuid';
import TodoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const addRef = useRef();
  // is a shortcut for the below:       check if it is always in list notation on the left
  // const [todos] = useState([])
  // const [setTodos] = useState([])
  
  function addTodo(event) {
    const taskName = addRef.current.value;
    // this allows us to parse the data our useRef vrings back - whatever
    // the current value of the ref is, we can save to a variable, taskName
    if (taskName) {
      setItemsRemaining(itemsRemaining+1);
      console.log(taskName);
      setTodos( oldTodos => {
        return [...oldTodos, {id: uuid4(), name:taskName, isComplete: false}];
      });
      addRef.current.value = null;
    } else {
      return null;
    }
  }

  function clearList(event) {
    const emptyList = [];
    setTodos(emptyList);
    setItemsRemaining(0)
  }
  function checkBox(id){
    const newStuff = [...todos];
    const todo = newStuff.find(specificItem => specificItem.id === id);
    todo.isComplete = !todo.isComplete;
    if (todo.isComplete){
      setItemsRemaining(itemsRemaining-1);
    } else {
      setItemsRemaining(itemsRemaining + 1);
    }
    console.log(`item: ${todo.name}, isComplete: ${todo.isComplete}`)
    setTodos(newStuff);
  }

  // function countItemsRemaining(){
  //   setItemsRemaining(todos.reduce((acc, curr) => curr ? acc++ : acc, 0))
  //   //console.log(todos.reduce((acc, curr) => !curr.isComplete ? acc++ : acc, 0))
  //   // I like the idea of this function, but no idea how to get todos to refresh
  //   // state before encountering 'reduce'
  // }

  return (
    // These empty tags are 'fragments,' they make these multiple items one.
    //this matches the 'import' not the 'from' // Also it MUST start uppercase. This is how
    // React differentiates between a regular HTML tag and an imported component
    <>
      <TodoList todos={todos} checkBox={checkBox} />
      <input ref={addRef} type="text" />
      <button onClick={addTodo} >Add Item</button>
      <button onClick={clearList}>Clear All</button>
      <div>Left to do: { itemsRemaining }</div>
    </>
  );
}

export default App;