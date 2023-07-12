import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: "0", title: "todo1", done: true },
        { id: "1", title: "todo1", done: true },
      ],
    };
  }

  render() {
    const todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ));
    return (
      <Container>
        <Row>
          <AddTodo />
          <Col xs="auto">
            <Row>
              <div className="App">{todoItems}</div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
