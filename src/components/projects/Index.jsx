import React from 'react';

const projects = [
  { id: 1, title: 'Project One', description: 'This is the first project.', status: 'In Progress' },
  { id: 2, title: 'Project Two', description: 'This is the second project.', status: 'Completed' },
  { id: 3, title: 'Project Three', description: 'This is the third project.', status: 'Not Started' },
  // Add more projects as needed
];

const ProjectCard = ({ title, description, status }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${status === 'Completed' ? 'bg-green-100 text-green-800' : status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
        {status}
      </span>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
