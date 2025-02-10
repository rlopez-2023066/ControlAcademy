import { Router } from 'express' 
import {
    createCourse,
    editCourse,
    deleteCourse,
    viewCoursesByTeacher
} from '../teacher/teacher.controller.js' 
import {validateJwt} from '../../middlewares/validate.jwt.js'
import {validateRole} from '../../middlewares/validateRole.js'


const api = Router() 

api.post('/teacher/courses', validateJwt , validateRole(['TEACHER_ROLE']), createCourse)  
api.put('/teacher/courses/:courseId', validateJwt , validateRole(['TEACHER_ROLE']), editCourse)  
api.delete('/teacher/courses/:courseId',validateJwt , validateRole(['TEACHER_ROLE']), deleteCourse)  
api.get('/teacher/courses/:teacherId', validateJwt , validateRole(['TEACHER_ROLE']) ,viewCoursesByTeacher)  

export default api 