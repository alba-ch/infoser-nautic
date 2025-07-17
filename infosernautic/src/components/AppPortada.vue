<template>

  <div id="app">
    <header>
      <div class="logo">
        <img src="../assets/portada/LOGO.png" alt="Logo" />
      </div>
      <div class="page-name">
        <p><i>Informes y Servicios<br>Náuticos SL</i></p>
      </div>
    </header>

    <!-- Main Section -->
    <section id="main" class="main">
      <div class="main-content">
        <h1><b><i>Infoser Nautic SL<br></i></b></h1>
        <h2><span class="title-blue">“Los Clásicos” </span><span class="black"> <i> desde/</i> since 1994</span></h2>
        <div class="cambria">
          <h3>Peritajes & Asistencia técnica</h3>
          <p>para todo tipo de embarcaciones deportivas.</p>
          <h3>Survey & Technical Assistance</h3>
          <p>for all types of yacht & sport boats.</p>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu">
      <h3>MENÚ</h3>
      <router-link to="/servicios">SERVICIOS</router-link>
      <router-link to="/mundo-barco">EL MUNDO DEL BARCO</router-link>
      <router-link to="/tarifas">TARIFAS</router-link>
      <router-link to="/about-us">MI HISTORIA</router-link>
      

    </section>

    <div class="shop-link-container">
      <a href="https://ko-fi.com/infosernautic/shop" target="_blank" rel="noopener noreferrer">
        VISITA NUESTRA TIENDA / VISIT OUR SHOP
      </a>
      <!--<router-link to="/tienda">VISITA NUESTRA TIENDA / VISIT OUR SHOP</router-link>
      -->
    </div>

    <!-- Google Sheets Link Section -->
    <div class="sheet-link-container">
      <a href="https://docs.google.com/spreadsheets/d/1t-13y7u2cRWIYO2ZxsN-SJXvm92NRyjn0SESdOsw0qQ/view?usp=drive_link"
        target="_blank" rel="noopener noreferrer">
        BARCOS especiales rodajes, cine, publicidad, eventos privados.
      </a>
    </div>


    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h4>CONTACTAR</h4>
      <!-- Three icons -->
      <div class="contact-icons">
        <img src="../assets/portada/TEL.png" alt="Telephone" />
        <img src="../assets/portada/WU.png" alt="WhatsApp" />
        <img src="../assets/portada/TELEGRAM.png" alt="Telegram" />
      </div>
      <div class="contact-info">
        <img src="../assets/portada/SPAIN.png" alt="España" />
        609 448 459
      </div>
      <div class="contact-email">
        <img src="../assets/portada/MAIL.png" alt="Email" />
        <a href="mailto:barcosclasicos@infosernautic.com">barcosclasicos@infosernautic.com</a>
      </div>
      <div class="contact-address">
        <img src="../assets/portada/MONI.png" alt="Contact" />
        <div>
          <p>Dónde estamos? / Where we are?</p>
          <p>M/S Bakea, Muelle de España<br>s/n, BARCELONA 08039</p>
        </div>


      </div>
      <div class="reminder">
        <p>Solo atendemos bajo visita concertada.<br />
          We only attend by prior appointment
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    scrollToSection() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style>
/* Global Styles */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #17365d !important;
  text-align: center !important;
  background-image: url('../assets/portada/PORTADA.jpg');
  background-size: cover;
}

/* Header Styles */

header {
  padding: 1.7em;
  justify-content: space-between;
  display: flex;
}

.page-name {
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
}

.logo {
  text-align: left;
}

/* Shop Link Styles */

.shop-link-container {
  text-align: center;
  margin: 1em 0;
}

.shop-link-container a {
  font-family: 'Arial', sans-serif;
  color: #0000ff !important;
  font-weight: bold !important;
  font-size: 1.2rem;
  font-style: italic;
}

.shop-link-container a:hover {
  color: #5f99ff !important;
}

/* Main Section Styles */

.title-blue {
  font-family: 'Dancing Script';
  font-size: 2.5rem;
}

.black {
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Calibri', sans-serif;
}

.cambria {
  padding-top: 1.7em;
  font-family: 'Cambria', serif;
  font-style: italic;
  font-weight: 400;
}

.cambria h3 {
  font-size: 2.3rem;
  margin: 0;

}

.cambria p {
  font-size: 1.15rem;
  margin: 0.2em 0;
  padding-top: 0px;
}

/* Menu Section Styles */

.menu {
  font-family: 'Arial', sans-serif;
  color: black;
  font-weight: lighter !important;
  padding: 1em;
  padding-top: 2em;
  font-size: 1.5rem;
}

.menu a {

  padding-inline: 1em;
  font-weight: 600;
  font-style: italic;
  font-size: 0.9rem;
  color: #1155cc !important;
}

.menu a:hover {
  color: #5f99ff !important;
}

.sheet-link-container a {
  font-family: 'Arial', sans-serif;
  color: #0000ff !important;
  font-weight: bold !important;
  font-size: 0.9rem;
  font-style: italic;
}

/* Contact Section Styles */

.contact {
  padding: 1em;
  font-family: 'Arial', sans-serif;
  color: black;
  font-weight: lighter !important;
  font-size: 1.5rem;
}

.contact h4 {
  font-family: 'Verdana', sans-serif;
  font-style: italic;
  font-size: 2.2rem;
  font-weight: 600;
  color: #1155cc !important;
  margin: 0.5em 0;
}

.contact img {
  width: 2.3em;
  height: 2.3em;
  margin: 0.5em;
}

.contact-info {
  display: flex;
  font-family: 'Comic Sans MS', sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.contact-info img {
  height: 1.2em;
  width: 1.6em;
  margin-right: 0.5em;
}

.contact-email {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.contact-email img {
  height: 3.4rem;
  width: 3.5rem;
  margin-right: 0.5em;
}

.contact-email a {
  color: #1155cc !important;
  font-family: 'Comic Sans MS';
  font-weight: lighter;
}

.contact-email a:hover {
  color: #5f99ff !important;
}

.contact-address {
  color: black;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 1.5rem;
  margin: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-address img {
  height: auto;
  width: 11em;
  margin-right: 0.5em;
}

.contact-address div {
  text-align: left;
}

.reminder {
  justify-self: center;
  text-align: left;
  font-family: 'Comic Sans MS', sans-serif;
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 0.5em;
  padding-right: 15em;
}


/* Responsive Styles */
@media (max-width: 768px) {

  /* Header */
  header {
    flex-direction: column;
    align-items: center;
    padding: 1em 0.5em;
  }

  .logo {
    margin-bottom: 0.5em;
    text-align: center;
  }

  .logo img {
    max-width: 150px;
    height: auto;
  }

  .page-name {
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  /* Main Section */
  .main-content h1 {
    font-size: 1.8rem;
  }

  .title-blue {
    font-size: 1.8rem;
  }

  .black {
    font-size: 1.1rem;
  }

  .cambria h3 {
    font-size: 1.3rem;
  }

  .cambria p {
    font-size: 1rem;
  }

  /* Menu Section */
  .menu {
    font-size: 1rem;
    padding: 1em 0.5em;
  }

  .menu a {
    display: block;
    padding: 0.5em 0;
    font-size: 1.1rem;
  }

  /* Contact Section */
  .contact {
    font-size: 1.1rem;
    padding: 1em 0.5em;
  }

  .contact h4 {
    font-size: 1.5rem;
  }

  .contact-icons img {
    width: 2em;
    height: 2em;
    margin: 0.3em;
  }

  .contact-info {
    font-size: 1.3rem;
    gap: 0.3em;
  }

  .contact-info img {
    margin: 0 0 0.3em 0;
  }

  .contact-email {
    display: inline-flex;
    gap: 0.3em;
    font-size: 1.1rem;
  }

  .contact-email img {
    width: 2.5em;
    height: auto;
    margin: 0 auto;
  }

  .contact-email a {
    font-size: 1.1rem;
  }

  .contact-address {
    flex-direction: column;
    font-size: 1.1rem;
  }

  .contact-address img {
    width: 8em;
    margin-bottom: 0.5em;
  }

  .contact-address div {
    text-align: center;
  }

  .reminder {
    padding-right: 1em;
    font-size: 1rem;
    text-align: center;
    margin-top: 1em;
  }
}

@media (max-width: 480px) {
  .logo img {
    max-width: 120px;
  }

  .page-name {
    font-size: 0.9rem;
  }

  .main-content h1 {
    font-size: 1.5rem;
  }

  .title-blue {
    font-size: 1.5rem;
  }

  .black {
    font-size: 1rem;
  }

  .cambria h3 {
    font-size: 1.2rem;
  }

  .cambria p {
    font-size: 0.9rem;
  }

  .contact-email img {
    width: 2em;
    font-size: 1rem;
  }
}
</style>