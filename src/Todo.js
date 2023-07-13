import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, editable: false };
    this.delete = props.delete;
    this.update = props.update;
  }

  deleteEventHandler = () => {
    this.delete(this.state.item);
  };

  onEditable = () => {
    this.setState({ editable: true });
  };

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({ editable: false });
      this.update(this.state.item);
    }
  };

  onInputChange = (e) => {
    const todoItem = this.state.item;
    todoItem.title = e.target.value;
    this.setState({ item: todoItem });
  };

  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.done = !thisItem.done;
    this.setState({ item: thisItem });
    this.update(this.state.item);
  };

  render() {
    const { item, editable } = this.state;
    return (
      <Form>
        <Row>
          <Col className="Todo">
            {!editable ? (
              <Form.Check
                type="checkbox"
                id={item.id}
                name={item.id}
                checked={item.done}
                label={item.title}
                onChange={this.checkboxEventHandler}
              />
            ) : (
              <Form.Control
                type="text"
                value={this.state.item.title}
                onChange={this.onInputChange}
                onKeyDown={this.enterKeyEventHandler}
              />
            )}
          </Col>
          <Col className="col-auto">
            <Button variant="white" onClick={this.onEditable}>
              <i className="bi bi-pencil"></i>
            </Button>

            <Button variant="white" onClick={this.deleteEventHandler}>
              <i className="bi bi-x-circle"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Todo;
