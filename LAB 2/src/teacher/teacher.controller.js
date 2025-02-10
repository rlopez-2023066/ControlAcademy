import Course from '../course/course.model.js';
import User from '../user/user.model.js';

// Crear Curso
export const createCourse = async (req, res) => {
    const { name, description, area, teacher } = req.body;
    
    try {
        const newCourse = new Course({
            name,
            description,
            area,
            teacher
        });

        await newCourse.save();
        res.status(201).send({ message: 'Course created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error creating course', error });
    }
};

// Editar Curso
export const editCourse = async (req, res) => {
    const { courseId } = req.params;
    const { name, description, area } = req.body;

    if (!name || !description || !area) {
        return res.status(400).send({ message: 'Please fill all fields' });
    }

    try {
        const course = await Course.findByIdAndUpdate(courseId, { name, description, area }, { new: true });

        if (!course) {
            return res.status(404).send({ message: 'Course not found' });
        }

        res.send(course);
    } catch (error) {
        res.status(500).send({ message: 'Error editing course', error });
    }
};

// Eliminar Curso
export const deleteCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).send({ message: 'Course not found' });

        await User.updateMany({ courses: courseId }, { $pull: { courses: courseId } });
        await Course.findByIdAndDelete(courseId);
        res.send({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Visualizar cursos por teacherId manual
export const viewCoursesByTeacher = async (req, res) => {
    const { teacherId } = req.params; // Recibir teacherId desde la URL

    try {
        const courses = await Course.find({ teacher: teacherId });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
