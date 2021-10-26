import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutCard from '../components/WorkoutCard/WorkoutCard';

export default function WorkoutListPage() {

	// we don't need this bc we are using the proxy in package.json
	const API_URL = 'http://localhost:5005';

	const [workouts, setWorkouts] = useState([]);

	const getAllWorkouts = () => {
		// get request to the server
		axios.get(`${API_URL}/api/workouts`)
			.then(response => {
				console.log(`this is a response ${response}`)
				setWorkouts(response.data);
			})
			.catch(err => console.log(err));
	}

	useEffect(() => {
		// get all the projects from the server
		getAllWorkouts();
		// bc of the empty dependency array we only get all the projects  
		// on the first render (when the component is mounted)
	}, [])

	return (
		<div>
			<h1>All Workouts</h1>

			{workouts.map(workout => <WorkoutCard key={workout._id} {...workout} />)}

		</div>

	)
}