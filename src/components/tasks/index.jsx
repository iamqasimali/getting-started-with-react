import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({header}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/task/getAllTasks');
        
        setTasks(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {
            tasks ? (
                tasks.map((task) =>{
                    return <li key={task.id}>{task.title}</li>
                })
            ) : null
        }
      </ul>
    </div>
  );
};

export default TaskList;
