import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";
import { editTask, closeForm } from "../../../actions/tasks";

const EditTaskForm = () => {
  const { dispatchTasks,currentTask } = useContext(TasksContext);
  const [tasks, setTasks] = useState(currentTask.task);
  const [status, setStatus] = useState(currentTask.status);

  const handleSubmit = e => {
    if (tasks) {
      e.preventDefault();
      const editTasks = {
        task: tasks,
        status: status,
        id: currentTask.id
      };
      dispatchTasks(editTask(editTasks));
      //   dispatchTasks({ type: "CLOSE_FORM" });
    }
  };

  useEffect(() => {
    setTasks(currentTask.task);
    setStatus(currentTask.status);
  }, [currentTask.status, currentTask.task]);

  const handleReset = () => {
    setTasks(currentTask.task);
    setStatus(currentTask.status);
    dispatchTasks(closeForm());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Tên :</Form.Label>
        <Form.Control
          type="text"
          required
          value={tasks}
          onChange={e => setTasks(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Trạng Thái :</Form.Label>
        <Form.Control
          as="select"
          required
          value={status}
          onChange={e => setStatus(JSON.parse(e.target.value))}
        >
          <option value="true">Kích Hoạt</option>
          <option value="false">Ẩn</option>
        </Form.Control>
      </Form.Group>
      <br />
      <div className="text-center">
        <Button type="submit" variant="warning">
          <FontAwesomeIcon icon="plus" /> Lưu lại
        </Button>
        &nbsp;
        <Button type="submit" variant="danger" onClick={handleReset}>
          <FontAwesomeIcon icon="times" /> Hủy Bỏ
        </Button>
      </div>
    </Form>
  );
};

export default EditTaskForm;
