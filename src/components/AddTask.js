import React, {Component} from 'react';
import '../style/AddTask.css'

class AddTask extends Component {
    constructor(props) {
        super(props)
        const actualDate = new Date();
        const year = actualDate.getFullYear();
        const month = actualDate.getMonth() < 10 ? "0" + (actualDate.getMonth()+1) : actualDate.getMonth()+1;
        const day = actualDate.getDate() < 10 ? "0" + actualDate.getDate() : actualDate.getDate();
        this.minDate = `${year}-${month}-${day}`;
        this.add = props.add;

        this.state = {
            text: "",
            important: false,
            date: ""
        }
    }
    
   
    handleChangeInput = (e) => {
        const name = e.target.name;
        if(name === "text" || name === "date") {
            this.setState({
                [name] : e.target.value
            })
        } else {
            this.setState({
                [name]: e.target.checked
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.text.length > 0 && this.state.date) {
            this.add(this.state)
        }
        this.setState({
            text: "",
            important: false,
            date: ""
        })
    }

    render(){
        return(
            <section className="addTask-section">
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <label>Your Task</label>
                    <input type="text" className="task-input" name="text" value={this.state.text} onChange={this.handleChangeInput} placeholder="task..."/>
                    <label>End date</label>
                    <input type="date" className="date-input" name="date" value={this.state.date} onChange={this.handleChangeInput} min={this.minDate}/>
                    <label>Important <input type="checkbox" name="important" checked={this.state.important} onChange={this.handleChangeInput}/></label>
                    <button className="addTask-btn">Add Task</button>
                </form>
            </section>
        )
    }
}

export default AddTask;