import Course from '../course/course.model.js';
import User from '../user/user.model.js';

// Asignar curso
export const assignCourse = async (req, res) => {
    const { userId, courseId } = req.params;  // Obtener userId y courseId desde los parámetros de la URL

    try {
        const user = await User.findById(userId);  // Usar el userId desde los parámetros
        if (!user) return res.status(404).send({ message: 'User not found' });

        if (user.courses.length >= 3) {
            return res.status(400).send({ message: 'You can only enroll in up to 3 courses' });
        }

        if (user.courses.includes(courseId)) {
            return res.status(400).send({ message: 'You are already enrolled in this course' });
        }

        user.courses.push(courseId);
        await user.save();
        res.send({ message: 'Course assigned successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};


// Visualizar cursos asignados
export const viewCourses = async (req, res) => {
    const { userId } = req.params;  // Obtener userId desde los parámetros de la URL

    try {
        const user = await User.findById(userId).populate('courses');  // Obtener el usuario por userId
        if (!user) return res.status(404).send({ message: 'User not found' });

        res.send(user.courses);  // Mostrar los cursos en los que está asignado el usuario
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};


// Editar perfil
export const editProfile = async (req, res) => {
    const { userId } = req.params;  // Obtener userId de la URL
    const { name, surname, username, email } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, { name, surname, username, email }, { new: true });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Eliminar perfil
export const deleteProfile = async (req, res) => {
    const { userId } = req.params;  // Obtener userId de la URL

    try {
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.send({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
