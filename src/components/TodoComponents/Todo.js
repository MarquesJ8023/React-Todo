import React from 'react';

const Todo = props => (
        <div
            id={props.id}
            onClick={() => props.handleCompleted(props.id)}
            >{props.task}</div>

);
export default Todo;
