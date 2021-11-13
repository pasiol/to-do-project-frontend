import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import todoService from "./services/todos";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    useEffect(()=> {
        console.log("environment: ", process.env.REACT_APP_API_URL);
        todoService.getTodos().then((response) => {
            if ((Array.isArray(response)) && response.statusCode===200){
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
        try {
            await todoService.postTodo(task);
            //setTodos(todos.concat(todoObject));
            const updatedTodoList = await todoService.getTodos();
            setTodos(updatedTodoList);
            setTask("");
        } catch (error) {
            console.log("saving todo failed: ", error.data);
        }
    };

    return (
        <>
            <Header />
            <TodoForm saveTodo={saveTodo} setTask={setTask} task={task}/>
            <TodoList todoList={todos} />
            <Footer />
        </>
    );
};

export default App;
