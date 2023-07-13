import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) => {
      console.log(response);
      this.setState({ items: response.data });
    });
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  update = (item) => {
    call("/todo", "PUT", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  render() {
    const todoItems =
      this.state.items.length > 0 &&
      this.state.items.map((item, idx) => (
        <Todo
          item={item}
          key={item.id}
          delete={this.delete}
          update={this.update}
        />
      ));
    return (
      <Container>
        <Row className="justify-content-center">
          <AddTodo add={this.add} />
          <Col className="col-4">
            <Row>
              <div className="App justify-content-center">{todoItems}</div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
