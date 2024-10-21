import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrappers.jsx'
import TaskModal from './components/TaskModal.jsx';
import { useState, createContext } from 'react';

export const DeleteContext = createContext(null);

export function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  
  

  const [tasks, setTask] = useState([]);

  const addTask = (taskName, taskDadline, taskDescription) => { 
    setTask([
        ...tasks,
      {
        'taskName':taskName,
        'taskDadline':taskDadline,
        'taskDescription':taskDescription,
        'taskId': Date.now()
      }
    ]) 
  }
  const deleteTask = e => { 
    setTask(tasks.filter( task => task.taskId !== Number(e.currentTarget.id) ))
   }


  return (
    <>
      <Header openModal={handleShow}/>
      <DeleteContext.Provider value={deleteTask}>
        <TasksWrapper tasks={tasks}/>
      </DeleteContext.Provider>
      <TaskModal show={show} closeModal={handleClose} createTask={addTask} openModal={handleShow}/>
    </>
  );
}

