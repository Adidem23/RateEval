const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    ClubName: {
        type: String,
    },

    EmailId: {
        type: String,
        unique:true,
    },

    FirstQuestion: {
        type: Number,
    },

    SecondQuesion: {
        type: Number,
    }

});


module.exports = mongoose.model("UserResponse", ResponseSchema);