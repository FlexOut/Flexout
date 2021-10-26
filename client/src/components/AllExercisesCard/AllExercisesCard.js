import { useState } from 'react'
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import './AllExercisesCard.css'
import ProgressBar from '../Progressbar'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './AllExercisesCard.css'
import Button from '@mui/material/Button';




export default function AllExercises(props) {

	const API_URL = 'https://wger.de/api/v2/exercise/?language=2&limit=500&offset=0';

	const [exercise, setExercise] = useState(null);
  
  const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([])
  const [muscleFilter, setMuscleFilter] = useState('')
  const [equipmentFilter, setEquipmentFilter] = useState('')


    React.useEffect(() => {
        axios.get(API_URL).then((response) => {
        console.log(`This is @AllExercisesCard ${response.data.results}`)
          setExercise(response.data.results);
        });
      }, []);
    
      if (!exercise) return <div>  
      <ProgressBar /> 
      </div>;
      console.log(`loading`)

      const API_URLB = 'http://localhost:5005';



	const handleSubmit = e => {
		e.preventDefault();

		// make a post request to the server with the form fields in the body
		const requestBody = { title, description, selectedExercises };
    console.log(requestBody)
		axios.post(`${API_URLB}/api/workouts`, requestBody)
			.then(response => {
				// reset the state and thereby reset the form
				setTitle('');
				setDescription('');
        setSelectedExercises([]);
				// we need to trigger 'getAllProjects' in the ProjectListPage component
				props.refreshWorkouts();
			})
			.catch(err => console.log(err))
	}

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };
  

  function addExercise (exercise) {
    setSelectedExercises([...selectedExercises, exercise])
  }

// FILTERS

  function addMuscleFilter (muscleFilter) {
  
  }
  // MUSCLE CATEGORIES
  const categories =  [{
    "Abs": 10
},
{
    "Arms": 8
},
{
    "Back": 12
},
{
    "Calves": 14
},
{
    "Chest": 11
},
{
    "Legs": 9
},
{
    "Shoulders": 13
}]
// EQUIPEMTN CATEGORIES
const equipment = [
  {
     "Barbell": 1
  },
  {
      "Bench": 8
  },
  {
      "Dumbbell": 3
  },
  {
      "Gym mat": 4
  },
  {
     "Incline bench": 9
  },
  {
      "Kettlebell": 10
  },
  {
     "none": 7
  },
  {
      "Pull-up bar": 6
  },
  {
      "Swiss Ball": 5
  },
  {
      "SZ-Bar": 2
  }
]

	return (
    <>


      <div>



      <div className='signupForm'>
			<h1>Create a new Workout 💪</h1>
			<form onSubmit={handleSubmit}>

      <div className="form-group">
				<label htmlFor="title">Title </label>
				<input
					type="text"
					name="title"
          className='form-control'
          placeholder="e.g. Leg Day"
					value={title}
					onChange={e => setTitle(e.target.value)} />
        </div>


        <div className="form-group">
				<label htmlFor="description">Description </label>
				<input
					type="text"
					name="description"
          className='form-control'
					value={description}
          placeholder="Add workout description"
					onChange={e => setDescription(e.target.value)}
				/>

        </div>


      </form>

      <div className="form-group">
      <ol>
         {selectedExercises.map(exercise =>  (<li>{exercise.name}</li>))}
      </ol>
      </div>


      <div className="form-group">
      <button type="submit" className="btn btn-dark btn-block" onClick={handleSubmit}>Save this workout</button>
      </div>

      </div>
    {/* FILTERS */}
      {/* <div>
      <Button onClick={() => addMuscleFilter(muscleFilter)}>
      Abs
      </Button>
      </div> */}
      {/* FILTERS END */}
        <h1>Exercises</h1>
        <div className="axii">
        {exercise.map( exercise => {return(

          <div class="card card-1">
            <div class="top">
              <img src="https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            <div class="bottom">
            <p><Link to={`/exercises/${exercise.id}`} style={linkStyle} >{exercise.name}</Link></p>
            </div>
            <div class="bottom">
            <Fab variant="extended" color="dark" aria-label="add" onClick={() => addExercise(exercise)}>
                <AddIcon sx={{ mr: 1 }} />
                 Add this to workout
                </Fab>
           </div>

          </div>)})}

          </div>

      </div>

    </>
  )}