import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function WorkoutCard({ title, description, _id }) {
	console.log(title);

	const linkStyle = {
		margin: "1rem",
		textDecoration: "none",
		color: 'black'
	  };

	return (
		<>
		<Link to={`/workouts/${_id}` } style={linkStyle}>
		<Box
		sx={{
		  display: 'flex',
		  flexDirection: { xs: 'column', md: 'row' },
		  alignItems: 'center',
		  bgcolor: 'background.paper',
		  overflow: 'hidden',
		  borderRadius: '20px',
		  margin: '20px',
		  boxShadow: 1,
		  fontWeight: 'bold',
		}}
	  >
		<Box
		  component="img"
		  sx={{
			height: 233,
			width: 350,
			maxHeight: { xs: 233, md: 167 },
			maxWidth: { xs: 350, md: 250 },
		  }}
		  alt="The house from the offer."
		  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
		/>
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
		  <Link to={`/workouts/${_id}`} style={{ textDecoration: 'none' }}> {title} </Link>					  </Box>
		  <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
		  {description}
		  </Box>
		</Box>
	  </Box>
	  </Link>
</>

	)
}