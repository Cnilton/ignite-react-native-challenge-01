import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle){
      setTasks([...tasks, {id: new Date().getTime(), done: false, title: newTaskTitle}])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let taskMap = tasks.map(task => {
      if(task.id === id){
        task.done = true;
      }
      return task;
    });
    setTasks(taskMap)
  }

  function handleRemoveTask(id: number) {
    let taskMap = tasks.filter(task => task.id !== id);
    setTasks(taskMap)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}