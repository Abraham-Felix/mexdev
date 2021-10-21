<style scoped>

h1 {
    margin-bottom: 1vw;
}
.office-img{
  margin:50px;
}
.bold {
    -webkit-text-stroke-width: medium;
}

.about-card {
  max-width:900px;
}

.v-card {
    display: inline-block;
}

.margin {
    margin: 10px !important;
}

.mx-auto {
    margin-top: 10vw;
    margin-bottom: 10vw;
}

.v-image {
    z-index: 0;
}
.pleads {
  width: 50%;
}

.col-b {
    width: 33%;
    display: -webkit-inline-box;
    -webkit-box-pack: center;
}

.col-100 {
    width: 100%;
}

p {
    display: inline;
    text-align: left !important;
}

h4 {
    text-align: left;
    color: #313233;
}

.text-center {
    text-align: center;
}

.gray {
    color: gray;
}
.fav {
  height: 50px;
  width: 50px;
}
</style>

<template>

<v-card class="mt-5 mb-5 about-card">
    <h1> About </h1>
    <v-img class="center fav" src="../assets/mxdv-fav.png" />
    <v-card-text class="text-justify font-weight-medium  text-body-2">
        <h4><b>Vision:</b></h4>
        <br>
        <v-divider class="mb-5"></v-divider>
        <v-img class="mb-5 office-img" src="../assets/graphics/mxdv-home-office.jpg" />
        <div class="pt-10">
          <h4 class="mt-10"><b>Introducción:</b></h4>
          <br>
          <v-divider></v-divider>
          <br>
            <b class="text-h6">Hola!</b>, mi nombre <a target="_blank" href="https://www.github.com/abraham-felix">Abraham Felix</a>,
            Soy un ser humano, me encantaría presentarles a <b> MexDev! </b>, un equipo de soporte para el desarrollo de aplicaciones web, como equipo proporcionamos soluciones de codificación
            como servicio, creando o actualizando productos digitales para particulares, empresas y contratistas, nos enfocamos en modelos de negocio online, somos personas orgánicas de home office con gran energía.
          <br><br>
            Me encanta trabajar duro, lo que e aprendido de mi <b> Dios amoroso </b>, me en foco en el estudio de conceptos de alto nivel y mejorar o implementar constantemente aprendiendo de nuevas tecnologías,
            no me gusta lo obsoleto y difícil de usar que puede ser de mucho mantenimiento y muy caro. Suena algo doloroso, en especial si son una empresa ¿verdad?.  pero muchas empresas están sufriendo hoy por este motivo.
            ¡Pero no se preocupen, porque la tecnología más sofisticada está aquí, proporcionando un desarrollo simple, fácil de mantener, modular y eficazmente rápido! y en lugar de usar 100 manos, diseñamos sistemas automatizados
            creados para disminui el mantenimiento y costo, asi ayudamos a optimizar las empresas digitales emergentes".
        <h4 class="mt-10">
          <b>El proyecto posee una gran visión:</b>
        </h4>
        <br>
        <v-divider></v-divider>
        <br>

        ¡La visión de <b> Mexdev </b> es fresca y genial!. Brindamos un servicio 100% remoto, con fundadores de proyectos en USA y MX. Tenemos más de 15 años de experiencia combinada en desarrollo de software.
        Mexdev está buscando fondos actualmente, pero proporcionamos nuestro servicio de soporte independientemente, todo con nuestras habilidades para programar y desarrollar productos.
        <br>
        <h4 class="mt-10">
          <b>Servicios y objetivos del proyecto:</b>
        </h4>
        <br>
        <hr>
            <br>
            <br> <b> El talento en desarrollo de software </b> es caro. Contratar nuevos desarrolladores para un proyecto también es arriesgado, ya que las habilidades de un desarrollador pueden no coincidir con su currículum y porque algunos ingenieros no se mantienen actualizados en los últimos lenguajes, plataformas y mejores prácticas.
            A medida que se expande el trabajo remoto, también lo hace el número de solicitantes, lo que crea un riesgo aún mayor para los gerentes de contratación. entonces, ¿por qué no contratar a un equipo como Mexdev?
            <br>
            <br> Nuestro objetivo es entregar ideas y desarrollo de software de alta calidad a un precio asequible, de parte de desarrolladores cuyas habilidades y productividad se evalúan regularmente. Utilizamos metodologías ágiles, intercambio seguro de información y productividad y
            herramientas de evaluación de habilidades para eliminar los riesgos de contratar ayuda externa.

        <h4 class="mt-10"><b>por que somos diferentes?</b></h4>
        <br>
      </div>
        <v-divider></v-divider>
        <br>
        <v-list-item>
            <v-list-item-content>
              <v-list-item> ● Mexdev ofrece una alternativa a la contratación de nuevo personal para proyectos grandes y pequeños. </v-list-item>
              <v-list-item> ● Nuestro equipo está disponible para contratar proyectos de cualquier duración, ampliando nuestra curva de aprendizaje o agregando nuevos miembros. </v-list-item>
              <v-list-item> ● Ofrecemos precios simples, claros y asequibles en todo nuestro trabajo. </v-list-item>
              <v-list-item> ● Mexdev brinda transparencia, valor, confianza y flexibilidad en el proceso de desarrollo. </v-list-item>
              <v-list-item> ● Lo ayudamos a lograr sus objetivos sin la necesidad de realizar nuevas contrataciones costosas que pueden dañar sus resultados, ahora y en los años venideros. </v-list-item>
            </v-list-item-content>
        </v-list-item>
        <h4 class="mt-10"><b>Líderes del proyecto:</b></h4>
        <br>
        <v-divider></v-divider>
        <br>
    </v-card-text>
    <v-row>
          <v-col cols="6" >
              <div>
                  <v-img
                  alt="Abraham Felix"
                  class="pleads center rounded-lg"
                  src="@/assets/ab-felix.png"
                   />
              </div>
              <div>
               <p><b> <a target="_blank" href="https:/www.github.com/abraham-felix"> Abraham Felix</a> </b></p>
               <br>
               <p> FullStack </p>
               <br>
               <p><b>Mexico</b></p>
              </div>
          </v-col>
          <v-col cols="6">
              <div >
                  <v-img
                  alt="Abraham Felix"
                  class="pleads center rounded-lg"
                  src="@/assets/kevin-naf.jpg"
                    />
              </div>
              <div>
              <p> <b> <a target="_blank" href="https:/www.github.com/kevinnafziger"> Kevin Nafziger </a> </b></p>
              <br>
              <p> FullStack </p>
              <br>
              <p><b>USA</b></p>
             </div>
           </v-col>
          <br>
          <br>
      </v-row>
</v-card>

</template>
