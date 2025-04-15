import './app-info.css';

const AppInfo = (props) => {
    const {amount, increased} = props;

    return (
        <div className="app-info">
            <h1>{"Employee accounting"}</h1>
            <h2>{`Total number of employees: ${amount}`}</h2>
            <h2>{`Benefits will be received: ${increased}`}</h2>

        </div>
    )
}

export default AppInfo