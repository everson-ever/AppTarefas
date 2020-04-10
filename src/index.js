/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Title, View } from 'native-base';

import AppRoutes from './routes';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body styles={styles.headerBody}>
            <View style={styles.boxTitle}>
              <Icon style={styles.icon} color="#fff" name="book" size={25} />
              <Title style={styles.title}>APP Tarefas</Title>
            </View>
          </Body>
        </Header>
        <AppRoutes />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  boxTitle: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 7,
  },
});
