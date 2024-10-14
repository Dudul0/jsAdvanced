import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrappers.jsx'
import TaskModal from './components/TaskModal.jsx';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  
  return (
    <>
      <Header openModal={handleShow}/>
      <TasksWrapper/>
      <TaskModal show={show} handleClose={handleClose}/>
    </>
  );
}

export default App;
