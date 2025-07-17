<template>
  <div class="servicios">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-center">
          <h1 class="hero-title">SERVICIOS</h1>
          <p class="hero-subtitle">Servicios profesionales náuticos especializados en embarcaciones clásicas y modernas</p>
        </div>
      </div>
    </section>

    <!-- Main Menu -->
    <nav class="main-menu">
      <div class="menu-content">
        <div class="menu-logo">
          <img src="../assets/logo-black.png" alt="Logo" class="logo-white" />
        </div>
        <div class="menu-items-nav">
          <router-link to="/" class="menu-link-nav">INICIO</router-link>
          <router-link to="/servicios" class="menu-link-nav">SERVICIOS</router-link>
          <router-link to="/mundo-barco" class="menu-link-nav">EL MUNDO DEL BARCO</router-link>
          <router-link to="/tarifas" class="menu-link-nav">TARIFAS</router-link>
          <router-link to="/about-us" class="menu-link-nav">MI HISTORIA</router-link>
        </div>
      </div>
    </nav>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🔍</div>
            <h3>Consultoría Técnica</h3>
            <p>Asesoramiento especializado para la compra y evaluación de embarcaciones</p>
            <router-link to="/tarifas" class="service-link">Ver Tarifas</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">⚙️</div>
            <h3>Asesoría Técnica</h3>
            <p>Orientación profesional para mantenimiento y mejoras de su embarcación</p>
            <router-link to="/tarifas" class="service-link">Ver Tarifas</router-link>
          </div>
          
          <div class="service-card featured">
            <div class="service-icon">📋</div>
            <h3>Survey / Peritaciones</h3>
            <p>Informe completo de estado y conservación de embarcaciones</p>
            <router-link to="/tarifas" class="service-link">Ver Tarifas</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">⚖️</div>
            <h3>Peritaciones Especiales</h3>
            <p>Seguros todo riesgo, disputas judiciales, daños y siniestros</p>
            <router-link to="/tarifas" class="service-link">Ver Tarifas</router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon">💰</div>
            <h3>Tasaciones & Valoraciones</h3>
            <p>Hacienda, herencias, disputas y divorcios</p>
            <router-link to="/tarifas" class="service-link">Ver Tarifas</router-link>
          </div>
        </div>
        
        <div class="legal-note">
          <p>*En todos los procesos donde hay que defender el survey, acudimos a los tribunales a declarar.</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>¿Tienes un problema?</h2>
          <p class="cta-subtitle">Llámame o escríbeme, ¡buscaremos una solución!</p>
          <p class="cta-subtitle-en">If you have a problem, call or write me, we will find a solution!</p>
          
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

<style>
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
  max-width: 75vw;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
  min-height: 60vh;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/servicios/Foto servicios.jpg') center/cover;
  opacity: 0.3;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 138, 0.4);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 5;
  text-align: center;
}

.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Services Section */
.services-section {
  padding: 120px 0;
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border-color: #3b82f6;
}

.service-card.featured {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  color: white;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a202c;
}

.service-card.featured h3 {
  color: white;
}

.service-card p {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 25px;
  line-height: 1.6;
}

.service-card.featured p {
  color: rgba(255,255,255,0.9);
}

.service-link {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.service-card.featured .service-link {
  background: white;
  color: #3b82f6;
}

.service-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.legal-note {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 15px;
  border-left: 4px solid #ffd700;
}

.legal-note p {
  font-style: italic;
  color: #4a5568;
  font-size: 0.95rem;
}

/* Contact CTA Section */
.contact-cta {
  padding: 120px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.cta-subtitle {
  font-size: 1.3rem;
  margin-bottom: 10px;
  opacity: 0.9;
}

.cta-subtitle-en {
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: italic;
  margin-bottom: 40px;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-contact {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255,255,255,0.1);
  padding: 20px 30px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.phone-contact:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-3px);
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffd700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card {
    padding: 30px 20px;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .phone-contact {
    flex-direction: column;
    gap: 10px;
  }
  
  .phone-number {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .services-section,
  .contact-cta {
    padding: 80px 0;
  }
  
  .service-card {
    padding: 25px 15px;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
}
</style>