import {Schema, model} from 'mongoose'

const courseSchema = Schema (
    {
        name:{
            type: String,
            required: [true, 'Name Curse Required'],
            maxLength: [20, `Max characters is 20`]
        },

        description:{
            type: String,
            required: [true, 'Description is required'],
            maxLength: [50, `Max characters is 50`]
        },

        area: {
            type: String, 
            required: [true, 'Area is Required'],
            maxLength: [20, 'Max characters is 20']
        },

        teacher: {
            type: Schema.Types.ObjectId,
            required:[true, 'Identify the teacher']
        }
    }
)

export default model('Course', courseSchema)