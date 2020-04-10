import React from 'react';
import { List, ListItem, Text, Left, Right, View } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListTask extends React.Component {
  render() {
    return (
      <List button={false} style={styles.list}>
        {this.props.tasks.map((task, i) => {
          return (
            <ListItem key={i}>
              <Left>
                <View style={styles.boxTask}>
                  <Text style={styles.taskTitle}>{task.task}</Text>
                  <Text style={styles.taskDate}>{task.dateEnd}</Text>
                </View>
              </Left>
              <Right>
                <Icon name="angle-right" size={30} color="#dddddd" />
              </Right>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  taskTitle: {},
  taskDate: {
    fontSize: 13,
    color: '#999999',
  },
});
