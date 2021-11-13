import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import todoService from "./services/todos";
import {Container, Row, Col} from "react-bootstrap";
import DailyImage from "./components/DailyImage";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    useEffect(()=> {
        todoService.getTodos().then((response) => {
            if (Array.isArray(response)) {
                setTodos(response);
            } else {
                setTodos([]);
            }
        }).catch(error =>{
            console.log("useEffect error: ", error.response.data);
        });
    }, []);

    const saveTodo = async (event) => {
        event.preventDefault();
        if (task !== "") {
            try {
                await todoService.postTodo(task);
                //setTodos(todos.concat(todoObject));
                const updatedTodoList = await todoService.getTodos();
                setTodos(updatedTodoList);
                setTask("");
            } catch (error) {
                console.log("saving todo failed: ", error.data);
            }
        }
    };

    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row className=".px-2,b-2" >
                <Col>
                    <TodoForm saveTodo={saveTodo} setTask={setTask} task={task}/>
                </Col>
                <Col>
                    <DailyImage />
                </Col>
            </Row>
            <Row>
                <TodoList todoList={todos} />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
};

export default App;
