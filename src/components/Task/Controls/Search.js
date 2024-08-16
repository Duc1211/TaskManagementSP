import React, { useContext, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";

const TaskSearchControl = () => {
  const { onSearchTask } = useContext(TasksContext);
  const [keyword, setKeyword] = useState("");

  const handleSearchTask = () => {
    onSearchTask(keyword);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Nhập từ khóa..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <InputGroup.Append>
        <Button variant="primary" type="button" onClick={handleSearchTask}>
          <FontAwesomeIcon icon="search" /> Tìm
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default TaskSearchControl;
