import React from 'react';
import TodoItm from './TodoItm';

const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='bg-blue my-3'>Todos lists</h3>
            {props.todos.length === 0 ? "No todos to dispaly." : ( // Corrected conditional rendering
                props.todos.map((todo) => {
                    return (
                        <TodoItm 
                            todo={todo} 
                            key={todo.serialNumber || todo.sno || Math.random()}  // Improved key handling
                            onDelete={props.onDelete} 
                        />
                    );
                })
            )}
        </div>
    );
}

export default Todos;