import React, { useState } from 'react';

const DueDate = () => {
  const [dueDate, setDueDate] = useState('');

  // Function to handle due date selection
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  // Function to handle setting due date
  const handleSetDueDate = () => {
    // You can perform further actions with the dueDate state, like saving it to your database
    console.log('Due date selected:', dueDate);
  };

  return (
    <div className="due-date-container">
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
        placeholder="Select due date"
      />
      <button onClick={handleSetDueDate}> Due Date</button>
    </div>
  );
};

export default DueDate;


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const DueDate = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// export default DueDate