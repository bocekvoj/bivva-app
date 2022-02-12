import axios from 'axios'

const apiClient = axios.create({
    //baseURL: 'http://localhost:50208',
    proxy: 'http://localhost:50208',
    withCredentials: false,
    //mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCourses() {
        return apiClient.get('/api/courses/all')
    },
    getCourse(id) {
        return apiClient.get('/api/courses/detail/' + id)
    },
    postCourse(course) {
        return apiClient.post('/api/courses/create', course)
    },
    deleteCourse(id) {
        return apiClient.delete('/api/courses/delete/' + id)
    },
    updateCourse(id, course) {
        return apiClient.put('/api/courses/update/'+ id, course)
    }
}