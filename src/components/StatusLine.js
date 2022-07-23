import React from "react";
import "../styles/statusLine.scss";
import Task from "./Task";

function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

  // accepting the whole list of tasks and filtering for those that belong to this specific status line
  let taskList, tasksForStatus;

  // generate a task that has all of its field empty.
  function handleAddEmpty() {
    addEmptyTask(status);
  }

  // we are only getting tasks related to this status line
  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  // generate tasks
  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          moveTask={(id, status) => moveTask(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button onClick={handleAddEmpty} className="button addTask">
        +
      </button>
    </div>
  );
}

export default StatusLine;
