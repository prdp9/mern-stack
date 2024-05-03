import React, { useState, useEffect } from "react";
import Loading from "./loading";

const Todos = () => {
	
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h2>{todo.completed ? "completed" : "remaining"}</h2>
          <h2>{todo.userId}</h2>
        </div>
      ))}

      <button onClick={fetchTodos}>Fetch Todos</button>
    </div>
  );
};

export default Todos;
