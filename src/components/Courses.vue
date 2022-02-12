<template>
    <div :key="course.course_id" v-for="course in courses"> 
        <Course 
        @delete-course ="$emit('delete-course', course.course_id)"
        @show-update-course ="$emit('show-update-course', course.course_id)" 
        :course="course" 
        />
    </div>

</template>

<script> 
import Course from './Course'
    export default {
        name: 'Courses',
        props: {
            courses: Array
        },
        components: {
            Course,
        },
        emits: ['delete-course', 'show-update-course'],
    }
</script>