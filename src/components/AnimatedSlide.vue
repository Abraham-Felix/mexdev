<style>

.as-h3 {
    color: #47484a;
}

.coolh1 {
    padding-top: 35x;
}

.newfeaturesheader {
    height: 150px;
    font-size: 30px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: white !important;
}

@keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-moz-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-webkit-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-ms-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

@-o-keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -300px 0;
    }
}

#animate-area {
    width: 100%;
    position: inherit;
    height: 150px;
    background-image: url(../assets/just-clouds.png);
    background-position: 0px 0px;
    animation: animatedBackground 10s linear infinite;
    -moz-animation: animatedBackground 10s linear infinite;
    -webkit-animation: animatedBackground 10s linear infinite;
    -ms-animation: animatedBackground 10s linear infinite;
    -o-animation: animatedBackground 10s linear infinite;
}

</style>

<template>

<div>
    <h3 class="as-h3">Get back on track with top technologies:</h3>
    <v-divider class="my-10" />

          <v-img class="mx-16 mb-n16" src="../assets/UxUi-tech.png" />
    <section id="animate-area">
        <div class="newfeaturesheader mx-16 ">
        </div>
    </section>
</div>

</template>

<script>

export default {
    name: 'AnimatedSlide'
}

</script>
