import React, {Component} from 'react';
import '../style/App.css';
import Header from './Header';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: []
  }
clickDoneBtn = (id) => {
  const tasks = [...this.state.tasks];
  tasks.map(task => {
    if(task.id === id) {
      task.active = false;
    }
    return tasks;
  })
  this.setState({tasks});
}

clickDeleteBtn = (id) => {
  let tasks = [...this.state.tasks];
  tasks = tasks.filter(task => task.id !== id);
  this.setState({tasks});
}

addNewTask = (props) => {
  let index = this.state.tasks.length > 0 ? this.state.tasks[this.state.tasks.length - 1].id : 0;
  const id = index + 1;
  const {text, important, date} = props;
  const task = {
    id,
    text,
    important,
    active: true,
    date
  };  
  const tasks = [...this.state.tasks, task];
  this.setState({tasks});
}

  render(){
    
    return (
      <div className="App">
        <Header/>
        <AddTask add={this.addNewTask}/>
        <TaskList tasks={this.state.tasks} done={this.clickDoneBtn} del={this.clickDeleteBtn}/>
      </div>
    );
  }
}

export default App;
