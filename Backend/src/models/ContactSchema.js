const mongoose = require('mongoose');



const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    message: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact