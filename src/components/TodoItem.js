import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
        
                <li className="list-group-item text-capitalized d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} className="icon"/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} className="icon"/>
                    </span>
                </div>
                </li>
            
        );
    }
}
