import { useState } from "react";
const Taskmanagement = () => {
  const [task, settask] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState(new Date());

  const handleCreate = () => {
    const oldTask = [...task];
    let newTask = {
      taskTitle: title,
      taskDescription: description,
      taskDueDate: date,
    };

    oldTask.push(newTask);
    settask(oldTask);
  };
  const handleUpdate = (index) => {
    const oldTask = [...task];

    for (let i = 0; i < oldTask.length; i++) {
      if (i === index) {
        oldTask[i].taskDueDate = new Date();
      }
    }
    settask(oldTask);
  };

  return (
    <>
      <h1>Task Mangaement</h1>
      <div className="task">
        <label>Task Title:</label>
        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <br />
        <br />

        <label>Tast Description:</label>
        <textarea
          type="text"
          placeholder="Enter Task  Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Task Due date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="button" onClick={() => handleCreate()}>
          Create
        </button>
      </div>
      <div className="tasklist">
        {task.map((v, i) => {
          return (
            <ul>
              <li type="none">Task Title:{v.taskTitle}</li>
              <li type="none">Task Description:{v.taskDescription}</li>
              <li type="none">Task Date:{v.taskDueDate}</li>
              <button
                type="button"
                onClick={() => {
                  handleUpdate(i);
                }}
              >
                Update Task
              </button>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default Taskmanagement;
