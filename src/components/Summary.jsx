import React from "react";

function Summary({ tasksCompleted }) {
  //const tasksCompleted = props.tasksCompleted;
  //const { tasksCompleted } = props

console.log("SUMMARY PROPS:",{ tasksCompleted })

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{ tasksCompleted }</p>
    </div>
  );
}

export default Summary;
