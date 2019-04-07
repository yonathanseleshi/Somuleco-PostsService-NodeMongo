import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const postSchema = new Schema({

    postId: {

        type: String,
        required: 'must assign post id'
    },
    userId: {

        type: String,
        required: 'must assign user id'

    },
    postText: {

        type: String

    },
    postedDate: {

        type: Date,
        default: Date.now
    },
    tags: {

        type: [String]

    },
    imageIds: {

        type: [String]

    },
    videoIds: {

        type: [String]

    },
    likeCount: {

        type: Number

    },
    repostCount: {

        type: Number
    },
    viewsCount: {

        type: Number

    },
    playsCount: {

        type: Number

    },



})