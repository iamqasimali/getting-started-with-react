import TaskList from './TaskList';

import React, { useEffect, useState } from 'react';

const Index = ({header}) => {
  const [currentPage, setCurrentPage] = useState("taskList");
return (
  <div className='w-full h-full'>
      <div className='w-full h-full px-32 py-8'>
          { currentPage == "taskList"  && <TaskList  header={header} /> }
          {/* { header == "tasks"  && <TaskList header={header} /> } */}
          { header == "projects"  && <Projects  header={header} /> }
          { header == "calender"  && <Calendar  header={header} /> }
      </div>  
  </div>
)
}

export default Index