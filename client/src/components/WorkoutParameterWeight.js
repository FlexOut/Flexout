import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectSetsWeight() {

  const [weight, setWeight] = React.useState('');

  const handleChange = (event) => {
    setWeight(event.target.value);
  };


  let weightValue = 0;
  let weightArray = [];
   for ( let i = 0; i < 500; i++) {
     weightArray.push(weightValue += 0.5)
   }
 
  return (
    <Box sx={{minWidth: 100}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Weight</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={weight}
          label="Weight"
          onChange={handleChange}
          >
          {weightArray.map( value => {return (<MenuItem value={value}>{value}kg</MenuItem>)})}
        </Select>
      </FormControl>
    </Box>
    
  );
}