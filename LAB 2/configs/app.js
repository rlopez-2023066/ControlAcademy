'use strict'

//ECModules | ESModules
import express from 'express' //Servidor HTTP
import morgan from 'morgan' //Logs
import helmet from 'helmet' //Seguridad para HTTP
import cors from 'cors' //Acceso al API
import authRoutes from '../src/auth/auth.routes.js'
import studentRouter from '../src/student/student.routes.js'
import teacherRouter from '../src/teacher/teacher.routes.js'
//Configuraciones de express
const configs = (app)=> {
    app.use(express.json()) //Aceptar y enviar datos en JSON
    app.use(express.urlencoded({extended: false})) //No encriptar la URL
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=> {
    app.use(authRoutes)
    app.use(studentRouter)
    app.use(teacherRouter)
}

//Ejecutamos el servidor
export const initServer = ()=> {
    const app = express() //Instancia de express
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    } catch (err) {
        console.error('Server init failed', err)
    }
}
