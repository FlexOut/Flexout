const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  title: String,
  description: String,
  exercises: Array
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
