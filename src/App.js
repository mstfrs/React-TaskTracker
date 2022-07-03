import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";

  //******Create Read Update Delete  (CRUD)  *******

  //*Read (FETCH)
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const res = await fetch(baseUrl);
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchTasks();
  // }, []);

  //*Read Tasks axios (CRUD)
  const fetchTasks = async () => {
    // const res = await axios.get(baseUrl);
    //console.log(res);
    const { data } = await axios.get(baseUrl);
    console.log(data);
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  //*Add Tasks (CRUD) with Fetch

  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   fetchTasks();
  // };

  //*Add Tasks (CRUD) wit axios

  const addTask = async (newTask) => {
    const res = await axios.post(baseUrl, newTask);
    fetchTasks();
  };

  //*Delete Tasks (CRUD) with Fetch

  // const deleteTask = async (deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method: "DELETE",
  //   });
  //   fetchTasks();
  // };

  //*Delete Tasks (CRUD) with axios

  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);

    fetchTasks();
  };

  //*Toggle Done (CRUD) with Fetch */

  // const toggleDone = async (toggleDoneId) => {
  //   const res = await fetch(`${baseUrl}/${toggleDoneId}`);
  //   const data = await res.json();
  //   const updatedTask = { ...data, isDone: !data.isDone };
  //   console.log(updatedTask);
  //   await fetch(`${baseUrl}/${toggleDoneId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });
  //   fetchTasks();
  // };

  //*Toggle Done (CRUD) with axios */

  const toggleDone = async (toggleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);

    const updatedTask = { ...data, isDone: !data.isDone };
    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    fetchTasks();
  };
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // ADD TASK
  // const addTask = (newTask) => {
  //   // console.log("Add Task From App.js");
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };

  // DELETE TASK
  // const deleteTask = (deletedTaskId) => {
  //   // console.log("delete", deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  //TOGGLE DONE
  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  // SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  // DELETE ALL TASKS
  // TO DO FOR YOU

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
}

export default App;
