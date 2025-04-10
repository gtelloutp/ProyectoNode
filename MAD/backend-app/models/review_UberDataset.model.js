//DEfiniendo un objeto de tipo mongoose
const mongoose = require('mongoose');
//DEfiniendo la estructura de review
const reviewSchema = new mongoose.Schema(
    {
        START_DATE : {
            type: String
        },
        END_DATE : {
            type: String
        },
        CATEGORY : {
            type: String
        },
        START : {
            type: String
        },
        STOP : {
            type: String
        },
        MILES : {
            type: Number
        },
        PURPOSE : {
            type: String
        }
    }
)

const Uber = mongoose.model("UberDataset", reviewSchema);
module.exports = Uber; //Exportando el modelo de review
