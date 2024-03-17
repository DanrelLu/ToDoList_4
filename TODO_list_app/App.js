import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';



const App = () => {

  const [tasks, setTasks] = useState(
    [
    'Do laundry',
    'Go to gym',
    'Walk dog'
    ]
  );

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks} deleteTask = {deleteTask}/>
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
