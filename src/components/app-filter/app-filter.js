import { Component } from 'react';
import './app-filter.css'

const initState = {
    id: "allEmploee",
    increasedList: ""
}
class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    onChangeActiveBtn = (e) => {

        const newId = e.target.id;
        this.setState({ ...initState, id: newId });
    }

    filterAll = () => {
        this.props.filterAll()
    }

    filterUp = () => {
        const { data } = this.props;
        const increasedList = data.filter((elem) => elem.increase);
        this.props.filterUp(increasedList);
    }

    filterOver = () => {
        const { data } = this.props;
        const overTaus = data.filter((elem) => elem.salary > 1000);
        this.props.filterOver(overTaus)
    }



    render() {

        return (
            <div className="btn-group">
                <button
                    className={`btn ${this.state.id === "allEmploee" ? "btn-light" : "btn-outline-light"}`}
                    type="button"
                    id="allEmploee"
                    onClick={(e) => {
                        this.onChangeActiveBtn(e);
                        this.filterAll()
                    }}>
                    All emploee
                </button>
                <button
                    className={`btn ${this.state.id === "salaryUp" ? "btn-light" : "btn-outline-light"}`}
                    type="button"
                    id="salaryUp"
                    onClick={(e) => {
                        this.onChangeActiveBtn(e);
                        this.filterUp()
                    }}>
                    Salary Up
                </button>
                <button
                    className={`btn ${this.state.id === "salaryOver" ? "btn-light" : "btn-outline-light"}`}
                    type="button"
                    id="salaryOver"
                    onClick={(e) => {
                        this.onChangeActiveBtn(e);
                        this.filterOver()
                    }}>
                    Salary over 1000$
                </button>

            </div>
        )

    }
}

export default AppFilter;