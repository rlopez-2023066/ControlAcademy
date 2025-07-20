# 🎓 Laboratorio #2 - Sistema de Control de Alumnos (Backend)

Este proyecto es una **API RESTful** desarrollada con **Node.js**, **Express** y **MongoDB**, diseñada para gestionar la administración académica de alumnos y maestros en un centro educativo. La aplicación permite el registro, autenticación y gestión de cursos con roles específicos para estudiantes y profesores.

---

## 📌 Descripción General

El sistema permite:

- A los estudiantes, registrarse, asignarse a cursos (máximo 3), y gestionar su perfil.
- A los maestros, crear y administrar cursos con control total sobre sus asignaciones y alumnos relacionados.

---

## 👥 Roles del Sistema

### 👨‍🎓 Alumno (`STUDENT_ROLE`)

- Registro automático con rol `STUDENT_ROLE`.
- Inicio de sesión.
- Asignación a un máximo de 3 cursos (no puede repetir).
- Visualización de cursos asignados.
- Edición y eliminación de su perfil.

### 👨‍🏫 Maestro (`TEACHER_ROLE`)

- Registro con rol `TEACHER_ROLE`.
- Inicio de sesión.
- CRUD de cursos propios.
- Edición de cursos con actualización automática en los alumnos asignados.
- Eliminación de cursos con desasignación automática de los alumnos inscritos.

---

## 🔒 Validaciones y Seguridad

- **JWT** para autenticación y autorización.
- Validaciones implícitas:
  - No duplicar asignaciones a cursos.
  - Límite de 3 cursos por alumno.
  - Verificaciones en edición y eliminación de cursos con alumnos.

---

## 🛠 Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** (autenticación)
- 
---

