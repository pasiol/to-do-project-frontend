import axios from "axios";

const url = process.env.REACT_APP_API_URL+"/todos";

const getTodos = () => {
    console.log(url);
    const request = axios.get(url);
    return request.then((response) => response.data);
};
const getAsyncTodos = async () => {
    const response = await axios.get(url);
    return response.data;
};


const postTodo = async (task) => {
    console.log("post task:", task);
    const response = await axios.post(url, {"task": task});
    return response.data;
};

export default {getTodos, postTodo, getAsyncTodos};

