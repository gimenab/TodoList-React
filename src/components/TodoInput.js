import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';



export default class TodoInput extends Component {
    render(){
        const {item, handleChange, handleSubmit, editItem} = this.props
        return <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepered">
                            <div className="input-group-text bg-primary text-white"> 
                                <FontAwesomeIcon icon={ faBook } className="icon"/>
                            </div> 
                        </div>
                        <input type="text" 
                        className="form-control" 
                        placeholder="add a todo Item"
                        value = {item}
                        onChange= {handleChange}
                        />
                    </div>
                    <button type="submit" 
                        className={
                            editItem ?
                                "btn btn-block btn-success mt-3":
                                "btn btn-block btn-primary mt-3"
                        }
                    >
                        {editItem?'edit item': "add item"}
                    </button>
                </form>
            </div>

    }

}