import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    let newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
    }
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  function handleToggleTaskDone(id: number) {
    const taskDoneUpdate = tasks.find(task => task.id == id ? task.done = !task.done : "")
    const updatedTasks = tasks.map(task => ({ ...task }), ({taskDoneUpdate}))
    setTasks(() => [])
    updatedTasks.map(task => {
      setTasks(oldTasks => [...oldTasks, task])
    })
  }

  function handleRemoveTask(id: number) {
    setTasks(() => [])
    tasks.filter((task) => {
      task.id != id ? setTasks(oldTasks => [...oldTasks, task]) : ""
    })
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})