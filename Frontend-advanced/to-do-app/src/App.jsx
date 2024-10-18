import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrappers.jsx'
import TaskModal from './components/TaskModal.jsx';
import { useState } from 'react';

function App() {

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
        'taskDescription':taskDescription
      }
    ]) 
  }



  return (
    <>
      <Header openModal={handleShow}/>
      <TasksWrapper tasks={tasks}/>
      <TaskModal show={show} closeModal={handleClose} createTask={addTask} openModal={handleShow}/>
    </>
  );
}

export default App;
