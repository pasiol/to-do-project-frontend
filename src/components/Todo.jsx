import React from "react";
import {Card} from "react-bootstrap";

const Todo = ({todo}) => {
    return (
        <Card>
            <Card.Body>{todo.task}</Card.Body>
        </Card>
    );
};

export default Todo;