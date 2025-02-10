import { Router } from 'express';
import {
    createCourse,
    editCourse,
    deleteCourse,
    viewCoursesByTeacher
} from '../teacher/teacher.controller.js';
import { validateJwt } from '../../middlewares/validate.jwt.js';

const api = Router();

// Aplicar validateJwt a todas las rutas que requieren autenticación
api.post('/teacher/courses', createCourse); // Crear curso
api.put('/teacher/courses/:courseId', editCourse); // Editar curso
api.delete('/teacher/courses/:courseId', deleteCourse); // Eliminar curso
api.get('/teacher/courses/:teacherId', viewCoursesByTeacher); // Ver cursos

export default api;