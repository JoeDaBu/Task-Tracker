const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
    }


]

const Tasks = () => {
    return (
        <>
         {tasks.map((task) => 
         (<h3 key={task.id}>{task.text}</h3>))}   
        </>
    )
}

export default Tasks
