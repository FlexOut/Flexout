import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectSets() {

  const [sets, setSets] = React.useState('');
  const [reps, setReps] = React.useState('');
  const [weights, setWeights] = React.useState('');

  const handleChange = (event) => {
    setSets(event.target.value);
    setReps(event.target.value);
    setWeights(event.target.value);
  };


  let setsValue = 0;
  let setsArray = [];
   for ( let i = 0; i < 20; i++) {
     setsArray.push(setsValue += 1)
   }
 
  return (
    <Box sx={{minWidth: 80}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sets}
          label="Sets"
          onChange={handleChange}
          >
          {setsArray.map( value => {return (<MenuItem value={value}>{value}</MenuItem>)})}
        </Select>
      </FormControl>
    </Box>
    
  );
}
