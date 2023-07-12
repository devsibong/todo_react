import React from "react";
import { Form } from "react-bootstrap";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };
  }
  render() {
    return (
      <Form>
        <div className="Todo">
          <Form.Check
            type="checkbox"
            id={this.state.item.id}
            name={this.state.item.id}
            checked={this.state.item.done}
            label={this.state.item.title}
          />
        </div>
      </Form>
    );
  }
}

export default Todo;
