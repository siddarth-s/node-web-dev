import mongoose from "mongoose";

const schema = mongoose.Schema({
    // "_id": "123",
    postedBy: {
        username: String
    },
    handle: String,
    tuit: String,
    likes: Number,
    dislikes: Number,
    attachments: {
    image: String,
    video: String
},
    avatarIcon: String

}, {collection: 'tuitsnew'});

export default schema;