<template>
    <div 
        :class="'course'"
    >
    <h3>
        {{ course.course_name }}
        <i @click="$emit('delete-course', course.course_id)" class="fas fa-times"></i>
        
    </h3>
    <p>
        {{ course.course_description }}
        <i @click="$emit('show-update-course',course.course_id)" class="fa-solid fa-pen"></i>
    </p>
</div>
</template>

<script> 
export default {
    name: 'Course',
    props: {
        course: Object
    },
  
}

</script>

<style scope>
.fas {
  color: red;
}
.course {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.course.reminder {
  border-left: 5px solid green;
}
.course h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.course p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>