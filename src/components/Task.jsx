function Task({name, isDone, description, _id, toggleTask}) {
// console.log("TASK PROPS", props);
//const {name, isDone, description, _id} = props.tasks

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{name}</h1>
        {isDone
          ? <span>DONE ✅</span>
          : <span>PENDING ⌛</span>
        }

        <h2> Task Description </h2>
        <p>{description}</p>

        <button 
          className="add"
          onClick={() => {toggleTask(_id)}} // get the data from parent(To-do)
        >
        {isDone
            ? <span>UNDO ❌</span>
            : <span>✔️</span>
          }
        </button>

      </div>
    </div>
  );
}

export default Task;
