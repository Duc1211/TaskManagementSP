import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TaskButton from "./Button";

import { TasksContext } from "../../context/TaskContext";
import { deleteTask, updateStatus } from "../../actions/tasks";

const TaskItem = ({ task, index }) => {
  const { dispatchTasks, onEditTask, state } = useContext(TasksContext);

  const handleDeleteTask = () => {
    dispatchTasks(deleteTask(task.id));
  };

  const handleUpdateStatus = () => {
    dispatchTasks(updateStatus(task.id));
  };

  const handleEditTask = () => {
    onEditTask(task);
  };

  return (
    <tr>
      <td>{++index}</td>
      <td>{task.task}</td>
      <td className="text-center">
        {task.status ? (
          <TaskButton
            variant="danger"
            isEdit={state.isEdit}
            onClick={handleUpdateStatus}
          >
            Kích Hoạt
          </TaskButton>
        ) : (
          <TaskButton
            variant="success"
            isEdit={state.isEdit}
            onClick={handleUpdateStatus}
          >
            Ẩn
          </TaskButton>
        )}
      </td>
      <td className="text-center">
        <TaskButton variant="warning" onClick={handleEditTask} size="md">
          <FontAwesomeIcon icon="pencil-alt" /> Sửa
        </TaskButton>
        &nbsp;
        <TaskButton variant="danger" onClick={handleDeleteTask} size="md">
          <FontAwesomeIcon icon={["far", "trash-alt"]} /> Xóa
        </TaskButton>
      </td>
    </tr>
  );
};

export default TaskItem;
