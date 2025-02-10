import { Router } from "express";
import { assignCourse, viewCourses, editProfile, deleteProfile } from '../student/student.controller.js';

const api = Router();

// Modificar ruta para incluir userId en la URL
api.post('/student/:userId/courses/:courseId', assignCourse);  // Asignar curso
api.get('/students/:userId', viewCourses);  // Ver cursos de un estudiante con userId
api.put('/students/profile/:userId', editProfile);  // Editar perfil con userId
api.delete('/students/profile/:userId', deleteProfile);  // Eliminar perfil con userId

export default api;
