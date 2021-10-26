import { Link } from 'react-router-dom';


export default function WorkoutCard({ title, description, _id }) {
	console.log(title);
	return (
		<div>
			<Link to={`/workouts/${_id}`}>
				<h3>{title}</h3>
			</Link>
			<p>{description}</p>
		</div>
	)
}