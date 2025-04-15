import { Component } from 'react';
import './serch-panel.css';

class SerchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
    }

    onUpdateSerch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSerch(term);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                placeholder="Serch emploee"
                value={this.state.term}
                onChange={this.onUpdateSerch} />
        )
    }
}

export default SerchPanel;