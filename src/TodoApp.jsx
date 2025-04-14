import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoApp.css';

export default function TodoApp() {
    let [todos, setTodos] = useState([{task: "sample-task" , id: uuidv4(), completed: false}]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodo) => {
            return [...prevTodo , {task: newTodo , id: uuidv4(), completed: false}]
        });
        setNewTodo("");
    };

    let updateTodoTask = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () =>{
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        ));   
    };

    let lowerCaseAll = () =>{
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toLowerCase(),
                };
            })
        ));   
    };

    let upperCaseAllOne = (id) =>{
        setTodos((todos) => (
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }else{
                    return todo;
                } 
            })
        ));   
    };

    let lowerCaseAllOne = (id) =>{
        setTodos((todos) => (
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toLowerCase(),
                    };
                }else{
                    return todo;
                } 
            })
        ));   
    };

    let toggleCompleted = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <div className="todo-header">
                <h4>Todo App</h4>
            </div>
            <div className="input-container">
                <input 
                    type="text" 
                    value={newTodo} 
                    placeholder="Add a task" 
                    onChange={updateTodoTask}
                    className="todo-input"
                />
                <button onClick={addNewTask} className="add-btn">Add Task</button>
            </div>
            <div className="todo-list">
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <span className="todo-task">{todo.task}</span>
                            <div className="button-group">
                                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                                <button onClick={() => upperCaseAllOne(todo.id)} className="uppercase-btn">UpperCase</button>
                                <button onClick={() => lowerCaseAllOne(todo.id)} className="lowercase-btn">LowerCase</button>
                                <button 
                                    onClick={() => toggleCompleted(todo.id)} 
                                    className={`complete-btn ${todo.completed ? 'completed-btn' : ''}`}
                                >
                                    {todo.completed ? "✔" : "✓"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="action-buttons">
                <button onClick={upperCaseAll} className="uppercase-all-btn">UpperCaseAll</button>
                <button onClick={lowerCaseAll} className="lowercase-all-btn">LowerCaseAll</button>
            </div>
        </div>
    );
}
