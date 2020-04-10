import AsyncStorage from '@react-native-community/async-storage';

let service = {
  async save({ task, dateStart, dateEnd }) {
    let newTask = { task, dateStart, dateEnd };

    try {
      let tasks = await this.getTasks();

      tasks.push(newTask);
      tasks = JSON.stringify(tasks);

      await AsyncStorage.setItem('@Tasks', tasks);
    } catch (err) {}
  },

  async getTasks() {
    //await AsyncStorage.removeItem('@Tasks');
    let tasks = (await AsyncStorage.getItem('@Tasks')) || '[]';
    tasks = JSON.parse(tasks);

    return tasks;
  },
};

export default service;
