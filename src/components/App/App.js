import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TodoApp from '../TodoApp/TodoApp';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filterTasked, setFilterTasked] = useState([]);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
    }
    setTask(storedTasks || []);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilterTasked(tasks);
    } else if (filter === 'Active') {
      let ActiveTask = tasks.filter(item => !item.status);
      setFilterTasked(ActiveTask);
    } else if (filter === 'Completed') {
      let CompletedTask = tasks.filter(item => item.status);
      setFilterTasked(CompletedTask);
    }
  }, [filter, tasks]);

  const Addtask = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      }
    ]
    setTask(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  const deleteTask = (taskID) => {
    const newTask = tasks.filter((task) => task.id !== taskID);
    setTask(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  const handleStatus = (taskID) => {
    const newTask = tasks?.map((task) => {
      if (task.id === taskID) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTask(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  return (
    <div className="App">
      <Header />
      <TodoApp tasks={filterTasked} Addtask={Addtask} deleteTask={deleteTask} updateFilter={setFilter} handleStatus={handleStatus} />
      <Footer />
    </div>
  );
}

export default App;