import React, { useState } from "react";

function NewTodoForm(props) {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
        else {
            alert('description and assigned should not be empty!!!');
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-0">
                    <label className="form-label">Total :    {props.total}</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={event => setAssigned(event.target.value)}
                        value={assigned}
                        required>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                        required>
                    </textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={submitTodo}>
                    Add Todo
                </button>
            </form>

        </div>
    )

}

export default NewTodoForm