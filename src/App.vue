<template>
<div class="container">
<Header @toggle-add-course="toggleAddCourse" title="Course Tracker" />
<div v-show="showAddCourse">
<AddCourse @add-course="addCourse"/>
</div>
<div v-if="courseDetail.course_id">
<CourseShow @update-course="updateCourse" :courseDetail= "courseDetail" />
</div>
<Courses 
  @delete-course="deleteCourse" 
  @show-update-course="toggleUpdateCourse" 
  :courses= "courses" 
/>
</div>
</template>

<script>
import Header from './components/Header'
import Courses from './components/Courses'
import AddCourse from './components/AddCourse'
import CourseService from './services/CourseService'
import CourseShow from './components/CourseShow'


export default {
  name: 'App',
  components: {
    Header,
    Courses,
    AddCourse,
    CourseShow,
  },
  data() {
    return{
      
      courses: [],
      showAddCourse: false,
      //showUpdateCourse: false,
      
      courseDetail:''
      
      
      
    }
  },
  methods:{
    toggleAddCourse(){
      this.showAddCourse = !this.showAddCourse
    },
    
    toggleUpdateCourse(course_id){
      console.log('toggle' + course_id) 
      //this.showUpdateCourse = !this.showUpdateCourse
      CourseService.getCourse(course_id)
       .then(response => {
         this.courseDetail = response.data
       })
       .catch(error => {
         console.log (error.response)
       })

    },
  
  updateCourse(course_id, updatedCourse) {
      CourseService.updateCourse(course_id, updatedCourse)
      .then(response => {
         this.courses = [...this.courses, response.data]
       })
       .catch(error => {
         console.log (error.response)
       })

  },
   addCourse(newCourse) {

      console.log (newCourse);

       CourseService.postCourse(newCourse)
       .then(response => {
         this.courses = [...this.courses, response.data]
       })
       .catch(error => {
         console.log (error.response)
       })

       
      
        
    },
    deleteCourse(course_id){
    
      console.log('course',course_id);
      CourseService.deleteCourse(course_id)
       .then(response => {
         console.log(response.data)
         this.courses = this.courses.filter((course) => course.course_id !== course_id)
       })
       .catch(error => {
         console.log (error.response)
       })

     //this.courses = this.courses.filter((course) => course.id !==id)
    },
    //async fetchCourses(){
      //const res = await fetch('/api/courses/all')
            
      //const data = await res.json()
      
      //return data
    //}
  },
  async created() {
    //this.courses = await this.fetchCourses()
    CourseService.getCourses()
       .then(response => {
         this.courses = response.data
       })
       .catch(error => {
         console.log (error.response)
       })
    
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
