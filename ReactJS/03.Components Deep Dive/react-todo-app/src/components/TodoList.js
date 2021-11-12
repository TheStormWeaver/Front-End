import { useState, useEffect } from "react";
import uniqid from "uniqid";
import TodoItem from "./TodoItem";
import { createTodo } from "../services/TodoService";

const API_URL = "http://localhost:3030/jsonstore";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  // best practice is to use the id in the database as a key value, while not using the index or anything else that might change in the future

  useEffect(() => {
    //used to render only once, when the TodoList is initially mounted
    fetch(`${API_URL}/todos`)
      .then((res) => res.json())
      .then((todosResult) => {
        setTodos(Object.values(todosResult));
      });
  }, []);

  const todoInputBlur = (e) => {
    let todo = {
      id: uniqid(),
      text: e.target.value,
      isDone: false,
    };

    createTodo(todo)
      .then((createdTodo) => {
        console.log(createdTodo);
        setTodos((oldTodos) => [...oldTodos, createdTodo]);

        e.target.value = "";
      })
      .catch((err) => {
        console.log(err);
      });

    // we do not change the old state, but rather create a new one, with the old one in mind
  };

  const deleteTodoItemClickHandler = (e, id) => {
    e.stopPropagation(); // this stops the toggleTodoItemClickHandler from starting after the OnDelete function is called
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoItemClickHandler = (id) => {
    setTodos((oldTodos) => {
      let newTodos = oldTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }

        return todo;
      });

      return newTodos;
    });

    /*
      let selectedTodo = oldTodos.find((x) => x.id === id);
      let selectedIndex = oldTodos.findIndex((x) => x.id === id);
      let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };

      return [
        ...oldTodos.slice(0, selectedIndex),
        toggledTodo,
        ...oldTodos.slice(selectedIndex + 1),
      ];
      */

    /*
    let currentTodo;
    let currentIndex;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        currentTodo = todos[i];
        currentIndex = i;

        break;
      }
    }

    let toggledTodo = { ...currentTodo, isDone: !currentTodo.isDone };
    setTodos(oldTodos => [
      ...oldTodos.slice(0, currentIndex),
      toggledTodo,
      ...oldTodos.slice(currentIndex + 1)
    ])
    */
  };

  return (
    <>
      <label htmlFor="todo-name">Add Todo</label>
      <input type="text" id="todo-name" onBlur={todoInputBlur} name="todo" />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClick={toggleTodoItemClickHandler}
            onDelete={deleteTodoItemClickHandler}
          />
        ))}
      </ul>
    </>
  );
}
