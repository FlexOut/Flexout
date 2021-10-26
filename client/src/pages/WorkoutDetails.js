import { useState } from 'react'
import axios from 'axios';
import React from 'react'
import ProgressBar from '../components/Progressbar'
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WorkoutParameterSets from '../components/WorkoutParameterSets'
import WorkoutParameterReps from '../components/WorkoutParameterReps'
import WorkoutParameterWeight from '../components/WorkoutParameterWeight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const WorkoutDetails = (props) => {
    
    
	const API_URL = 'http://localhost:5005';

	const [workout, setWorkout] = useState(null);

	const workoutId = props.match.params.id;

	const getProject = () => {
		axios.get(`${API_URL}/api/workouts/${workoutId}`)
			.then(response => {
				console.log(response.data);
				setWorkout(response.data);
			})
			.catch(err => console.log(err))
	}

	React.useEffect(() => {
		getProject();
	}, [])

    
      if (!workout) return <div> 
      <h1> Workout details are loading </h1>
      <ProgressBar /> 
      </div>;

    return (
        <div>

        <div className='introtext'>



            <h1>{workout.title}</h1>

            <h2>{workout.description}</h2>
        </div>

            {workout.exercises.map( exercise => {return (

                <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          margin: '20px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}
      >
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          {exercise.name}   </Box>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Exercise description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {exercise.description.replace(/(<([^>]+)>)/gi, "")}
          </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
          
          <Box component="span" 
          sx={{ 
           fontSize: 16,
           mt: 1, 
           display: 'flex',
           justifyContent: 'space-between',
            }}>
          <WorkoutParameterSets />
            <WorkoutParameterReps />
            <WorkoutParameterWeight />          
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
          </Box>
        </Box>
      </Box>

            )})}
        </div>
    )
}
