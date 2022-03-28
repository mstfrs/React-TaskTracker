import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaRegTrashAlt
          style={{ color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
