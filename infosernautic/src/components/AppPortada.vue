<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero">
      <nav class="navbar">
        <div class="logo">
          <img src="../assets/logo-black.png" alt="VOYA-GO" class="logo-white" />
        </div>
        <button class="contact-btn">Contact Us</button>
      </nav>
      
      <div class="hero-content">
        <div class="hero-center">
          <div class="company-name">
            <h1 class="hero-title"><i>Infoser Nautic SL</i></h1>
            <h2><span class="title-blue">"Los Clásicos" </span><span class="since-text"><i>desde</i> 1994</span></h2>
          </div>
          <div class="services-description">
            <div class="service-item">
              <h3>Peritajes & Asistencia técnica</h3>
              <p>para todo tipo de embarcaciones deportivas</p>
            </div>
            <div class="service-item">
              <h3>Survey & Technical Assistance</h3>
              <p>for all types of yacht & sport boats</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Menu -->
    <nav class="main-menu" ref="mainMenu">
      <div class="container">
        <div class="menu-content">
          <div class="menu-logo">
            <img src="../assets/logo-black.png" alt="VOYA-GO" class="logo-white" />
          </div>
          <div class="menu-items-nav">
            <router-link to="/servicios" class="menu-link-nav">SERVICIOS</router-link>
            <router-link to="/mundo-barco" class="menu-link-nav">EL MUNDO DEL BARCO</router-link>
            <router-link to="/tarifas" class="menu-link-nav">TARIFAS</router-link>
            <router-link to="/about-us" class="menu-link-nav">MI HISTORIA</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Experience Section -->
    <section class="experience">
      <div class="container">
        <div class="experience-grid">
          <div class="experience-left">
            <h2>Meet Monica</h2>
            <p>With over 30 years of experience in the nautical industry, Monica is a certified marine surveyor and technical expert specializing in classic and luxury vessels. Her passion for boats and deep knowledge of maritime regulations make her the trusted choice for yacht owners and buyers worldwide.</p>
            <router-link to="/about-us" class="read-more-btn">Read Full Story</router-link>
            
            <div class="features">
              <div class="feature-row">
                <div class="feature">
                  <div class="feature-icon">🎓</div>
                  <div class="feature-text">
                    <h4>30+ Years Experience</h4>
                    <p>Three decades of nautical expertise</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⚓</div>
                  <div class="feature-text">
                    <h4>Certified Surveyor</h4>
                    <p>Professional marine survey qualifications</p>
                  </div>
                </div>
              </div>
              <div class="feature-row">
                <div class="feature">
                  <div class="feature-icon">🛥️</div>
                  <div class="feature-text">
                    <h4>Classic Boat Specialist</h4>
                    <p>Expert in vintage and luxury vessels</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">🌍</div>
                  <div class="feature-text">
                    <h4>International Recognition</h4>
                    <p>Trusted by clients worldwide since 1994</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-right">
            <div class="yacht-image">
              <img src="/img/FOTO 2222.1cd60f45.jpg" alt="Monica - Marine Surveyor" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Section -->
    <section class="fleet">
      <div class="container">
        <div class="fleet-header">
          <h2>Survey Examples</h2>
          <p>Professional marine surveys with detailed technical reports for classic and modern vessels.</p>
          <router-link to="/tarifas" class="all-yachts-btn">View All Rates</router-link>
        </div>
        
        <div class="fleet-cards">
          <div class="yacht-card serenity">
            <div class="card-content">
              <h3>Katxalot Survey</h3>
              <p>Complete technical survey of classic sailing yacht including hull inspection, rigging assessment, and safety equipment evaluation.</p>
              <div class="yacht-specs">
                <div class="spec">
                  <span class="icon">⚓</span>
                  <span>Classic Yacht</span>
                </div>
                <div class="spec">
                  <span class="icon">📋</span>
                  <span>Full Report</span>
                </div>
              </div>
              <button class="view-details">View Report</button>
            </div>
            <div class="card-image">
              <img src="../assets/tarifas/portadakatxalot.png" alt="Katxalot Survey" />
            </div>
          </div>
          
          <div class="yacht-card ocean">
            <div class="card-content">
              <h3>Louise Michel Survey</h3>
              <p>Comprehensive survey of motor yacht covering engine systems, electrical installations, and structural integrity assessment.</p>
              <div class="yacht-specs">
                <div class="spec">
                  <span class="icon">🛥️</span>
                  <span>Motor Yacht</span>
                </div>
                <div class="spec">
                  <span class="icon">🔧</span>
                  <span>Technical Analysis</span>
                </div>
              </div>
              <button class="view-details">View Report</button>
            </div>
            <div class="card-image">
              <img src="../assets/tarifas/louisemichel.png" alt="Louise Michel Survey" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Menu -->
    <section class="services-menu">
      <div class="container">
        <h2>MENÚ</h2>
        <div class="menu-items">
          <router-link to="/servicios" class="menu-link">SERVICIOS</router-link>
          <router-link to="/mundo-barco" class="menu-link">EL MUNDO DEL BARCO</router-link>
          <router-link to="/tarifas" class="menu-link">TARIFAS</router-link>
          <router-link to="/about-us" class="menu-link">MI HISTORIA</router-link>
        </div>
        
        <div class="special-services">
          <a href="https://ko-fi.com/infosernautic/shop" target="_blank" class="special-link">
            VISITA NUESTRA TIENDA / VISIT OUR SHOP
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1t-13y7u2cRWIYO2ZxsN-SJXvm92NRyjn0SESdOsw0qQ/view?usp=drive_link" target="_blank" class="special-link">
            BARCOS especiales rodajes, cine, publicidad, eventos privados.
          </a>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery">
      <div class="gallery-container">
        <div class="gallery-images">
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/FOTO 4.jpg" alt="Yacht Interior" />
            <div class="gallery-overlay">
              <span class="gallery-text">Yacht Interior</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/FOTO 5.jpg" alt="Yacht Lounge" />
            <div class="gallery-overlay">
              <span class="gallery-text">Yacht Lounge</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/foto 6.jpg" alt="Yacht Dining" />
            <div class="gallery-overlay">
              <span class="gallery-text">Yacht Dining</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/FOTO 7.jpg" alt="Yacht Bridge" />
            <div class="gallery-overlay">
              <span class="gallery-text">Yacht Bridge</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/Foto 8.jpg" alt="Deck View" />
            <div class="gallery-overlay">
              <span class="gallery-text">Deck View</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/Foto 9.jpg" alt="Navigation" />
            <div class="gallery-overlay">
              <span class="gallery-text">Navigation</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/FOTO 10.jpg" alt="Engine Room" />
            <div class="gallery-overlay">
              <span class="gallery-text">Engine Room</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="../assets/sobre-nosotros/FOTO 11.jpg" alt="Cabin" />
            <div class="gallery-overlay">
              <span class="gallery-text">Cabin</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h2 class="contact-title">CONTACTAR</h2>
        
        <div class="contact-icons">
          <img src="../assets/portada/TEL.png" alt="Telephone" />
          <img src="../assets/portada/WU.png" alt="WhatsApp" />
          <img src="../assets/portada/TELEGRAM.png" alt="Telegram" />
        </div>
        
        <div class="contact-info">
          <div class="contact-item">
            <img src="../assets/portada/SPAIN.png" alt="España" />
            <span>609 448 459</span>
          </div>
          
          <div class="contact-item">
            <img src="../assets/portada/MAIL.png" alt="Email" />
            <a href="mailto:barcosclasicos@infosernautic.com">barcosclasicos@infosernautic.com</a>
          </div>
          
          <div class="contact-address">
            <img src="../assets/portada/MONI.png" alt="Contact" />
            <div class="address-details">
              <p>Dónde estamos? / Where we are?</p>
              <p>M/S Bakea, Muelle de España<br>s/n, BARCELONA 08039</p>
            </div>
          </div>
          
          <div class="appointment-note">
            <p>Solo atendemos bajo visita concertada.<br />
              We only attend by prior appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToSection() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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

<style>
.logo-white {
  filter: brightness(0) invert(1);
}

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');

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

/* Hero Section - Exact match to reference */
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
  padding: 25px 50px;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.logo img {
  height: 60px;
  width: auto;
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
  min-height: 60vh;
  text-align: center;
}

.hero-center {
  max-width: 900px;
  padding: 80px 60px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 30px;
  /*text-shadow: 2px 2px 8px rgba(0,0,0,0.4);*/
}

.hero-subtitle p {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.7;
  max-width: 450px;
  /*text-shadow: 1px 1px 3px rgba(0,0,0,0.3);*/
}



.company-name h1 {
  font-family: 'Outfit', sans-serif;
  font-size: 4.2rem;
  margin-bottom: 20px;
  font-weight: 700;
  /*text-shadow: 3px 3px 10px rgba(0,0,0,0.8);*/
  color: #ffffff;
  letter-spacing: -1px;
}

.company-name h2 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.4rem;
  margin-bottom: 40px;
  font-weight: 400;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  color: #ffffff;
  letter-spacing: 0.5px;
}

.title-blue {
  font-family: 'Caveat', cursive;
  font-size: 3.2rem;
  color: #ffd700;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  font-weight: 600;
  font-style: normal;
}

.since-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 0.3px;
}

.services-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.service-item {
  font-family: 'Nunito', sans-serif;
  text-align: center;
}

.service-item h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
  font-weight: 600;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
  color: #ffffff;
}

.service-item p {
  font-size: 1.1rem;
  opacity: 0.95;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  color: #ffffff;
}

/* Experience Section */
.experience {
  padding: 100px 0;
  background: #f8fafc;
}

.experience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.experience-left h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 30px;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.experience-left > p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 30px;
  line-height: 1.8;
}

.read-more-btn {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 60px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.features {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.feature-icon {
  font-size: 2rem;
  margin-top: 8px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-text h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
}

.feature-text p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
}

.experience-right {
  position: relative;
}

/* Hero to Menu Transition */
.hero::after {
  background: linear-gradient(180deg, rgba(30, 58, 138, 0.3) 0%, rgba(30, 58, 138, 0.8) 100%);
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
  padding: 15px 0;
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

.menu-link-nav:hover {
  color: #fbbf24;
}

.yacht-image {
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.yacht-image:hover {
  transform: rotate(0deg) scale(1.02);
}

.yacht-image img {
  width: 100%;
  height: 650px;
  object-fit: cover;
}

/* Fleet Section */
.fleet {
  padding: 100px 0;
  background: white;
}

.fleet-header {
  text-align: center;
  margin-bottom: 80px;
}

.fleet-header h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 25px;
  letter-spacing: -0.5px;
}

.fleet-header p {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 650px;
  margin: 0 auto 40px auto;
  line-height: 1.7;
}

.all-yachts-btn {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.all-yachts-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.fleet-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;
}

.yacht-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;
}

.yacht-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.yacht-card.serenity {
  background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%);
}

.yacht-card.ocean {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.card-content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-content h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 15px;
}

.card-content p {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 25px;
  line-height: 1.6;
}

.yacht-specs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.spec {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #4a5568;
  font-weight: 500;
}

.view-details {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.view-details:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.05);
}

/* Services Menu */
.services-menu {
  padding: 80px 0;
  background: #f8fafc;
  text-align: center;
}

.services-menu h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  max-width: 900px;
  margin: 0 auto 50px auto;
}

.menu-link {
  background: white;
  color: #1e40af;
  text-decoration: none;
  padding: 25px 20px;
  border-radius: 15px;
  font-weight: 600;
  font-style: italic;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  display: block;
  border: 2px solid transparent;
}

.menu-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  color: #3b82f6;
  border-color: #3b82f6;
}

.special-services {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.special-link {
  color: #1e40af;
  text-decoration: none;
  font-weight: 600;
  font-style: italic;
  padding: 15px 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: 1px solid transparent;
}

.special-link:hover {
  background: rgba(30, 64, 175, 0.1);
  color: #3b82f6;
  border-color: #3b82f6;
}

/* Gallery Section */
.gallery {
  padding: 40px 0;
  background: #f8fafc;
}

.gallery-container {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.gallery-container::-webkit-scrollbar {
  display: none;
}

.gallery-images {
  display: flex;
  gap: 20px;
  padding: 10px 0;
}

.gallery-item {
  flex: 0 0 300px;
  height: 250px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(30, 58, 138, 0.9));
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-item {
  position: relative;
}

.gallery-item .gallery-overlay {
  pointer-events: none;
}

.gallery-text {
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}



/* Contact Section */
.contact {
  padding: 80px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  text-align: center;
}

.contact-title {
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  letter-spacing: -0.5px;
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 50px;
}

.contact-icons img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.contact-icons img:hover {
  transform: scale(1.15) translateY(-3px);
}

.contact-info {
  max-width: 700px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
  font-size: 1.2rem;
  font-family: 'Nunito', sans-serif;
}

.contact-item img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.contact-item a {
  color: #fbbf24;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #f59e0b;
}

.contact-address {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  font-family: 'Nunito', sans-serif;
}

.contact-address img {
  width: 140px;
  height: auto;
  margin-right: 25px;
}

.address-details {
  text-align: left;
  font-size: 1.1rem;
}

.appointment-note {
  margin-top: 40px;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  font-style: normal;
  opacity: 0.9;
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .experience-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .fleet-cards {
    grid-template-columns: 1fr;
  }
  
  .yacht-card {
    grid-template-columns: 1fr;
  }
  
  .card-image {
    height: 250px;
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
  
  .services-description {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .feature-row {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .menu-items {
    grid-template-columns: 1fr;
  }
  
  .gallery-images {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-address {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-address img {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .address-details {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .experience-left h2 {
    font-size: 2.2rem;
  }
  
  .fleet-header h2 {
    font-size: 2.2rem;
  }
  
  .gallery-images {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .gallery-item {
    height: 250px;
  }
}
</style>