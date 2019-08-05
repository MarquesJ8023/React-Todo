import React from 'react';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
      super(props);
      this.state = {
        toDo: [{
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
    
      };
      handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
      };

      handleNewToDo = e => {
        e.preventDefault();
        this.setState({
          todo: [...this.state.toDo,
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
          
        })
      }
    }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
