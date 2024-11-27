import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
      <table border="2" style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
        <thead>
          <tr>
            <th className="title">ID</th>
            <th className="title">Task</th>
            <th className="title">Completed</th>
            <th className="title">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={task.id}>
                <td className="des">{index + 1}</td>
                <td className="des"
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </td>
                <td className="des">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                </td>
                <td >
                  <button className="die" onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="title" colSpan="4" style={{ textAlign: "center" }}>
                No tasks added yet!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default TaskList;