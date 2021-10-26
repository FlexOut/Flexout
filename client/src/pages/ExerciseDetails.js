import { useState } from 'react'
import ExerciseDetailsCard from '../components/ExerciseDetailsCard/ExerciseDetailsCard'

export default function ExercisesDetailview(props) {

return (
    <div>
      <ExerciseDetailsCard {...props}/>
    </div>
)
}