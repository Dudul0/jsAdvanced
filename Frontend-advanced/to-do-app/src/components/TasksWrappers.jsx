import Container from 'react-bootstrap/Container';
import TasksEmptyList from './TasksEmptyList.jsx';
import Task from './Task.jsx'

function TasksWrapper({tasks}) {
  
  return (
    <Container>
      
      <section className='my-5 w-full my-5 d-flex  flex-wrap gap-2 aligm-items-center'>
      {
        tasks.length ? 
        tasks.map (task => <Task taskName={task.taskName} taskDeadline={task.taskDeadline} taskDescription={task.taskDescription}/>)
        : <TasksEmptyList />
      }
      </section>
    </Container>
  );
}

export default TasksWrapper;