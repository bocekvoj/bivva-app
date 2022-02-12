<template>
    <form @submit="onSubmit" class="add-form">
     
      <div class="form-control">
      <label>Course ID {{courseDetail.course_id}}</label>
      
    </div>
    <div class="form-control">
      <label>Course name</label>
      <input type="text" v-model="course_name" name="course_name" :placeholder="courseDetail.course_name" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="datetime-local"
        v-model="course_date"
        name="course_date"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control">
      <label>Description</label>
      <input type="text" v-model="course_description" name="course_description" :placeholder="courseDetail.course_description" />
    </div>
    <div class="form-control">
      <label>Tutor</label>
      <input type="number" v-model="tutor_id" name="tutor_id" :placeholder="courseDetail.tutor_id" />
    </div>

    <input type="submit" value="Update Course" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'UpdateCourse',
  props: ['courseDetail'],
  
  data() {
    return {
      
          course_id: '',
          course_name: '',
          tutor_id: '',
          course_date: '',
          course_description:''

        
      }
      
      
    },
  
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.course_name) {
        alert('Please add a course')
        return
      }
      const updatedCourse = {
        // id: Math.floor(Math.random() * 100000),
        course_name: this.course_name,
        tutor_id: this.tutor_id,
        course_date: this.course_date,
        course_description: this.course_description,
        
      }
      
      this.$emit('update-course', this.course_id, updatedCourse)

      this.course_name = ''
      this.tutor_id = ''
      this.course_date = ''
      this.course_description = ''
      
      //console.log(newCourse)
    },
  },
  computed: { 


  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>