import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: false,
        unique: true
    },
    desc:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
    },
    categories:{
        type: Array,
    }
},
{timestamps: true}
)

export const Post = mongoose.model("Post", PostSchema);