import React from 'react';
import List from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
      super(props);
      this.state = {
        toDo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
        }
    ],
    toDoStyle: 'toDo',
    strikethrough: {textDecoration: 'line-through'}
      };
    }
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
      };

      handleNewToDo = e => {
        e.preventDefault();
        this.setState({
          toDo: [
            ...this.state.toDo,
          {
            task: this.state[e.target.name],
            id: Date.now(),
            completed: false
          }
        ]
        
        });
      };
      handleCompleted = id => {
        this.setState({
          toDo: this.state.toDo.map(item => {
            if(item.id === id) {
              item.completed = !item.completed;
              return item;
            } else {
              return item;
            }
          })
        });
      };

      removeCompleted = e => {
        e.preventDefault();
        this.setState({
          toDo: this.state.toDo.filter(toDo => (!toDo.completed ? toDo: null))
        });
      };
    
  render() {
    return (
      <div className='container'>
        <List
          toDo={this.state.toDo}
          handleCompleted={this.handleCompleted}
          strikethrough={this.state.strikethrough}
          />
          <TodoForm
          handleNewToDo={this.handleNewToDo}
          handleInputChange={this.handleInputChange}
          removeCompleted={this.removeCompleted}
          />
      </div>
    );
  }
}
export default App
