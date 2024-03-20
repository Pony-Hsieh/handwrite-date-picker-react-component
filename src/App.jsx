import { useState } from 'react';
import Calendar from './components/Calender';
import dayjs from 'dayjs';

function App() {
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <>
      <h1>This is a page that includes Calender Component</h1>
      <Calendar
        // initDate={dayjs('2023-07-22')}
        initDate={dayjs()}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
    </>
  );
}

export default App;
