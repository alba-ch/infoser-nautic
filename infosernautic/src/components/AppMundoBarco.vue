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
          <button @click="toggleMobileMenu" class="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      <!-- Mobile Menu Overlay -->
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="toggleMobileMenu">
        <div class="mobile-menu" @click.stop>
          <div class="mobile-menu-header">
            <img src="../assets/logo-black.png" alt="INFOSER NAUTIC" class="mobile-logo" />
            <button @click="toggleMobileMenu" class="close-btn">×</button>
          </div>
          <div class="mobile-menu-items">
            <router-link to="/" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'INICIO' : 'HOME' }}</router-link>
            <router-link to="/servicios" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
            <router-link to="/mundo-barco" class="mobile-menu-link active" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
            <router-link to="/tarifas" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
            <router-link to="/about-us" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
          </div>
        </div>
      </div>
      
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
        <div class="menu-home">
          <router-link to="/" class="home-link">{{ currentLanguage === 'es' ? 'INICIO' : 'HOME' }}</router-link>
          <img src="../assets/logo-black.png" alt="INFOSER NAUTIC" class="mobile-sticky-logo" />
        </div>
        <div class="menu-items-nav">
          <router-link to="/servicios" class="menu-link-nav">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
          <router-link to="/mundo-barco" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
          <router-link to="/tarifas" class="menu-link-nav">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
          <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
        </div>
        <button @click="toggleMobileMenu" class="hamburger-btn mobile-sticky-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
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
      currentLanguage: 'es',
      mobileMenuOpen: false
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
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
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
  min-height: 60vh;
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

.hamburger-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-btn span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-btn:hover span {
  background: #ffd700;
}

/* Mobile Menu */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  background: white;
  width: 300px;
  height: 100%;
  padding: 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.mobile-logo {
  height: 40px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu-link {
  color: #1a202c;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 15px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: color 0.3s ease;
}

.mobile-menu-link:hover,
.mobile-menu-link.active {
  color: #3b82f6;
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

.menu-home {
  display: flex;
  align-items: center;
}

.home-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.home-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fbbf24;
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
@media (max-width: 1200px) {
  .mundo-barco-container {
    max-width: 90vw;
  }
  
  .hero-title {
    font-size: 3.8rem;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .subtitle-text {
    font-size: 2rem;
  }
  
  .text-card {
    padding: 30px 25px;
  }
  
  .content-section {
    min-height: 90vh;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
  }
  
  .navbar-right {
    gap: 10px;
  }
  
  .lang-btn,
  .contact-btn {
    display: none;
  }
  
  .hamburger-btn {
    display: flex;
  }
  
  .main-menu {
    display: none;
  }
  
  .main-menu.sticky-active {
    display: block;
    background: rgba(30, 58, 138, 0.90);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(30, 58, 138, 0.2);
    height: 50px;
  }
  
  .main-menu.sticky-active .menu-content {
    justify-content: space-between;
    padding: 8px 15px;
  }
  
  .main-menu.sticky-active .menu-home {
    display: flex;
  }
  
  .main-menu.sticky-active .home-link {
    display: none;
  }
  
  .mobile-sticky-logo {
    display: none;
  }
  
  .main-menu.sticky-active .mobile-sticky-logo {
    display: block;
    height: 35px;
    filter: brightness(0) invert(1);
  }
  
  .mobile-sticky-hamburger {
    display: none;
  }
  
  .main-menu.sticky-active .mobile-sticky-hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }
  
  .main-menu.sticky-active .mobile-sticky-hamburger span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .menu-items-nav {
    display: none;
  }
  
  .logo img {
    height: 50px;
  }
  
  .hero {
    min-height: 50vh;
  }
  
  .hero-content {
    padding: 40px 15px 20px 15px;
    min-height: calc(50vh - 80px);
  }
  
  .hero-center {
    padding: 40px 20px;
  }
  
  .hero-title {
    font-size: 2.8rem;
    margin-bottom: 15px;
    line-height: 1.2;
  }
  
  .subtitle-text {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  
  .menu-content {
    padding: 10px 15px;
    max-width: 95vw;
  }
  
  .home-link {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
  
  .mundo-barco-container {
    max-width: 95vw;
    padding: 0 10px;
  }
  
  .content-section {
    min-height: 70vh;
    margin: 15px 0;
    border-radius: 20px;
  }
  
  .text-overlay {
    max-width: 100%;
    width: 100%;
    padding: 20px 10px;
  }
  
  .text-card {
    padding: 25px 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.95);
  }
  
  .text-card h3 {
    font-size: 1.6rem;
    padding-top: 0;
    padding-bottom: 20px;
    text-align: center;
    line-height: 1.3;
  }
  
  .text-card p {
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .contact-highlight {
    padding: 12px 15px;
    margin: 12px 0;
    border-radius: 8px;
  }
  
  .contact-label {
    font-size: 1rem;
    margin-bottom: 6px;
    line-height: 1.4;
  }
  
  .contact-link {
    font-size: 0.9rem;
    line-height: 1.4;
    word-break: break-all;
  }
  
  .contact-link.highlighted {
    font-size: 0.9rem;
    padding: 4px 8px;
    margin-left: 0;
    margin-top: 5px;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 12px 10px;
  }
  
  .logo img {
    height: 45px;
  }
  
  .hero-content {
    padding: 30px 10px 15px 10px;
  }
  
  .hero-center {
    padding: 20px 10px;
  }
  
  .hero-title {
    font-size: 2.2rem;
    line-height: 1.1;
  }
  
  .subtitle-text {
    font-size: 1.5rem;
  }
  
  .mundo-barco-container {
    padding: 0 5px;
  }
  
  .content-section {
    min-height: 60vh;
    margin: 10px 0;
  }
  
  .text-overlay {
    padding: 15px 5px;
  }
  
  .text-card {
    padding: 20px 15px;
  }
  
  .text-card h3 {
    font-size: 1.4rem;
    padding-bottom: 15px;
  }
  
  .text-card p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 12px;
  }
  
  .contact-highlight {
    padding: 10px 12px;
    margin: 10px 0;
  }
  
  .contact-label {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  
  .contact-link {
    font-size: 0.85rem;
  }
  
  .contact-link.highlighted {
    font-size: 0.85rem;
    padding: 3px 6px;
  }
}
</style>