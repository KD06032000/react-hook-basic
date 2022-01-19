import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const  App = () => {



  // const name = 'daokieu';
  let [name, setName] = useState('daokieu');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id:'todo1', title:'watching hoi dan it channel' },
    { id:'todo2',title: 'Doing homework' },
    { id:'todo3',title: 'playing game' }
  ]);


  const handleEventClick = (event) => {
    if(!address) {
      alert('emtpy input')
      return;
    }
    
    // hook not merge state
    let newTodo = { id:'abc', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleInput = (event) => {
    setAddress(event.target.value)
    console.log(event.target.value)
  }

  // re-render
  return (
    <div className="App">
      <Nav />

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world width 88 in { name } ! </h1>
        <div className='todos-container'>
          { todos.map(todo => {
            return (
              <li className='todo-child' key={ todo.id }> { todo.title } </li>
            )
          })}
        </div>
        <input type="text" value={ address } onChange = { (event) => handleInput(event) } ></input>
        <button  type='button' onClick={ () => handleEventClick() }>Click me</button> 
        
      </header>
    </div>
  );
}

export default App;
