import React from "react";
import {} from "react-bootstrap";
import DoneButton from "./DoneButton";

const Todo = ({todo, markDone}) => {
    const doneClick = async (event) => {
        event.preventDefault();
        if (window.confirm(`Mark task ${todo.task} done?`)) {
            markDone(todo.id);
        }
    };


    return (
        <>
            <td>
                {todo.task}
            </td>
            <td>
                {todo.id}
            </td>
            <td>
                <DoneButton doneClick={doneClick} />
            </td>
        </>
    );
};

export default Todo;