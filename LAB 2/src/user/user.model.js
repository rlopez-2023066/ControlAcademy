import { Schema, model } from 'mongoose' 

const userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Name Required'],
            maxLength: [30, 'Max Characters 30']
        },

        surname: {
            type: String,
            required: [true, 'Surname Required'],
            maxLength: [30, 'Max Characters 30']
        },

        username: {
            type: String,
            required: [true, 'Username Required'], 
            unique: [true, 'Username already exists'], 
            lowercase: true,
            maxLength: [20, 'Max Characters 20']
        },

        email: {
            type: String,
            required: [true, 'Email Required'],
            unique: [true, 'Email already exists']   
        },

        password: {
            type: String,
            required: [true, 'Password Required'], 
            minLength: [8, 'Min Characters is 8'],
            maxLength: [100, 'Max Characters is 100'] 
        },

        role: {
            type: String,
            enum: ['STUDENT_ROLE', 'TEACHER_ROLE'],
            default: 'STUDENT_ROLE'
        },

        courses: [{
            type: Schema.Types.ObjectId,
            ref: 'Course'
        }]
    }
) 

export default model('User ', userSchema) 