import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";
import { addTask } from "../../../actions/tasks";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const { dispatchTasks } = useContext(TasksContext);

  const handleSubmit = e => {
    if (task) {
      e.preventDefault();
      dispatchTasks(addTask(task, status));
      setTask("");
      setStatus(false);
    }
  };

  const handleReset = () => {
    setTask("");
    setStatus(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Tên :</Form.Label>
        <Form.Control
          type="text"
          required
          value={task}
          onChange={e => setTask(e.target.value)}
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

export default AddTaskForm;
