import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();
    setTask("");
    setTasks([...tasks, { id: tasks.length, task }]);
  }

  function removetask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo">
      <h2 className="todo--title">Todo List</h2>
      <form onSubmit={addTask} className="todo--group">
        <input
          type="text"
          name="todo"
          value={task}
          placeholder="Add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add">Add</button>
      </form>
      <ul>
        {tasks.map((x) => (
          <li className="list" key={x.id}>
            <p className="list--item">{x.task}</p>
            <button className="remove" onClick={removetask}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
