const Task = ({ title }) => {
  return (
    <>
      <div className="bg-red-300 h-16 px-12 my-6 rounded-md flex justify-between items-center">
        <div>
          <h1
            className="font-serif w"
            onClick={() => {
              TaskDetails();
            }}
          >
            {title}
          </h1>
        </div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
};


export default Task;