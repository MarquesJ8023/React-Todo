// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const List = props => (
    <div className='list'>
        <h1>Todo List</h1>
        <ol>
            {props.toDo.map(item => (
                <Todo
                    id={item.id}
                    task={item.task}
                    handleCompleted={props.handleCompleted}
                    >
                    </Todo>
            ))}
        </ol>
    </div>
);
export default List;
