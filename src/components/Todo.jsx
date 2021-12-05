import React from "react";
import {} from "react-bootstrap";

const Todo = ({todo}) => {
    return (
        <>
            <td>
                {todo.task}
            </td>
            <td>
                {todo.id}
            </td>
        </>
    );
};

export default Todo;