// import TaskModal from './components/TaskModal.jsx';
export default function TasksEmptyList (openModal){
    return(
        <div style={{"width": "100%", 'height': '550px', 'border': '5px dashed black'}} className="d-flex align-items-center justify-content-center">
            <button className="fs-2" style={{ 'border': 'none', 'outline': 'none', 'background': 'none' }}>Create new Contact</button>
        </div>
    )
}