impprt React from 'react';

const TodoForm = props => (
    <div>
        <form onSubmit={props.handleNewToDo}>
            <input
                type='text'
                thing='...todo'
                onChange={props.handleInputChange}
                />
                <button className='add' type='submit' onClick={props.handleNewToDo}>
                    add
                </button>
                <button className='clear' onClick={props.removeCompleted}>
                    Clear
                </button>

        </form>
    </div>
);
export default TodoForm;