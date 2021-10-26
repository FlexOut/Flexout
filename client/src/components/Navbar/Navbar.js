import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='navbarcss' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href='/home' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction href='/exercises' label="Exercises" icon={<DirectionsRunIcon />} />
        <BottomNavigationAction href='/workouts' label="Workouts" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction href='/aboutus' label="About" icon={<PersonIcon />} />


      </BottomNavigation>
    </Box>
  );
} 