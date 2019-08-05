import React from 'react';

const TodoForm = props => (
    
        <form onSubmit={props.handleNewToDo}>
            <input
                type='text'
                placeholder='...todo'
                onChange={props.handleInputChange}
                />
                <button className='add' type='submit' onClick={props.handleNewToDo}>
                    Add
                </button>
                <button className='clear' onClick={props.removeCompleted}>
                    Clear
                </button>

        </form>
    
);
export default TodoForm;