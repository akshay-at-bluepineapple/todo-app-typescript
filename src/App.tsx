import React from "react";
import "./App.css";
import InputFiedls from "./components/InputFields";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]); //this is array of Todo

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">To-Do Application</span>
      <InputFiedls todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
