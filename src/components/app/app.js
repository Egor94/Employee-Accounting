import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SerchPanel from '../serch-panel/serch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/emploees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John A.", salary: 100, increase: true, rise: true, id: 1 },
                { name: "Alex B.", salary: 200, increase: false, rise: false, id: 2 },
                { name: "Max C.", salary: 3000, increase: false, rise: false, id: 3 },
            ],
            term: "",
            increasedList: [],
            filteredData: [
                { name: "John A.", salary: 100, increase: true, rise: true, id: 1 },
                { name: "Alex B.", salary: 200, increase: false, rise: false, id: 2 },
                { name: "Max C.", salary: 3000, increase: false, rise: false, id: 3 },

            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ filteredData }) => {
            const newData = filteredData.filter((elem) => elem.id !== id);
            return {
                filteredData: newData
            }

        })
    }

    addEmployee = (user) => {
        if (user.name.length < 3 || user.salary <= 0) {
            alert("Name must be at least 3 characters and salary must be greater than 0");
            return; // Прерываем выполнение функции
        }
    
        this.setState(({ filteredData }) => ({
            filteredData: filteredData.concat(user)
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({ filteredData }) => ({
            filteredData: filteredData.map(item => {
                if (item.id === id) return { ...item, [prop]: !item[prop] }
                return item
            })
        }))

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) return { ...item, [prop]: !item[prop] }
                return item
            })
        }))

    }


    serchEmp = (items, term) => {
        if (term === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSerch = (term) => {
        this.setState({ term });
        const filteredData = this.serchEmp(this.state.data, term);
        this.setState({ filteredData })
    }

    filterUp = (increasedList) => {
        this.setState({ filteredData: increasedList })
    }

    filterAll = () => {
        this.setState({ filteredData: this.state.data })
    }

    filterOver = (overTaus) => {
        this.setState({ filteredData: overTaus })
    }

    render() {
        console.log(this.state.filteredData);

        const { data, filteredData } = this.state;
        const amount = this.state.data.length;
        const increased = this.state.data.filter((elem) => elem.increase).length;
        return (
            <div className="app">
                <AppInfo
                    amount={amount}
                    increased={increased} />
                <div className="serch-panel">
                    <SerchPanel
                        onUpdateSerch={this.onUpdateSerch} />
                    <AppFilter
                        data={data}
                        filterAll={this.filterAll}
                        filterUp={this.filterUp}
                        filterOver={this.filterOver}

                    />
                </div>

                <EmployeesList
                    data={filteredData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    addEmployee={this.addEmployee} />
            </div>
        );
    }

}

export default App;