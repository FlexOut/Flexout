import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectReps() {

  const [reps, setReps] = React.useState('');


  const handleChange = (event) => {
    setReps(event.target.value);
  };


   let repsValue = 0;
   let repsArray = [];
    for ( let i = 0; i < 50; i++) {
      repsArray.push(repsValue += 1)
    }

  return (
    <Box sx={{minWidth: 130}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Repetitions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={reps}
          label="Reps"
          onChange={handleChange}
          >
          {repsArray.map( value => {return (<MenuItem value={value}>{value}</MenuItem>)})}
        </Select>
      </FormControl>
    </Box>
    
  );
}