import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Charts from './components/charts';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
       const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
       setTodos([todo, ...todos]);
    console.log(todo," adding list in add todo");
  }
  
  const toggleComplete= (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const toggleStatus = (id, status) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: status,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <div>
      <Typography style={{ padding: 16 }} variant="h1">
        To do list
        <charts/>
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        toggleStatus={toggleStatus}
        />
        </div>
        <div>
        <Charts todos={todos}/>
        </div>
    </div>
  );
}



export default App;
