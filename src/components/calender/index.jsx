import React from 'react';

const calendars = [
  { id: 1, title: 'Work Calendar', description: 'All work-related events.', type: 'Work' },
  { id: 2, title: 'Personal Calendar', description: 'Personal events and reminders.', type: 'Personal' },
  { id: 3, title: 'Family Calendar', description: 'Family events and activities.', type: 'Family' },
  // Add more calendars as needed
];

const CalendarCard = ({ title, description, type }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${type === 'Work' ? 'bg-blue-100 text-blue-800' : type === 'Personal' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'}`}>
        {type}
      </span>
    </div>
  );
};

const Calendars = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Calendars</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calendars.map((calendar) => (
            <CalendarCard
              key={calendar.id}
              title={calendar.title}
              description={calendar.description}
              type={calendar.type}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Calendars;
