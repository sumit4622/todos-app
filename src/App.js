// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Hearder';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import TodoItm from './MyComponents/TodoItm.js';
import  AddTodo from './MyComponents/AddTodo.js'

import React, { useState } from 'react';



function App() {

  const onDelete = (todo) =>{
    console.log(`this is Deleted.`, todo)

    setTodos(todos.filter((e) => {
      return e!==todo;
    }))

  }

  const handleAddTodo = (title, desc) => { // Define handleAddTodo *before* using it
    const newTodo = {
        sno: todos.length + 1,
        title: title,
        Des: desc,
    };

    setTodos([...todos, newTodo]);
};

  const [todos, setTodos] = useState( [
    {
      sno: 1,
      title: "Going to the market after school.",
      Des: "I have to purchase the tea pouder0."
    },

    {
      sno: 2,
      title: "Going to the market after mall.",
      Des: "I have to purchase the tea pouder1."
    },

    {
      sno: 3,
      title: "Going to the market after pool.",
      Des: "I have to purchase the tea pouder3."
    }
  ]);
  return (
    <>
      <Header tittle = "My Todo lists" home="vak ghar ho yo" />
      <AddTodo onAddTodo = {handleAddTodo}/>
      <Todos todos = {todos} onDelete = {onDelete} />
      <Footer />
      
      

    </>
  );
}

export default App;
