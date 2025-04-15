import { Component } from 'react';

import './employees-add-form.css';

const initState = {
    name: '',
    salary: '',
    increase: false,
    rise: false,
    id: ''
}
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    
    addUser = (e) => {
        const { addEmployee } = this.props;
        e.preventDefault();
        const user = this.state;
        const uniqId = new Date().getMilliseconds();
        addEmployee({ ...user, id: uniqId });
        this.setState(() => initState)
    }

    render() {
        const { name, salary } = this.state;
       
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's his name?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={this.addUser}>Add</button>
                </form>
            </div>
        )

    }
}

export default EmployeesAddForm;