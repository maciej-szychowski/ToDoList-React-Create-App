import React from 'react';
import '../style/Task.css';

const Task = (props) => {
    const {id, text, active, important, date} = props.task;
    const {done, del} = props;
    const style = {
        color: "red"
    };
    if(active) {
        return(
            <div className="task-item">
                <h3 style={important ? style : {}}>{text}</h3>
                <span>{date}</span>
                <button className="done-btn" onClick={()=>done(id)}>Done</button>
                <button className="del-btn" onClick={()=>del(id)}>X</button>
            </div>
        )
    } else {
        return(
            <div className="task-item">
                <h3>{text}</h3>
                <button className="del-btn" onClick={()=>del(id)}>X</button>
            </div>  
        )
    }
    
}

export default Task;