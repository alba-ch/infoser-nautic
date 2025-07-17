<template>
  <div class="mundo-barco">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-center">
          <h1 class="hero-title">EL MUNDO DEL BARCO</h1>
          <p class="hero-subtitle">de recreo!</p>
          <p class="hero-description">Servicios esenciales para navegantes: seguros, gestión y asesoría legal especializada</p>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- Services Section -->
      <section class="services-section">
        <div class="intro-text">
          <p>Del mar se puede disfrutar de muchas maneras, en barco de motor, vela, remos, la variedad es amplia. Sea cual sea tu barco, es necesario que tengas un buen <strong>SEGURO y GESTOR</strong>, y Eolo o Poseidón no lo quieran, un buen <strong>ABOGADO</strong>.</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card insurance">
            <div class="service-icon">🛡️</div>
            <h3>Seguros Náuticos</h3>
            <p>El corredor de <strong>SEGUROS</strong> de confianza y que recomendamos es <strong>NAUTIA SEGUROS</strong>. Álvaro nos ha conseguido seguros hasta para los barcos más difíciles.</p>
            <div class="contact-info">
              <strong>Contacta con Álvaro de Falguera</strong>
              <a href="https://www.nautia.net" target="_blank" class="service-link">www.nautia.net</a>
            </div>
          </div>

          <div class="service-card management">
            <div class="service-icon">📋</div>
            <h3>Gestoría Náutica</h3>
            <p>También es importante tener una <strong>GESTORÍA NÁUTICA</strong>, que además si navega va a entender tus problemas con el abanderamiento, cambio de titular, o lo que precises.</p>
            <p>Nosotros siempre hemos confiado en las 2 mejores gestoras náuticas de España:</p>
            <div class="contact-info">
              <div class="contact-item">
                <strong>CRISTINA GUIRAL</strong>
                <a href="https://guiral.es/asesoria-nautica" target="_blank" class="service-link">guiral.es/asesoria-nautica</a>
              </div>
              <div class="contact-item">
                <strong>MARI RAMOS</strong>
                <a href="https://mrasesoresnauticos.com/nosotros" target="_blank" class="service-link">mrasesoresnauticos.com</a>
              </div>
            </div>
          </div>

          <div class="service-card legal">
            <div class="service-icon">⚖️</div>
            <h3>Asesoría Legal</h3>
            <p>Ojalá nunca necesites un <strong>ABOGADO</strong>, pero si se da el caso, que sea el mejor especialista en derecho marítimo que tenemos en España. No lo dudes, contacta con Yamandú, armador, navegante, regatista y abogado especializado!</p>
            <div class="contact-info">
              <strong>Contacta con Yamandú Caorsi</strong>
              <a href="https://nauticalegal.com/es" target="_blank" class="service-link">nauticalegal.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>

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
  min-height: 70vh;
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
  background: url('../assets/mundo-del-barco/FOTO 1.jpg') center/cover;
  opacity: 0.4;
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
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-family: 'Caveat', cursive;
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 20px;
  font-style: italic;
}

.hero-description {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.mundo-barco {
  font-family: 'Nunito', sans-serif;
  background: white;
}

/* Services Section */
.services-section {
  padding: 120px 0;
  background: #f8fafc;
}

.intro-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.intro-text p {
  font-size: 1.2rem;
  color: #4a5568;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-left: 5px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.service-card.insurance {
  border-left-color: #10b981;
}

.service-card.management {
  border-left-color: #3b82f6;
}

.service-card.legal {
  border-left-color: #f59e0b;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

.service-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 20px;
  text-align: center;
}

.service-card p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: justify;
}

.contact-info {
  background: #f8fafc;
  padding: 25px;
  border-radius: 15px;
  margin-top: 25px;
}

.contact-info strong {
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  color: #1a202c;
  margin-bottom: 10px;
}

.contact-item {
  margin-bottom: 15px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.service-link {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-top: 5px;
}

.service-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .services-section {
    padding: 80px 0;
  }
  
  .intro-text {
    padding: 30px 20px;
    margin-bottom: 40px;
  }
  
  .intro-text p {
    font-size: 1rem;
  }
  
  .service-card {
    padding: 30px 20px;
  }
  
  .service-card h3 {
    font-size: 1.5rem;
  }
  
  .contact-info {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
  }
  
  .services-section {
    padding: 60px 0;
  }
  
  .intro-text {
    padding: 25px 15px;
  }
  
  .service-card {
    padding: 25px 15px;
  }
  
  .service-card h3 {
    font-size: 1.3rem;
  }
  
  .contact-info {
    padding: 15px;
  }
}


</style>