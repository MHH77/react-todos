import React, { useState } from "react";

function NewTodoForm() {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const descriptionCahnge = (event) => {
        console.log(event.target.value);
    }

    const assignedCahnge = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={assignedCahnge}
                        required>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        onChange={descriptionCahnge}
                        required>

                    </textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>

        </div>
    )

}

export default NewTodoForm