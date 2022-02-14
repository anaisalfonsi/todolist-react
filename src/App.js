import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TasksApi from './api/tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const createTask = (text) => {
    const task = {
      isDone: false,
      text: text,
    };

    TasksApi.create(task).then((task) => setTasks([...tasks, task]));
  };

  const deleteTask = (id) => {
    setLoading(true);

    TasksApi.delete(id).then(() => {
      setTasks(tasks.filter((t) => t.id !== id));
      setLoading(false);
    });
  };

  const toggleTask = (id) => {
    const copy = { ...tasks.find((t) => t.id === id) };

    copy.isDone = !copy.isDone;

    setLoading(true);

    TasksApi.toggle(copy).then(() => {
      
      const index = tasks.findIndex((t) => t.id === id);

      const updatedTasks = [...tasks];

      updatedTasks[index] = copy;

      setTasks(updatedTasks);

      setLoading(false);
    });
    
  };

  useEffect(() => {
    TasksApi.load().then((json) => {
      setTasks(json);
      setLoading(false);
    });
  }, []);

  return { tasks, createTask, deleteTask, toggleTask, loading };
};

function App() {
  const { tasks, createTask, deleteTask, toggleTask, loading } = useTasks();

  

  return (
    <div className="container">
      <article>
        <header>
          <h1>Todolist incroyable</h1>
        </header>
        {loading && <h3>Chargement en cours...</h3>}
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

        <footer>
          <TaskForm onSubmit={createTask} />
        </footer>
      </article>
    </div>
  );
}

export default App;
