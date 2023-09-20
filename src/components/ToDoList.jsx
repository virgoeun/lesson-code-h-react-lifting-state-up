import { useState, useEffect } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0); //lifting state-up

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,

      //toggling 'isDone'
      if (task._id === id) {
        task.isDone = task.isDone ? false : true; // false => true (due to initial value???)

        //same with this:
        //if (task._id === id) {
        // task.isDone = !task.isDone;}

        // then update `tasksCompleted` state variable
        if (task.isDone)
          setTasksCompleted((prevTasksCompleted) => prevTasksCompleted + 1);
        else if (!task.isDone)
          setTasksCompleted((prevTasksCompleted) => prevTasksCompleted - 1);
      }
      // OR 
      //   if (task.isDone) setTasksCompleted(tasksCompleted + 1);
      //   else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);
      // }

      // OR 
      // const changeInCompletedTasks = task.isDone ? 1 : -1;
      // setTasksCompleted((prevTasksCompleted) => prevTasksCompleted + changeInCompletedTasks);

      //SIMPLIFIED ONE
      // if (task._id === id) {
      //   const updatedIsDone = !task.isDone; // Toggle isDone
      //   task.isDone = updatedIsDone; // Update the task's isDone property
      //   setTasksCompleted(tasksCompleted + (updatedIsDone ? 1 : -1)); // Update tasksCompleted
      // }
      setTasks(tasksCopy); //update the 'isDone' part and returns a new (updated) array
      console.log("TasksCopy:", tasksCopy);
      console.log("Updated tasksCompleted:", tasksCompleted);
    });
    
  };

  // useEffect ? ? ?
  // for logging the value of tasksCompleted to the console whenever it changes.
  // dependency:  [tasksCompleted]
  useEffect(() => {
    console.log("SUMMARY PROPS:", tasksCompleted);
  }, [tasksCompleted]);

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />
      <div className="todo-container">
        {tasks.map((task) => (
          <Task
            key={task._id}
            name={task.name}
            description={task.description}
            isDone={task.isDone}
            toggleTask={toggleTaskDone}
          />
          // <Task key={task._id} task={task} toggleTask={toggleTaskDone} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
