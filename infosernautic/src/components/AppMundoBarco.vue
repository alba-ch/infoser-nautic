<template>

  <div class="mundo-barco container">
    <div class="text">
    <div class="no-flex-section">
        <h3>EL MUNDO DEL BARCO
          <br>
          de recreo!
        </h3>
        <p>
          Del mar se puede disfrutar de muchas maneras, en barco de motor, vela, remos, la variedad es amplia, sea cual sea tu barco, es necesario que tengas un buen <b>SEGURO y GESTOR</b>, y Eolo o Poseidón no lo quieran, un buen <b>ABOGADO</b>.
<br><br>
El corredor de <b>SEGUROS</b> de confianza y que recomendamos es <b>NAUTIA SEGUROS</b>,  <b>Álvaro</b> nos ha conseguido seguros hasta para los barcos más difíciles.
<br><br>

<span class="text-medium">Contacta con Alvaro de Falguera  <a href="https://www.nautia.net">https://www.nautia.net</a></span>
        </p>
      </div>

    <div class="no-flex-section" style="margin-top: 22em;">
      <p>
        También es importante tener una <b>GESTORIA NÁUTICA</b>, que además si navega  va a entender tus problemas con el abanderamiento, cambio de titular, o lo que precises.
        <br><br>
        Nosotros siempre hemos confiado en las 2 mejores gestoras náuticas de España. Cristina Guiral y Mari Ramos.
        <br><br>
        <span class="text-medium">Contacta con <b>CRISTINA GUIRAL</b>: <a href="https://guiral.es/asesoria-nautica">https://guiral.es/asesoria-nautica</a></span>
        <br>
        <span class="text-medium">Contacta con <b>MARI RAMOS</b>: <a href="https://mrasesoresnauticos.com/nosotros">https://mrasesoresnauticos.com/nosotros</a></span>
      </p>
    </div>

    <div class="no-flex-section" style="margin-top: 17.5em;">
      <p>
        Ojala nunca necesites un <b>ABOGADO</b>, pero si se da el caso, que sea el mejor especialista en derecho marítimo que tenemos en España. No lo dudes, contacta con Yamandu, armador, navegante, regatista y abogado especializado!
        <br><br>
        <span class="text-medium">Contacta con <b>Yamandú Caorsi</b> : <a href="https://nauticalegal.com/es">https://nauticalegal.com/es</a></span>
      </p>
    </div>
  </div>

    <section class="first-section">

     
    </section>

    <section class="second-section">
    </section>

    <section class="third-section">
    </section>
  </div>

</template>

<style>
/* Global Styles */
.container {
  font-family: 'Arial', sans-serif;
  justify-self: center;
  max-width: 59em;
  min-height: 80em;
  margin: 0 auto;

}

.mundo-barco {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: black;
  background-color: white;
}

.mundo-barco .first-section {
  background-image: url('../assets/mundo-del-barco/FOTO 1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 39.5em;
  filter: brightness(1.7);
  opacity: 0.85;
}

.mundo-barco .second-section {
  background-image: url('../assets/mundo-del-barco/FOTO 2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(2);
  min-height: 31em;
  opacity: 0.3;
}

.mundo-barco .third-section {
  background-image: url('../assets/mundo-del-barco/FOTO 3.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 29em;
  filter: brightness(1.3);
}


.mundo-barco .flex-section {
  display: flex;
}

.mundo-barco .no-flex-section {
  padding-inline: 20px;
  margin-left: 8%;
  margin-right: 10%;
}

.text {
  position: absolute; /* Position the text container absolutely */
  max-width: 59em;
  color: black; /* Ensure text is visible on the background */
  z-index: 10; /* Ensure the text is above the background */
  margin: 0 auto;
}

.text h3 {
  font-size: 2rem;
  margin: 0;
  padding-top: 1.7em;
  font-style: italic;
  font-weight: 600;
  padding-bottom: 0.5em;
}

.text p {
  font-size: 1.2rem;
  text-align: left;
}

.text .text-medium {
  font-size: 1.4rem;
}

/* solo el primer ancla */
.text .text-medium a:first-child {
  background-color: yellow;
  text-decoration: underline;
  font-size: 1.4rem;
  margin-right: 0.5em;
  font-weight: 600;

}

.text .text-medium a {
  color: #1155cc !important;
  margin-left: 0.5em;
}

.mundo-barco .text-medium a:hover {
  color: #5f99ff !important;
}

@media (max-width: 768px) {
  .text {
    position: absolute; /* Mantenemos posición absoluta */
    max-width: 90vw;     /* Usamos casi todo el ancho de la ventana */
    left: 50%;           /* Centramos horizontalmente */
    transform: translateX(-50%);
    padding: 0 1em;      
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  .mundo-barco .no-flex-section {
    margin-left: 5%;
    margin-right: 5%;
    padding-inline: 10px;
    margin-top: 15em !important;
  }

  .mundo-barco .no-flex-section:first-child {
    margin-top: 0 !important;
  }

  .text h3 {
    font-size: 1.5rem;
    padding-top: 1.7em;
    padding-bottom: 0.5em;
    font-style: italic;
    font-weight: 600;
  }

  .text p {
    font-size: 1rem;
    text-align: justify;
    line-height: 1.4em;
  }

  .text .text-medium {
    font-size: 1.1rem;
  }

  .text .text-medium a:first-child {
    font-size: 1.1rem;
    background-color: yellow;
    text-decoration: underline;
  }

  .text .text-medium a {
    margin-left: 0.3em;
  }

  .third-section {
    min-height: 40em !important;
    background-size: cover !important;
  }

}

@media (max-width: 480px) {

  .text {
    position: absolute; /* Mantenemos posición absoluta */
    max-width: 90vw;     /* Usamos casi todo el ancho de la ventana */
    left: 50%;           /* Centramos horizontalmente */
    transform: translateX(-50%);
    padding: 0 1em;      
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  .mundo-barco .no-flex-section {
    margin-top: 8em !important;
  }

  .mundo-barco .no-flex-section:first-child {
    margin-top: 0 !important;
  }

}


</style>