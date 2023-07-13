const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema( {
    courseId: {
        type: String
    },
    courseName: {
        type: String
    },
    courseMentors: {
        type: [String]
    },
    courseDescription: {
        type: String
    }
} );

module.exports = mongoose.model("course", courseSchema);