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
            <router-link to="/servicios" class="mobile-menu-link active" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
            <router-link to="/mundo-barco" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
            <router-link to="/tarifas" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
            <router-link to="/about-us" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-center">
          <div class="company-name">
            <h1 class="hero-title">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</h1>
            <h2><span class="subtitle-text">{{ currentLanguage === 'es' ? 'Servicios profesionales náuticos especializados' : 'Specialized professional nautical services' }}</span></h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Menu -->
    <nav class="main-menu" ref="mainMenu">
      <div class="menu-content">
        <div class="menu-home">
          <router-link to="/" class="home-link">{{ currentLanguage === 'es' ? 'INICIO' : 'HOME' }}</router-link>
        </div>
        <div class="menu-items-nav">
          <router-link to="/servicios" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
          <router-link to="/mundo-barco" class="menu-link-nav">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
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

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ currentLanguage === 'es' ? 'Nuestros Servicios' : 'Our Services' }}</h2>
          <p class="section-subtitle">{{ currentLanguage === 'es' ? 'Servicios profesionales especializados en embarcaciones clásicas y modernas' : 'Professional services specialized in classic and modern vessels' }}</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#3b82f6"/>
              </svg>
            </div>
            <h3>{{ currentLanguage === 'es' ? 'Consultoría Técnica' : 'Technical Consulting' }}</h3>
            <p>{{ currentLanguage === 'es' ? 'Asesoramiento especializado para la compra y evaluación de embarcaciones' : 'Specialized advice for the purchase and evaluation of vessels' }}</p>
            <router-link to="/tarifas" class="service-link">{{ currentLanguage === 'es' ? 'Ver Tarifas' : 'View Rates' }}</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4zM6.7 8.8c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.7-.7 1.9-.7 2.6 0 .7.7.7 1.9 0 2.6z" fill="#3b82f6"/>
              </svg>
            </div>
            <h3>{{ currentLanguage === 'es' ? 'Asesoría Técnica' : 'Technical Advisory' }}</h3>
            <p>{{ currentLanguage === 'es' ? 'Orientación profesional para mantenimiento y mejoras de su embarcación' : 'Professional guidance for maintenance and improvements of your vessel' }}</p>
            <router-link to="/tarifas" class="service-link">{{ currentLanguage === 'es' ? 'Ver Tarifas' : 'View Rates' }}</router-link>
          </div>
          
          <div class="service-card featured">
            <div class="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="white"/>
              </svg>
            </div>
            <h3>{{ currentLanguage === 'es' ? 'Survey / Peritaciones' : 'Survey / Appraisals' }}</h3>
            <p>{{ currentLanguage === 'es' ? 'Informe completo de estado y conservación de embarcaciones' : 'Complete report on vessel condition and conservation' }}</p>
            <router-link to="/tarifas" class="service-link">{{ currentLanguage === 'es' ? 'Ver Tarifas' : 'View Rates' }}</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#3b82f6"/>
              </svg>
            </div>
            <h3>{{ currentLanguage === 'es' ? 'Peritaciones Especiales' : 'Special Appraisals' }}</h3>
            <p>{{ currentLanguage === 'es' ? 'Seguros todo riesgo, disputas judiciales, daños y siniestros' : 'Comprehensive insurance, legal disputes, damages and claims' }}</p>
            <router-link to="/tarifas" class="service-link">{{ currentLanguage === 'es' ? 'Ver Tarifas' : 'View Rates' }}</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#3b82f6"/>
              </svg>
            </div>
            <h3>{{ currentLanguage === 'es' ? 'Tasaciones & Valoraciones' : 'Appraisals & Valuations' }}</h3>
            <p>{{ currentLanguage === 'es' ? 'Hacienda, herencias, disputas y divorcios' : 'Tax authority, inheritances, disputes and divorces' }}</p>
            <router-link to="/tarifas" class="service-link">{{ currentLanguage === 'es' ? 'Ver Tarifas' : 'View Rates' }}</router-link>
          </div>
        </div>
        
        <div class="legal-note">
          <div class="note-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#ffd700"/>
            </svg>
          </div>
          <p>{{ currentLanguage === 'es' ? '*En todos los procesos donde hay que defender el survey, acudimos a los tribunales a declarar.' : '*In all processes where the survey must be defended, we attend court to testify.' }}</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>{{ currentLanguage === 'es' ? '¿Tienes un problema?' : 'Do you have a problem?' }}</h2>
          <p class="cta-subtitle">{{ currentLanguage === 'es' ? 'Llámame o escríbeme, ¡buscaremos una solución!' : 'Call or write me, we will find a solution!' }}</p>
          
          <div class="contact-info">
            <div class="phone-contact">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#ffd700"/>
              </svg>
              <span class="phone-number">🇪🇸 609 448 459</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppServicios',
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
  background: url('../assets/servicios/Foto servicios.jpg') center/cover;
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
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.3px;
  font-style: italic;
}

/* Main Menu */
.main-menu.sticky-active {
    display: block;
    background: rgba(30, 58, 138, 0.90);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(30, 58, 138, 0.2);
    height: 50px;
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

/* Services Section */
.services-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.service-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  padding: 45px 35px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.08);
}

.service-card.featured {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  color: white;
  transform: scale(1.05);
}

.service-card.featured::before {
  background: rgba(255, 255, 255, 0.3);
}

.service-card.featured:hover {
  transform: scale(1.05) translateY(-15px);
}

.service-icon {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  margin: 0 auto 25px auto;
  transition: all 0.3s ease;
}

.service-card.featured .service-icon {
  background: rgba(255, 255, 255, 0.2);
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  background: rgba(59, 130, 246, 0.15);
}

.service-card.featured:hover .service-icon {
  background: rgba(255, 255, 255, 0.3);
}

.service-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
}

.service-card.featured h3 {
  color: white;
}

.service-card p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 30px;
  line-height: 1.7;
}

.service-card.featured p {
  color: rgba(255,255,255,0.9);
}

.service-link {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.service-card.featured .service-link {
  background: rgba(255, 255, 255, 0.95);
  color: #3b82f6;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

.service-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
}

.service-card.featured .service-link:hover {
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
}

.legal-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 25px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.note-icon {
  flex-shrink: 0;
}

.legal-note p {
  font-style: italic;
  color: #4a5568;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
}

/* Contact CTA Section */
.contact-cta {
  padding: 120px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/banner.jpg') center/cover;
  opacity: 0.1;
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: -1px;
}

.cta-subtitle {
  font-size: 1.5rem;
  margin-bottom: 50px;
  opacity: 0.9;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-contact {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255,255,255,0.15);
  padding: 25px 40px;
  border-radius: 60px;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.phone-contact:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.phone-number {
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffd700;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 90vw !important;
  }
  
  .hero-title {
    font-size: 3.8rem;
  }
  
  .section-title {
    font-size: 3.2rem;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 95vw !important;
    padding: 0 15px;
  }
  
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
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
  
  .main-menu.sticky-active .menu-home {
    display: flex;
  }
  
  .main-menu.sticky-active .home-link {
    display: none;
  }
  
  .main-menu.sticky-active .menu-home::after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    background-image: url('../assets/logo-black.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(0) invert(1);
  }
  
  @media (min-width: 769px) {
    .main-menu.sticky-active .menu-home::after {
      display: none;
    }
    
    .main-menu.sticky-active .home-link {
      display: block;
    }
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
    font-size: 1.4rem;
    line-height: 1.4;
  }
  
  .menu-content {
    padding: 10px 15px;
    max-width: 95vw;
  }
  
  .home-link {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
  
  .services-section {
    padding: 80px 0;
  }
  
  .section-header {
    margin-bottom: 50px;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 50px;
  }
  
  .service-card {
    padding: 30px 25px;
    border-radius: 20px;
    margin: 0;
  }
  
  .service-card.featured {
    transform: none;
    order: -1;
  }
  
  .service-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .service-card:hover {
    transform: translateY(-10px);
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  
  .service-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    line-height: 1.3;
  }
  
  .service-card p {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  .service-link {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
  
  .legal-note {
    padding: 20px 25px;
    margin-top: 30px;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .legal-note p {
    font-size: 0.9rem;
  }
  
  .contact-cta {
    padding: 80px 0;
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .cta-subtitle {
    font-size: 1.3rem;
    margin-bottom: 40px;
    line-height: 1.5;
  }
  
  .phone-contact {
    flex-direction: column;
    gap: 15px;
    padding: 20px 30px;
    border-radius: 50px;
  }
  
  .phone-number {
    font-size: 1.3rem;
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
    font-size: 1.2rem;
  }
  
  .services-section {
    padding: 60px 0;
  }
  
  .section-header {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .services-grid {
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .service-card {
    padding: 25px 20px;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  .service-card h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  
  .service-card p {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  
  .service-link {
    padding: 10px 20px;
    font-size: 0.85rem;
  }
  
  .legal-note {
    padding: 15px 20px;
  }
  
  .legal-note p {
    font-size: 0.85rem;
  }
  
  .contact-cta {
    padding: 60px 0;
  }
  
  .cta-content h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .cta-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .phone-contact {
    padding: 15px 25px;
    gap: 12px;
  }
  
  .phone-number {
    font-size: 1.2rem;
  }
}
</style>