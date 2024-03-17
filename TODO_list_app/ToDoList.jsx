import React from 'react';
import { ScrollView, Button, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks, deleteTask }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={[styles.task]}>
          <Text style={styles.taskText}>{task}</Text>
          <Button title="Delete" onPress={() => deleteTask(index)} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },


});

export default ToDoList;
