import React from 'react';

const Todo = props => (
        <li
            key={props.id}
            id={props.id}
            onClick={() => props.handleCompleted(props.id)}
            className={props.style}
            style={props.strikethrough}
        >
            {props.task}
        </li>

);
export default Todo;
