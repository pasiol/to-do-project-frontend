import React from "react";
import {} from "react-bootstrap";

const Todo = ({todo}) => {
    return (
        <td width="100%">
            {todo.task}
        </td>
    );
};

export default Todo;