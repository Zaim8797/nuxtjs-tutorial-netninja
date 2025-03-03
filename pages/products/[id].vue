<template>
    <div>
        <p>Product detail for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates mollitia officia dolores cupiditate molestiae, consequatur voluptatem itaque, natus, saepe minima culpa animi nostrum a beatae? Velit aut quos dicta?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })  
</script>

<style scoped>

</style>