import Task from "./Task";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <h1 className="text-xl py-6">Task List</h1>
        <ul>
          {
              tasks ? (
                  tasks.map((task) =>{
                      return(
                          <Task key={task.id} title= {task.title}/>
                      )
                  })
              ) : null
          }
        </ul>
      </div>
    );
  };
  
  export default TaskList;