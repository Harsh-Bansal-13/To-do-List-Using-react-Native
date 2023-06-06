import React, { useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import TaskList from './src/TaskList';
import store from './src/store';
import { addTask } from './src/actions';

const App = () => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
      };

      store.dispatch(addTask(task));
      setNewTask('');
    }
  };
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.headingContainer} >To do List
      </Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Task"
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={handleAddTask}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleAddTask}>
            Add Task
          </Button>
        </View>
        <TaskList />
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  headingContainer:{
    paddingTop:25,
    fontSize:25,
    fontWeight:'bold',
    alignItems:'center',
    paddingBottom:10
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default App;


