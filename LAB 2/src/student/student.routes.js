import { Router } from "express" 
import { assignCourse, viewCourses, editProfile, deleteProfile } from '../student/student.controller.js' 
import {validateRole} from '../../middlewares/validateRole.js'
import {validateJwt} from '../../middlewares/validate.jwt.js'
const api = Router() 

api.post('/student/:userId/courses/:courseId',validateJwt , validateRole(['STUDENT_ROLE']), assignCourse)   
api.get('/students/:userId',validateJwt, validateRole(['STUDENT_ROLE']), viewCourses)   
api.put('/students/profile/:userId',  validateJwt,validateRole(['STUDENT_ROLE']), editProfile)   
api.delete('/students/profile/:userId', validateJwt,validateRole(['STUDENT_ROLE']), deleteProfile)   

export default api 
