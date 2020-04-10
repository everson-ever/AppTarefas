import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tasks from '../pages/tasks';
import NewTask from '../pages/newTask';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Minhas Tarefas">
        <Tab.Screen name="Minhas Tarefas" component={Tasks} />
        <Tab.Screen name="Nova Tarefa" component={NewTask} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
