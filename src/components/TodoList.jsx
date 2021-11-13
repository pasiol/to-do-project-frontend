import React from "react";
import {Table} from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({todoList}) => {
    if (todoList!==null) {
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                {todoList.map((t, id) => (
                    <tr key={id}>
                        <Todo id={id} todo={t}/>
                    </tr>
                ))}
            </Table>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

export default TodoList;