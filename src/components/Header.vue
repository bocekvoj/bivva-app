<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
            @toggle-add-course="$emit('toggle-add-course')"
            :text = "'Add course'"
            :color="showAddCourse ? 'grey' : 'green'"
        />
    </header>
</template>

<script>
import Button from './Button'

export default{
    name:'Header',
    props: ['title'],
    components: {
        Button
    }
}

</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>