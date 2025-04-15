import './employees-list-item.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += " increase"
    }
    if (rise) {
        classNames += " like"
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="bi bi-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="bi bi-trash"></i>
                </button>
                <i className="bi bi-star-fill"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;