const router = require("express").Router();
const Workout = require('../models/Workout');

// get all workouts
router.get('/', (req, res, next) => {
	Workout.find()
		.then(workouts => {
			res.status(200).json(workouts);
		})
		.catch(err => next(err));
});


// create a workout
router.post('/', (req, res, next) => {
	console.log(req.body)
	const { title, description, selectedExercises: exercises} = req.body;
	Workout.create({
		title,
		description,
		exercises
	})
		.then(workout => {
			// we return http status code 201 - created
			res.status(201).json(workout);
		})
		.catch(err => {
			next(err);
		})
})

// get a specific workout
router.get('/:id', (req, res, next) => {
	Workout.findById(req.params.id)
		.then(workout => {
			// check if the id is not valid
			// if (!mongoose.Types.ObjectId.isValid(req.params.id))

			if (!workout) {
				res.status(404).json(workout);
			} else {
				res.status(200).json(workout);
			}
		})
		.catch(err => {
			next(err);
		})
});

router.put('/:id', (req, res, next) => {
	const { title, description } = req.body;
	Workout.findByIdAndUpdate(req.params.id, { title: title, description: description }, { new: true })
		.then(updatedWorkout => {
			res.status(200).json(updatedWorkout);
		})
		.catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
	Workout.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'workout deleted' });
		})
});

module.exports = router;