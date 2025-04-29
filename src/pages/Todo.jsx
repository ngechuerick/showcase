import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const [taskEdited, setTaskEdited] = useState();

  /**Handler for creating a new task */
  function handleSubmit(e) {
    e.preventDefault();
    const task = document.querySelector("#text").value;

    if (task === "") return;

    setTodos((current) => [
      ...current,
      { id: todos.length + 1, taskDescription: task }
    ]);

    document.querySelector("#text").value = "";
  }

  /**Handler for initiating the editing of a task process */
  function handleEditTask(id) {
    setEditing(true);
    setTaskEdited(id);
  }

  /**Handler for enabling one to delete a task */
  function handleDeleteTask(id) {
    const remaining = todos.filter((item) => item.id !== id);
    setTodos(remaining);
  }

  /**Handler for enabling one to update a task */
  function handleUpdateTask(id) {
    if (editText === "") {
      alert("Update can not be empty!");
      return;
    }

    const updatedTasks = todos.map((item) => {
      if (item.id === id) {
        return { id: id, taskDescription: editText };
      } else {
        return item;
      }
    });

    setTodos(updatedTasks);
    setEditText("");
    setEditing(false);
  }

  /**Handler for canceling updating the todo task */
  function handleCancelUpdate() {
    setEditText("");
    setEditing(false);
  }

  return (
    <div className="todo__page">
      <p>All todo's will be listed here.</p>
      <div>
        <form onSubmit={handleSubmit} className="form__tasks">
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter your task here"
          />

          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
      <div className="todo__display--items">
        {todos.length > 0 ? (
          todos.map((item) => (
            <div className="todo__item" key={item.id}>
              <span>{item.id}</span>
              {editing && taskEdited === item.id ? (
                <input
                  type="text"
                  placeholder="update Task"
                  className="input editInput"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <p>{item.taskDescription} </p>
              )}

              <div>
                {editing && taskEdited === item.id ? (
                  <button
                    className="btn btn-edit"
                    onClick={() => handleUpdateTask(item.id)}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="btn btn-edit"
                    onClick={() => handleEditTask(item.id)}
                  >
                    Edit
                  </button>
                )}
                {editing && taskEdited === item.id ? (
                  <button
                    className="btn btn-cancel"
                    onClick={() => handleCancelUpdate()}
                  >
                    cancel
                  </button>
                ) : (
                  <button
                    className="btn btn-del"
                    onClick={() => handleDeleteTask(item.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="todo__item">
            <p className="">No todo tasks start by typing one.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
