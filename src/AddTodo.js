import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "" } };
    this.add = props.add;
  }

  onInputChange = (e) => {
    const todoItem = this.state.item;
    todoItem.title = e.target.value;
    this.setState({ item: todoItem });
  };

  onButtonClick = () => {
    const { item } = this.state;
    const isValid = item.title.trim() !== "";
    if (isValid) {
      this.add(item);
      this.setState({ item: { title: "" } });
    }
  };

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.onButtonClick();
    }
  };

  render() {
    return (
      <Form>
        <Row className="justify-content-center">
          <Col className="col-4">
            <Row>
              <Col className="col">
                <Form.Control
                  className="mb-2"
                  id="todoInput"
                  placeholder="할일 입력..."
                  onKeyDown={this.enterKeyEventHandler}
                  onChange={this.onInputChange}
                  value={this.state.item.title}
                />
              </Col>
              <Col xs="auto">
                <Button className="mb-2" onClick={this.onButtonClick}>
                  등록
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AddTodo;
