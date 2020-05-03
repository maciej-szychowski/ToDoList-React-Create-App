import React from 'react';
import Task from './Task';
import '../style/TaskList.css';

const TaskList = (props) => {
    const toDo = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active); 
    const doneTask = done.map(task => <Task key={task.id} task={task} del={props.del}/>);
    const toDoTask = toDo.map(task => <Task key={task.id} task={task} done={props.done} del={props.del}/>);

        return(
            <section>
                <div className="toDo-task">
                    <h2 className="task-title">Tasks to be done </h2>
                    {toDoTask.length > 0 ? toDoTask : <p>You have nothing to do</p>}
                </div>
                {doneTask.length > 0 ? 
                <div className="done-task">
                    <h2 className="task-title">Tasks done</h2>
                    {doneTask}
                </div> : ""}   
            </section>
        )
}

export default TaskList;