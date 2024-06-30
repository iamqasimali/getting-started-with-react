import React from 'react'

const Dashboard = ({header}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Section 1</h2>
            <p className="text-gray-700">Content for section 1 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Section 2</h2>
            <p className="text-gray-700">Content for section 2 goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Section 3</h2>
            <p className="text-gray-700">Content for section 3 goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard            


// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const handleToggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
//         </div>
//       </header>
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <div className="flex mb-4">
//             <input
//               type="text"
//               className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Add a new todo"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//             />
//             <button
//               className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               onClick={handleAddTodo}
//             >
//               Add
//             </button>
//           </div>
//           <ul>
//             {todos.map((todo) => (
//               <li
//                 key={todo.id}
//                 className={`flex items-center justify-between p-4 mb-2 border rounded ${todo.completed ? 'bg-green-100' : 'bg-white'}`}
//               >
//                 <span
//                   className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
//                   onClick={() => handleToggleComplete(todo.id)}
//                 >
//                   {todo.text}
//                 </span>
//                 <button
//                   className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   onClick={() => handleDeleteTodo(todo.id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TodoList;