import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import moment from 'moment';
function FilterModal() {
  const [value, onChange] = useState(new Date());

  let momenttest;
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Calendar onChange={onChange} value={value} />
      <div style={{ marginTop: '1rem' }}>
        {(momenttest = moment(value).format())}
        {console.log(typeof momenttest)}
      </div>
    </div>
  );
}

export default FilterModal;
