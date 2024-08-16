import React from "react";

import TaskItem from "./Item";

const TaskList = ({ tasksList }) => {
  return (
    <>
      {tasksList.map((task, index) => (
        <TaskItem key={task.id} index={index} task={task} />
      ))}
    </>
  );
};

export default TaskList;
