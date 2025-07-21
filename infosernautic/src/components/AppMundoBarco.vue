<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero">
      <nav class="navbar">
        <div class="logo">
          <img src="../assets/logo-black.png" alt="INFOSER NAUTIC" class="logo-white" />
        </div>
        <div class="navbar-right">
          <div class="language-selector">
            <button @click="toggleLanguage" class="lang-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" fill="white"/>
              </svg>
              {{ currentLanguage === 'es' ? 'ES' : 'EN' }}
            </button>
          </div>
          <button class="contact-btn">{{ currentLanguage === 'es' ? 'Contacto' : 'Contact Us' }}</button>
        </div>
      </nav>
      
      <div class="hero-content">
        <div class="hero-center">
          <div class="company-name">
            <h1 class="hero-title">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'THE BOAT WORLD' }}</h1>
            <h2><span class="subtitle-text">{{ currentLanguage === 'es' ? 'de recreo!' : 'for recreation!' }}</span></h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Menu -->
    <nav class="main-menu" ref="mainMenu">
      <div class="menu-content">
        <div class="menu-logo">
          <img src="../assets/logo-black.png" alt="INFOSER NAUTIC" class="logo-white" />
        </div>
        <div class="menu-items-nav">
          <router-link to="/servicios" class="menu-link-nav">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
          <router-link to="/mundo-barco" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
          <router-link to="/tarifas" class="menu-link-nav">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
          <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
        </div>
      </div>
    </nav>

    <!-- Content with Background Images -->
    <div class="mundo-barco-container">
      <!-- First Section: Insurance -->
      <section class="content-section first-section">
        <div class="text-overlay">
          <div class="text-card">
            <h3>{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'THE BOAT WORLD' }}<br>{{ currentLanguage === 'es' ? 'de recreo!' : 'for recreation!' }}</h3>
            <p>
              {{ currentLanguage === 'es' ? 'Del mar se puede disfrutar de muchas maneras, en barco de motor, vela, remos, la variedad es amplia, sea cual sea tu barco, es necesario que tengas un buen' : 'You can enjoy the sea in many ways, by motor boat, sailing, rowing, the variety is wide, whatever your boat, you need to have good' }} <strong>{{ currentLanguage === 'es' ? 'SEGURO y GESTOR' : 'INSURANCE and MANAGER' }}</strong>, {{ currentLanguage === 'es' ? 'y Eolo o Poseidón no lo quieran, un buen' : 'and may Aeolus or Poseidon not want it, a good' }} <strong>{{ currentLanguage === 'es' ? 'ABOGADO' : 'LAWYER' }}</strong>.
            </p>
            <p>
              {{ currentLanguage === 'es' ? 'El corredor de' : 'The' }} <strong>{{ currentLanguage === 'es' ? 'SEGUROS' : 'INSURANCE' }}</strong> {{ currentLanguage === 'es' ? 'de confianza y que recomendamos es' : 'broker we trust and recommend is' }} <strong>NAUTIA SEGUROS</strong>, <strong>Álvaro</strong> {{ currentLanguage === 'es' ? 'nos ha conseguido seguros hasta para los barcos más difíciles.' : 'has gotten us insurance even for the most difficult boats.' }}
            </p>
            <div class="contact-highlight">
              <span class="contact-label">{{ currentLanguage === 'es' ? 'Contacta con Alvaro de Falguera' : 'Contact Alvaro de Falguera' }}</span>
              <a href="https://www.nautia.net" class="contact-link highlighted">https://www.nautia.net</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Second Section: Management -->
      <section class="content-section second-section">
        <div class="text-overlay">
          <div class="text-card">
            <p>
              {{ currentLanguage === 'es' ? 'También es importante tener una' : 'It is also important to have a' }} <strong>{{ currentLanguage === 'es' ? 'GESTORIA NÁUTICA' : 'NAUTICAL MANAGEMENT' }}</strong>, {{ currentLanguage === 'es' ? 'que además si navega va a entender tus problemas con el abanderamiento, cambio de titular, o lo que precises.' : 'which also if you sail will understand your problems with flagging, change of ownership, or whatever you need.' }}
            </p>
            <p>
              {{ currentLanguage === 'es' ? 'Nosotros siempre hemos confiado en las 2 mejores gestoras náuticas de España. Cristina Guiral y Mari Ramos.' : 'We have always trusted the 2 best nautical managers in Spain. Cristina Guiral and Mari Ramos.' }}
            </p>
            <div class="contact-highlight">
              <span class="contact-label">{{ currentLanguage === 'es' ? 'Contacta con' : 'Contact' }} <strong>CRISTINA GUIRAL</strong>:</span>
              <a href="https://guiral.es/asesoria-nautica" class="contact-link">https://guiral.es/asesoria-nautica</a>
            </div>
            <div class="contact-highlight">
              <span class="contact-label">{{ currentLanguage === 'es' ? 'Contacta con' : 'Contact' }} <strong>MARI RAMOS</strong>:</span>
              <a href="https://mrasesoresnauticos.com/nosotros" class="contact-link">https://mrasesoresnauticos.com/nosotros</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Third Section: Legal -->
      <section class="content-section third-section">
        <div class="text-overlay">
          <div class="text-card">
            <p>
              {{ currentLanguage === 'es' ? 'Ojala nunca necesites un' : 'Hopefully you never need a' }} <strong>{{ currentLanguage === 'es' ? 'ABOGADO' : 'LAWYER' }}</strong>, {{ currentLanguage === 'es' ? 'pero si se da el caso, que sea el mejor especialista en derecho marítimo que tenemos en España. No lo dudes, contacta con Yamandu, armador, navegante, regatista y abogado especializado!' : 'but if the case arises, let it be the best maritime law specialist we have in Spain. Don\'t hesitate, contact Yamandu, shipowner, navigator, sailor and specialized lawyer!' }}
            </p>
            <div class="contact-highlight">
              <span class="contact-label">{{ currentLanguage === 'es' ? 'Contacta con' : 'Contact' }} <strong>Yamandú Caorsi</strong>:</span>
              <a href="https://nauticalegal.com/es" class="contact-link">https://nauticalegal.com/es</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMundoBarco',
  data() {
    return {
      currentLanguage: 'es'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    },
    handleScroll() {
      const mainMenu = this.$refs.mainMenu;
      if (!mainMenu) return;
      
      const menuTop = mainMenu.offsetTop;
      const scrollY = window.scrollY;
      
      if (scrollY > menuTop) {
        mainMenu.classList.add('sticky-active');
      } else {
        mainMenu.classList.remove('sticky-active');
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

.container {
  max-width: 75vw !important;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
  min-height: 100vh;
  position: relative;
  color: white;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/banner.jpg') center/cover;
  opacity: 1;
  filter: blur(2px);
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 138, 0.3);
  z-index: 2;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.logo img {
  height: 70px;
  width: auto;
  filter: brightness(0) invert(1);
}

.logo-white {
  filter: brightness(0) invert(1);
}

.contact-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 50px 40px 50px;
  position: relative;
  z-index: 5;
  min-height: calc(100vh - 160px);
  text-align: center;
}

.hero-center {
  max-width: 900px;
  padding: 80px 60px;
}

.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: 4.2rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
}

.subtitle-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.2rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.3px;
  font-style: italic;
}

/* Main Menu */
.main-menu {
  background: rgba(30, 58, 138, 0.95);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  height: 60px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.main-menu.sticky-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.menu-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  max-width: 75vw;
  margin: 0 auto;
}

.menu-logo img {
  height: 35px;
  width: auto;
  filter: brightness(0) invert(1);
}

.menu-items-nav {
  display: flex;
  gap: 30px;
}

.menu-link-nav {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.menu-link-nav:hover,
.menu-link-nav.active {
  color: #fbbf24;
}

/* Mundo Barco Container */
.mundo-barco-container {
  max-width: 59em;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: black;
  background-color: white;
}

/* Content Sections with Background Images */
.content-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 20px 0;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.first-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/mundo-del-barco/FOTO 1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.4) contrast(1.1);
  opacity: 0.7;
  z-index: 1;
}

.first-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
  z-index: 2;
}

.second-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/mundo-del-barco/FOTO 2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.6) contrast(1.1);
  opacity: 0.4;
  z-index: 1;
}

.second-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%);
  z-index: 2;
}

.third-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/mundo-del-barco/FOTO 3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.3) contrast(1.1);
  opacity: 0.8;
  z-index: 1;
}

.third-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%);
  z-index: 2;
}

/* Text Overlay */
.text-overlay {
  position: relative;
  z-index: 10;
  max-width: 50em;
  width: 90%;
  margin: 0 auto;
  padding: 40px 20px;
}

.text-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 35px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08);
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.text-card h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 2rem;
  margin: 0;
  padding-top: 1.7em;
  font-style: italic;
  font-weight: 600;
  padding-bottom: 0.5em;
  color: #1a202c;
}

.text-card p {
  font-size: 1.2rem;
  text-align: left;
  color: #1a202c;
  line-height: 1.7;
  margin-bottom: 20px;
}

.contact-highlight {
  background: rgba(59, 130, 246, 0.1);
  border-left: 4px solid #3b82f6;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 15px 0;
}

.contact-label {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a202c;
  display: block;
  margin-bottom: 8px;
}

.contact-link {
  color: #1155cc;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #5f99ff;
  text-decoration: underline;
}

.contact-link.highlighted {
  background-color: #ffd700;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: underline;
  margin-left: 10px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .content-card {
    padding: 40px 30px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }
  
  .hero-content {
    padding: 60px 25px 30px 25px;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .subtitle-text {
    font-size: 1.8rem;
  }
  
  .text-overlay {
    max-width: 90vw;
    width: 95%;
    padding: 20px 15px;
  }
  
  .content-section {
    min-height: 80vh;
  }
  
  .text-card h3 {
    font-size: 1.5rem;
    padding-top: 1.7em;
    padding-bottom: 0.5em;
  }
  
  .text-card p {
    font-size: 1rem;
    text-align: justify;
    line-height: 1.4em;
  }
  
  .contact-label {
    font-size: 1.1rem;
  }
  
  .contact-link {
    font-size: 1.1rem;
  }
  
  .contact-link.highlighted {
    font-size: 1.1rem;
  }
  
  .third-section {
    min-height: 40em !important;
    background-size: cover !important;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .subtitle-text {
    font-size: 1.5rem;
  }
  
  .text-overlay {
    max-width: 90vw;
    width: 95%;
    padding: 15px 10px;
  }
  
  .content-section {
    min-height: 70vh;
  }
  
  .text-card {
    padding: 20px 15px;
  }
  
  .text-card h3 {
    font-size: 1.3rem;
  }
  
  .text-card p {
    font-size: 0.9rem;
  }
  
  .contact-label {
    font-size: 1rem;
  }
  
  .contact-link {
    font-size: 1rem;
  }
}
</style>