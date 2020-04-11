import React from 'react';
import ListTask from '../../components/listTask';
import { Container, Content } from 'native-base';
import TasksService from '../../services/tasksServices';

export default class Task extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTasks();

    this.props.navigation.addListener('focus', () => {
      this.getTasks();
    });
  }

  getTasks = () => {
    TasksService.getTasks().then(tasks => {
      this.setState({ tasks });
    });
  };

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
