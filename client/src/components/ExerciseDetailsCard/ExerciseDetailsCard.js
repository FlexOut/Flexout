import { useState } from 'react'
import axios from 'axios';
import React from 'react'
import ProgressBar from '../Progressbar'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



export default function ExerciseDetails(props) {

        const API_URL = 'https://wger.de/api/v2/exercise/?language=2&limit=500&offset=0';

        const [exercise, setExercise] = useState(null);
        const exerciseId = props.match.params.id;
        console.log(`this is exercise ID ${exerciseId}`)
    
        React.useEffect(() =>  {
            axios.get(`${API_URL}`,{
                headers: {
                  authorization: process.env.REACT_APP_FLEXOUT_API_KEY
                }
              })
              .then((response) => {
                  const result = response.data.results.find(function (result) {
                    return result.id == exerciseId
                    });

                    setExercise(result);
            });
          }, []);
        

          if (!exercise) return <div> 
          <h1> Exercise details are loading </h1>
          <ProgressBar /> 
          </div>;

    return (
        <div>
				<>
          
					<h1>{exercise.name}</h1>
					<h2>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</h2>
          <Fab variant="extended" color="dark" aria-label="add" onClick={event =>  window.location.href='/exercises'}>
                 Back
          </Fab>
				</>
        </div>
    )
}
