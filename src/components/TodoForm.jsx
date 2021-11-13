import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const TodoForm= ({saveTodo, setTask, task}) => {

    return (
        <Container>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={saveTodo} >
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
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
            </Container>
        </Container>
    );
};

export default TodoForm;