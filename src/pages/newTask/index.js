import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  DatePicker,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import TasksService from './../../services/tasksServices';

export default class NewTask extends React.Component {
  state = {
    task: null,
    dateStart: null,
    dateEnd: null,
  };

  setStartDate = date => {
    this.setState({ dateStart: date.toLocaleDateString() });
  };

  setEndDate = date => {
    this.setState({ dateEnd: date.toLocaleDateString() });
  };

  invalidDate = () => {
    return this.state.dateStart > this.state.dateEnd;
  };

  createTask = async () => {
    await TasksService.save(this.state);
  };

  render() {
    return (
      <Container
        style={{
          paddingTop: 35,
          paddingHorizontal: 5,
        }}>
        <Content>
          <Form>
            <Item>
              <Icon active name="pencil" />
              <Input
                placeholder="Tarefa..."
                onChangeText={task => this.setState({ task })}
              />
            </Item>

            <View style={styles.boxDate}>
              <Text style={styles.titleDate}>
                Data para realizar a tarefa (opcional)
              </Text>
              <Item style={styles.dateStart}>
                <Icon active name="calendar" />
                <DatePicker
                  minimumDate={new Date()}
                  locale={'pt-BR'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  placeHolderText="Data de início"
                  textStyle={{ color: 'rgba(90, 90, 90, 1)' }}
                  placeHolderTextStyle={{ color: '#d3d3d3' }}
                  onDateChange={this.setStartDate}
                />
              </Item>

              <Item>
                <Icon active name="calendar" />
                <DatePicker
                  minimumDate={new Date(this.state.dateStart)}
                  locale={'pt-BR'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  placeHolderText="Data de fim"
                  textStyle={{ color: 'rgba(90, 90, 90, 1)' }}
                  placeHolderTextStyle={{ color: '#d3d3d3' }}
                  onDateChange={this.setEndDate}
                  disabled={!this.state.dateStart}
                />
              </Item>
              {this.invalidDate() ? (
                <Text style={styles.invalidDate}>Data inválida</Text>
              ) : null}
            </View>

            <Button primary style={styles.buttonNew} onPress={this.createTask}>
              <Text style={styles.buttonNewText}> Criar </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  boxDate: {
    marginTop: 30,
  },
  titleDate: {
    textAlign: 'center',
    color: 'rgba(70, 70, 70, 1)',
    marginBottom: 20,
  },
  dateStart: {
    marginBottom: 15,
  },

  invalidDate: {
    marginLeft: 15,
    color: '#f04f32',
    fontSize: 12,
  },

  buttonNew: {
    marginTop: 50,
    marginHorizontal: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNewText: {
    color: '#fff',
    fontSize: 17,
  },
});
