import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const TodoForm= ({saveTodo, setTask, task}) => {

    return (


        <Row>
            <Col>
                <Form onSubmit={saveTodo} >
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="4">
                            TODO
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={task} onChange={({ target }) => setTask(target.value)}as="textarea" rows={2} placeholder="to do something important and meaningful..."  maxLength="140"/>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>


    );
};

export default TodoForm;