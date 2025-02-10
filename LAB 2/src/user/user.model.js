import { Schema, model } from 'mongoose';

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
            required: [true, 'Username Required'], // Corregido
            unique: [true, 'Username already exists'], // Corregido
            lowercase: true,
            maxLength: [20, 'Max Characters 20']
        },

        email: {
            type: String,
            required: [true, 'Email Required'],
            unique: [true, 'Email already exists'] // Agregado para evitar duplicados
        },

        password: {
            type: String,
            required: [true, 'Password Required'], // Corregido
            minLength: [8, 'Min Characters is 8'],
            maxLength: [100, 'Max Characters is 100'] // Corregido
        },

        role: {
            type: String,
            enum: ['STUDENT_ROLE', 'TEACHER_ROLE'],
        },

        courses: [{
            type: Schema.Types.ObjectId,
            ref: 'Course'
        }]
    }
);

export default model('User ', userSchema);