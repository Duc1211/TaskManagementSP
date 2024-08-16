import React from "react";
import { Row, Col } from "react-bootstrap";

import Search from "./Search";
import Sort from "./Sort";

const TaskControl = () => {
  return (
    <Row>
      <Col xl="6" sm="6" md="6" lg="6">
        <Search />
      </Col>
      <Col xl="6" sm="6" md="6" lg="6">
        <Sort />
      </Col>
    </Row>
  );
};

export default TaskControl;
