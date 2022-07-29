import 'react-day-picker/dist/style.css';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

function FilterModal() {
  // const [selected, setSelected] = React.useState<Date>();

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}accessKey
    >
      <DayPicker
      // mode="single"
      // selected={selected}
      // onSelect={setSelected}
      // footer={footer}
      />
    </div>
  );
}

export default FilterModal;
