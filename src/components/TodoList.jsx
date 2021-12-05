import React from "react";
import {Table} from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({todoList, markDone}) => {
    if (todoList!==null) {
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((t, id) => (
                        <tr key={id}>
                            <Todo id={id} todo={t} markDone={markDone}/>
                        </tr>
                    ))}
                </tbody>
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