import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
import YoutubeSearch from './views/YoutubeSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const  App = () => {//class



  // //state
  
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id:'todo1', title:'watching hoi dan it channel', type: 'daokieu' },
    { id:'todo2',title: 'Doing homework', type:'hoidanit' },
    { id:'todo3',title: 'playing game', type:'kaka' }
  ]);




  const handleEventClick = (event) => {
    if(!address) {
      alert('emtpy input')
      return;
    }
    
    // hook not merge state
    let newTodo = { id:'abc', title: address,type:'eric' }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleInput = (event) => {
    setAddress(event.target.value)
    
  }
  const deleteTodo = (id) => {
    let currentTodos =  todos;
    currentTodos  =currentTodos.filter(item => item.id !== id )
    setTodos(currentTodos)

  }

  // re-render
  return (
    <Router>
      <div className="App">
        <Nav />

        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
         
          
        </header>
        <Switch>
          <Route path="/home" exact ={true}>
            
          </Route>
          <Route path="/timer">
            {/* <Users /> */}
          </Route>
          <Route path="/todo">
          <Todo 
            todos = { todos.filter(item => item.type === 'daokieu') }
            title = { 'DK todos' }
            deleteTodo = { deleteTodo }
          /> 
          <input type="text" value={ address } onChange = { (event) => handleInput(event) } ></input>
          <button  type='button' onClick={ () => handleEventClick() }>Click me</button> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
