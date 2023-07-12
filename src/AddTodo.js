import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "" } };
  }
  render() {
    return (
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              className="mb-2"
              id="todoInput"
              placeholder="할일 입력..."
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              등록
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AddTodo;
