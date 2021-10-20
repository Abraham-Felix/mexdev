<style scoped>

.tutshow {
    background: #313233;
    color: #ffffff !important;
}

.tutorial-giff {
    max-width: 500px;
    height: auto;
    width: auto;
    border-radius: 5px;
    margin: 50px;
    transition: 1.3s;
}

@media screen and (max-width:900px) {
    .tutorial-giff {
        width: 80% !important;
        border-radius: 5px;
        margin: auto;
    }
}

h1 {
    margin-bottom: 1vw;
}

.bold {
    -webkit-text-stroke-width: medium;
}

.v-card {
    display: inline-block;
    max-width: 600px !important;
    width: 100% !important;
}

.margin {
    margin: 10px !important;
}

.mx-auto {
    margin-top: 10vw;
    margin-bottom: 10vw;
}

.v-input .v-label {
    margin: 0.4vw !important;
}

</style>

<template>

<main>
    <div class="pt-5 mt-15">
        <h1> Cursos tutoriales </h1>
        <hr>
        <TutShow/>
    </div>
</main>

</template>

<script>

import TutShow from '../components/TutShow.vue';

export default {
    name: 'Tutorials',
    components: {
        TutShow,
    }
}

</script>
