const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
    id: String,
    name: String,
    imgUrl: String,
    description: String,
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
