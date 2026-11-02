"use client";

import { useState, useEffect } from "react";

export default function Tasks() {
const [tasks, setTasks] = useState([]);
const [taskName, setTaskName] = useState("");
const [dueDate, setDueDate] = useState("");
const [priority, setPriority] = useState("Medium");
const [editId, setEditId] = useState(null);
const [loaded, setLoaded] = useState(false);

// Load tasks from localStorage
useEffect(() => {
const savedTasks = localStorage.getItem("studybuddy-tasks");


if (savedTasks) {
  setTasks(JSON.parse(savedTasks));
}

setLoaded(true);


}, []);

// Save tasks whenever they change
useEffect(() => {
if (loaded) {
localStorage.setItem("studybuddy-tasks", JSON.stringify(tasks));
}
}, [tasks, loaded]);

// Add or update task
function handleSubmit(e) {
e.preventDefault();


if (!taskName.trim()) return;

if (editId !== null) {
  setTasks(
    tasks.map((task) =>
      task.id === editId
        ? { ...task, name: taskName, dueDate, priority }
        : task
    )
  );

  setEditId(null);
} else {
  const newTask = {
    id: Date.now(),
    name: taskName,
    dueDate,
    priority,
    completed: false,
  };

  setTasks([...tasks, newTask]);
}

setTaskName("");
setDueDate("");
setPriority("Medium");

}

// Edit task
function handleEdit(task) {
setTaskName(task.name);
setDueDate(task.dueDate);
setPriority(task.priority);
setEditId(task.id);
}

// Delete task
function handleDelete(id) {
setTasks(tasks.filter((task) => task.id !== id));
}

// Complete or undo task
function handleComplete(id) {
setTasks(
tasks.map((task) =>
task.id === id
? { ...task, completed: !task.completed }
: task
)
);
}

const completedTasks = tasks.filter((task) => task.completed).length;

if (!loaded) return <p className="p-8">Loading tasks...</p>;

return ( <div className="min-h-screen bg-gray-50 p-6 md:p-10"> <div className="mx-auto max-w-4xl">


    <h1 className="mb-2 text-3xl font-bold text-gray-800">
      Task Management
    </h1>

    <p className="mb-8 text-gray-500">
      Organize your study tasks and stay productive.
    </p>

    {/* Task Statistics */}
    <div className="mb-8 grid grid-cols-2 gap-4">
      <div className="rounded-xl bg-white p-5 shadow">
        <p className="text-gray-500">Total Tasks</p>
        <h2 className="text-3xl font-bold text-blue-600">
          {tasks.length}
        </h2>
      </div>

      <div className="rounded-xl bg-white p-5 shadow">
        <p className="text-gray-500">Completed Tasks</p>
        <h2 className="text-3xl font-bold text-green-600">
          {completedTasks}
        </h2>
      </div>
    </div>

    {/* Add Task Form */}
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        {editId !== null ? "Edit Task" : "Add New Task"}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="rounded-lg border p-3 text-gray-800"
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-lg border p-3 text-gray-800"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border p-3 text-gray-800"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

      </div>

      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        {editId !== null ? "Update Task" : "Add Task"}
      </button>

      {editId !== null && (
        <button
          type="button"
          onClick={() => {
            setEditId(null);
            setTaskName("");
            setDueDate("");
            setPriority("Medium");
          }}
          className="ml-3 rounded-lg bg-gray-200 px-6 py-3 text-gray-700"
        >
          Cancel
        </button>
      )}
    </form>

    {/* Task List */}
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-semibold text-gray-800">
        My Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No tasks yet. Add your first task!
        </p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col justify-between gap-4 rounded-lg border p-4 md:flex-row md:items-center"
            >
              <div>
                <h3
                  className={`font-semibold ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Due: {task.dueDate || "No due date"}
                </p>

                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                  {task.priority} Priority
                </span>
              </div>

              <div className="flex flex-wrap gap-2">

                <button
                  onClick={() => handleComplete(task.id)}
                  className="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => handleEdit(task)}
                  className="rounded-lg bg-yellow-100 px-3 py-2 text-sm text-yellow-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
</div>


);
}
