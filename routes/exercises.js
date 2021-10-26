const router = require("express").Router();
const Exercise = require ("../models/Exercise")


router.get('/:id', (req, res, next) => {
	Exercise.findById(req.params.id)
		.then(exercise => {
			if (!exercise) {
				res.status(404).json(exercise);
			} else {
				res.status(200).json(exercise);
			}
		})
		.catch(err => {
			next(err);
		})
});


module.exports = router;