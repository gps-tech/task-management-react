import "./styles/App.scss";
import StatusLine from "./components/StatusLine";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("using effect");
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        description: "",
        urgency: "",
        status: status,
      },
    ]);
  }

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });

    let newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);

    saveTasksToLocalStorage(newTaskList);
  }

  function deleteTask(taskId) {}

  function moveTask(id, newStatus) {}

  function saveTasksToLocalStorage(tasks) {}

  function loadTasksFromLocalStorage() {}

  return (
    <div className="App">
      <h1>Task Management</h1>
      <main>
        <section>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />

          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />

          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
