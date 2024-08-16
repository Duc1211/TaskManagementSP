import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

import TaskList from "./List";

const TaskTable = ({ tasksList }) => {
  const [status, setStatus] = useState("all");
  const [value, setValue] = useState("");

  let filteredTask = tasksList;

  if (value) {
    filteredTask = filteredTask.filter(task => {
      return task.task.toLowerCase().includes(value.toLowerCase());
    });
  }
  filteredTask = filteredTask.filter(task => {
    if (status === "all") {
      return true;
    }
    if (status === "active" && task.status) {
      return true;
    }
    if (status === "hide" && !task.status) {
      return true;
    }
    return false;
  });

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="form-control"
            />
          </td>
          <td>
            <Form.Group>
              <Form.Control
                as="select"
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option value="all">Tất Cả</option>
                <option value="active">Kích Hoạt</option>
                <option value="hide">Ẩn</option>
              </Form.Control>
            </Form.Group>
          </td>
          <td></td>
        </tr>
        <TaskList tasksList={filteredTask} />
      </tbody>
    </Table>
  );
};

export default TaskTable;
