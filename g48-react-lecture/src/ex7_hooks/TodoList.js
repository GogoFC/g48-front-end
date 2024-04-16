import React, { useEffect, useState } from "react";

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    // Data fetch From API
    // next week we will do it using axios js library

    /*
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json()).then(data => {
        //Updating State
        setTodos(data);
    })*/

    const apiResonseData = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ]; 

    setTodos(apiResonseData);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Todo List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {

            const trElement = (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger mx-1">Delete</button>
                </td>
              </tr>
            );

            return trElement;

          })}
          
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
