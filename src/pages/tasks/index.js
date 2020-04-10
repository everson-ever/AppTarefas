import React from 'react';
import ListTask from '../../components/listTask';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import TasksService from '../../services/tasksServices';

export default class Task extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    TasksService.getTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <ListTask tasks={this.state.tasks} />
        </Content>
      </Container>
    );
  }
}
