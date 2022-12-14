import mongoose from "mongoose";

const analysisSchema = mongoose.Schema({
    id:Number,
    url: String,
    technologies: [String],
    pageCount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'LOADING'
    }
});

const Analysis = mongoose.model("Analysis",analysisSchema);
export default Analysis;