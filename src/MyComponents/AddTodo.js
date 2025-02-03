import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState(""); // Corrected typo here: setDesc

    const submit = (e) => { // Added event parameter 'e'
        e.preventDefault(); // Prevent form submission from reloading the page
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return; // Stop further execution if fields are empty
        }

        props.onAddTodo(title, desc); // Call the parent's addTodo function
        setTitle(""); // Clear input fields
        setDesc("");
    };

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}> {/* Corrected: onSubmit handler */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"> {/* Corrected: htmlFor */}
                        Todo Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                        value={title} // Added: value prop for controlled component
                        onChange={(e) => setTitle(e.target.value)} // Added: onChange handler
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"> {/* Corrected: htmlFor */}
                        Todo Description
                    </label>
                    <input
                        type="text" // Corrected: type="text"
                        className="form-control"
                        id="desc"
                        value={desc} // Added: value prop for controlled component
                        onChange={(e) => setDesc(e.target.value)} // Added: onChange handler
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success"> {/* Corrected: type="submit" */}
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;