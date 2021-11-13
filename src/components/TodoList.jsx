import React from "react";
import {Container, Row} from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({todoList}) => {
    if (todoList!==null) {
        return (
            <Container>
                {todoList.map((t, id) => (
                    <Row key={id}>
                        <Todo id={id} todo={t}/>
                    </Row>
                ))}
            </Container>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

export default TodoList;