import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()



  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <div style={{ margin: '18% 28%' }}>
        <input ref={todoNameRef} type="text" placeholder='Create a new todo...' style={{ 'background-color': '#25273C', 'border-radius': '5px', padding: '5px', width: '73%', 'margin-bottom': '10px', fontSize: '25px',color:'#fff' }} />
        <button style={{ "background-color": "green", border: 'none', 'border-radius': '10px', padding: '5px 20px', 'margin-left': '5px' }} onClick={handleAddTodo}><svg width="30" height="20" viewBox="0 0 56 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.8394 2.50969C38.8238 2.79836 41.5346 12.2524 41.3919 16.9433" stroke="white" stroke-width="4" />
          <line x1="0.828796" y1="2.14552" x2="29.9339" y2="2.14552" stroke="white" stroke-width="4" />
          <path d="M39.8439 32.0585C40.6249 32.8523 41.891 32.8729 42.672 32.1046L55.3982 19.5841C56.1791 18.8158 56.1791 17.5495 55.3982 16.7557C54.6172 15.9619 53.3511 15.9413 52.5701 16.7096L41.2579 27.8389L29.9457 16.3408C29.1648 15.547 27.8986 15.5263 27.1177 16.2947C26.3367 17.063 26.3367 18.3293 27.1177 19.1231L39.8439 32.0585ZM39.2582 15.4553L39.2582 30.6347L43.2577 30.6999L43.2577 15.5205L39.2582 15.4553Z" fill="white" />
        </svg>
        </button>
        <div className='main' style={{ padding: '5px', 'background-color': '#25273C', 'border-radius': '5px', width: '85%', color: '#fff', fontSize: '25px' }}>

          <div className='before' style={{ display: 'flex', justifyContent: 'space-between' }}></div><TodoList todos={todos} toggleTodo={toggleTodo} />
          <div style={{ color: '#fff', padding: '5px', 'background-color': '#25273C', display: 'flex', justifyContent: 'space-between',marginTop:'20px' }}>{todos.filter(todo => !todo.complete).length} items</div> <button style={{ 'background-color': '#25273C', border: 'none', padding: '5px', color: '#fff', fontSize: '25px' }} onClick={handleClearTodos}>Clear Complete</button>
        </div>
      </div>
    </>
  )
}

export default App;
