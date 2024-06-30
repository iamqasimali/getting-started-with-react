import React from 'react'
import { useState } from 'react'
import Calendar from '../calender/Index'
import Dashboard from '../Dashboard'
import Projects from '../projects/Index'
import Tasks from '../tasks'
import Header from './Header'


const Index = () => {
    const [header, setHeader] = useState("dashboard");
  return (
    <div className='w-full h-full'>
        <Header header={header} setHeader={setHeader} />
        <div className='w-full h-full px-32 py-8'>
            { header == "dashboard"  && <Dashboard  header={header} /> }
            { header == "tasks"  && <Tasks header={header} /> }
            { header == "projects"  && <Projects  header={header} /> }
            { header == "calender"  && <Calendar  header={header} /> }
        </div>  
    </div>
  )
}

export default Index
