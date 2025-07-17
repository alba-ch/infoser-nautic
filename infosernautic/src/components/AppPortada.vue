<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero">
      <nav class="navbar">
        <div class="logo">
          <img src="../assets/logo-black.png" alt="VOYA-GO" class="logo-white" />
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
            <h1 class="hero-title"><i>Infoser Nautic SL</i></h1>
            <h2><span class="title-blue">{{ currentLanguage === 'es' ? '"Los Clásicos" ' : '"The Classics" ' }} </span><span class="since-text"><i>{{ currentLanguage === 'es' ? 'desde' : 'since' }}</i> 1994</span></h2>
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

        <div class="menu-content">
          <div class="menu-logo ">
            <img src="../assets/logo-black.png" alt="VOYA-GO" class="logo-white" />
          </div>
          <div class="menu-items-nav">
            <router-link to="/servicios" class="menu-link-nav">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
            <router-link to="/mundo-barco" class="menu-link-nav">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
            <router-link to="/tarifas" class="menu-link-nav">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
            <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
          </div>
        </div>
  
    </nav>

    <!-- Experience Section -->
    <section class="experience">
      <div class="container">
        <div class="experience-grid">
          <div class="experience-left">
            <h2>{{ currentLanguage === 'es' ? 'Conoce a Mónica' : 'Meet Mónica' }}</h2>
            <p>{{ currentLanguage === 'es' ? 'Con más de 30 años de experiencia en la industria náutica, Mónica es una perito naval certificada y experta técnica especializada en embarcaciones clásicas y de lujo. Su pasión por los barcos y su profundo conocimiento de las regulaciones marítimas la convierten en la opción de confianza para propietarios y compradores de yates en todo el mundo.' : 'With over 30 years of experience in the nautical industry, Mónica is a certified marine surveyor and technical expert specializing in classic and luxury vessels. Her passion for boats and deep knowledge of maritime regulations make her the trusted choice for yacht owners and buyers worldwide.' }}</p>
            <router-link to="/about-us" class="read-more-btn">{{ currentLanguage === 'es' ? 'Leer Historia Completa' : 'Read Full Story' }}</router-link>
            
            <div class="features">
              <div class="feature-row">
                <div class="feature">
                  <div class="feature-icon">🎓</div>
                  <div class="feature-text">
                    <h4>{{ currentLanguage === 'es' ? '30+ Años de Experiencia' : '30+ Years Experience' }}</h4>
                    <p>{{ currentLanguage === 'es' ? 'Tres décadas de experiencia náutica' : 'Three decades of nautical expertise' }}</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⚓</div>
                  <div class="feature-text">
                    <h4>{{ currentLanguage === 'es' ? 'Perito Certificado' : 'Certified Surveyor' }}</h4>
                    <p>{{ currentLanguage === 'es' ? 'Cualificaciones profesionales en peritaje naval' : 'Professional marine survey qualifications' }}</p>
                  </div>
                </div>
              </div>
              <div class="feature-row">
                <div class="feature">
                  <div class="feature-icon">🛥️</div>
                  <div class="feature-text">
                    <h4>{{ currentLanguage === 'es' ? 'Especialista en Barcos Clásicos' : 'Classic Boat Specialist' }}</h4>
                    <p>{{ currentLanguage === 'es' ? 'Experta en embarcaciones vintage y de lujo' : 'Expert in vintage and luxury vessels' }}</p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-icon">🌍</div>
                  <div class="feature-text">
                    <h4>{{ currentLanguage === 'es' ? 'Reconocimiento Internacional' : 'International Recognition' }}</h4>
                    <p>{{ currentLanguage === 'es' ? 'Confianza de clientes en todo el mundo desde 1994' : 'Trusted by clients worldwide since 1994' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-right">
            <div class="yacht-image">
              <img src="/img/FOTO 2222.1cd60f45.jpg" alt="Mónica - Marine Surveyor" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Survey Examples Section -->
    <section class="fleet">
      <div class="container">
        <div class="fleet-header">
          <h2>{{ currentLanguage === 'es' ? 'Ejemplos de Survey' : 'Survey Examples' }}</h2>
          <p>{{ currentLanguage === 'es' ? 'Peritajes navales profesionales con informes técnicos detallados para embarcaciones clásicas y modernas.' : 'Professional marine surveys with detailed technical reports for classic and modern vessels.' }}</p>
          <router-link to="/tarifas" class="all-yachts-btn">{{ currentLanguage === 'es' ? 'Ver Todas las Tarifas' : 'View All Rates' }}</router-link>
        </div>
        
        <div class="fleet-cards">
          <div class="yacht-card serenity">
            <div class="card-content">
              <h3>{{ currentLanguage === 'es' ? 'Survey Katxalot' : 'Katxalot Survey' }}</h3>
              <p>{{ currentLanguage === 'es' ? 'Survey técnico completo de velero clásico incluyendo inspección del casco, evaluación del aparejo y equipos de seguridad.' : 'Complete technical survey of classic sailing yacht including hull inspection, rigging assessment, and safety equipment evaluation.' }}</p>
              <div class="yacht-specs">
                <div class="spec">
                  <span class="icon">⚓</span>
                  <span>{{ currentLanguage === 'es' ? 'Yate Clásico' : 'Classic Yacht' }}</span>
                </div>
                <div class="spec">
                  <span class="icon">📋</span>
                  <span>{{ currentLanguage === 'es' ? 'Informe Completo' : 'Full Report' }}</span>
                </div>
              </div>
              <button class="view-details">{{ currentLanguage === 'es' ? 'Ver Informe' : 'View Report' }}</button>
            </div>
            <div class="card-image">
              <img src="../assets/tarifas/portadakatxalot.png" alt="Katxalot Survey" />
            </div>
          </div>
          
          <div class="yacht-card ocean">
            <div class="card-content">
              <h3>{{ currentLanguage === 'es' ? 'Survey Louise Michel' : 'Louise Michel Survey' }}</h3>
              <p>{{ currentLanguage === 'es' ? 'Survey integral de yate a motor cubriendo sistemas de motor, instalaciones eléctricas y evaluación de integridad estructural.' : 'Comprehensive survey of motor yacht covering engine systems, electrical installations, and structural integrity assessment.' }}</p>
              <div class="yacht-specs">
                <div class="spec">
                  <span class="icon">🛥️</span>
                  <span>{{ currentLanguage === 'es' ? 'Yate a Motor' : 'Motor Yacht' }}</span>
                </div>
                <div class="spec">
                  <span class="icon">🔧</span>
                  <span>{{ currentLanguage === 'es' ? 'Análisis Técnico' : 'Technical Analysis' }}</span>
                </div>
              </div>
              <button class="view-details">{{ currentLanguage === 'es' ? 'Ver Informe' : 'View Report' }}</button>
            </div>
            <div class="card-image">
              <img src="../assets/tarifas/louisemichel.png" alt="Louise Michel Survey" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Section -->
    <section class="shop-section">
      <div class="container">
        <div class="shop-content">
          <div class="shop-text">
            <h2>{{ currentLanguage === 'es' ? 'Visita Nuestra Tienda' : 'Visit Our Shop' }}</h2>
            <p>{{ currentLanguage === 'es' ? 'Descubre merchandising náutico exclusivo, informes profesionales y servicios especializados para entusiastas de barcos clásicos.' : 'Discover exclusive nautical merchandise, professional reports, and specialized services for classic boat enthusiasts.' }}</p>
            <div class="shop-links">
              <a href="https://ko-fi.com/infosernautic/shop" target="_blank" class="shop-btn primary">
                🛍️ {{ currentLanguage === 'es' ? 'Visitar Tienda' : 'Visit Our Store' }}
              </a>
              <a href="https://docs.google.com/spreadsheets/d/1t-13y7u2cRWIYO2ZxsN-SJXvm92NRyjn0SESdOsw0qQ/view?usp=drive_link" target="_blank" class="shop-btn secondary">
                🎥 {{ currentLanguage === 'es' ? 'Barcos Especiales para Cine y Eventos' : 'Special Boats for Film & Events' }}
              </a>
            </div>
          </div>
          <div class="shop-services">
            <div class="service-card">
              <div class="service-icon">📚</div>
              <h3>{{ currentLanguage === 'es' ? 'Informes Profesionales' : 'Professional Reports' }}</h3>
              <p>{{ currentLanguage === 'es' ? 'Documentación detallada de surveys' : 'Detailed survey documentation' }}</p>
            </div>
            <div class="service-card">
              <div class="service-icon">⚓</div>
              <h3>{{ currentLanguage === 'es' ? 'Merchandising Náutico' : 'Nautical Merchandise' }}</h3>
              <p>{{ currentLanguage === 'es' ? 'Artículos exclusivos de barcos clásicos' : 'Exclusive classic boat items' }}</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🎥</div>
              <h3>{{ currentLanguage === 'es' ? 'Cine y Eventos' : 'Film & Events' }}</h3>
              <p>{{ currentLanguage === 'es' ? 'Barcos para producciones especiales' : 'Boats for special productions' }}</p>
            </div>
          </div>
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
        <div class="contact-header">
          <h2 class="contact-title">{{ currentLanguage === 'es' ? 'Ponte en Contacto' : 'Get In Touch' }}</h2>
          <p class="contact-subtitle">{{ currentLanguage === 'es' ? '¿Listo para comenzar tu peritaje naval? Contacta con Mónica para experiencia náutica profesional.' : 'Ready to start your marine survey? Contact Mónica for professional nautical expertise.' }}</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
                </svg>
              </div>
              <div class="method-info">
                <h3>{{ currentLanguage === 'es' ? 'Teléfono' : 'Phone' }}</h3>
                <a href="tel:+34609448459">+34 609 448 459</a>
                <span class="country">🇪🇸 {{ currentLanguage === 'es' ? 'España' : 'Spain' }}</span>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="white"/>
                  <polyline points="22,6 12,13 2,6" stroke="#1e3a8a" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div class="method-info">
                <h3>{{ currentLanguage === 'es' ? 'Correo' : 'Email' }}</h3>
                <a href="mailto:barcosclasicos@infosernautic.com">barcosclasicos@infosernautic.com</a>
                <span class="response-time">{{ currentLanguage === 'es' ? 'Respuesta en 24h' : 'Response within 24h' }}</span>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.515" fill="#25D366"/>
                </svg>
              </div>
              <div class="method-info">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/34609448459">{{ currentLanguage === 'es' ? 'Mensaje a Mónica' : 'Message Mónica' }}</a>
                <span class="availability">{{ currentLanguage === 'es' ? 'Respuesta rápida' : 'Quick response' }}</span>
              </div>
            </div>
          </div>
          
          <div class="contact-location">
            <div class="location-card">
              <div class="location-header">
                <img src="../assets/portada/MONI.png" alt="Mónica" class="monica-img" />
                <div class="location-text">
                  <h3>{{ currentLanguage === 'es' ? 'Nuestra Ubicación' : 'Our Location' }}</h3>
                  <p>M/S Bakea, Muelle de España<br>s/n, BARCELONA 08039</p>
                </div>
              </div>
              
              <div class="appointment-info">
                <div class="appointment-icon">📅</div>
                <div class="appointment-text">
                  <h4>{{ currentLanguage === 'es' ? 'Solo con Cita Previa' : 'By Appointment Only' }}</h4>
                  <p v-if="currentLanguage === 'es'">Solo atendemos bajo visita concertada</p>
                  <p v-else>We only attend by prior appointment</p>
                </div>
              </div>
              
              <div class="social-links">
                <a href="#" class="social-link telegram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="#0088cc"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script scoped>
export default {
  name: 'App',
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
  min-height: fit-content !important;
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

.language-selector {
  display: flex;
  align-items: center;
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

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.logo img {
  height: 70px;
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
  min-height: calc(100vh - 160px);
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
  overflow-x: scroll !important;
  overflow-y: hidden;
  padding: 0 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
}

.gallery-container::-webkit-scrollbar {
  display: none;
}

.gallery-images {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  min-width: calc(8 * (300px + 20px));
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



/* Shop Section */
.shop-section {
  padding: 60px 0;
  background: white;
}

.shop-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.shop-text h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.shop-text p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 30px;
  line-height: 1.7;
}

.shop-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.shop-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: center;
}

.shop-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.shop-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.shop-btn.secondary {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.shop-btn.secondary:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

.shop-services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-card {
  background: #f8fafc;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border-color: #3b82f6;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.service-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
}

.service-card p {
  color: #4a5568;
  font-size: 0.9rem;
}

/* Contact Section */
.contact {
  padding: 80px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
}

.contact-title {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: white;
  letter-spacing: -0.5px;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255,255,255,0.1);
  padding: 25px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
}

.method-icon img {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.method-icon svg {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.method-info h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #ffd700;
}

.method-info a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  transition: color 0.3s ease;
}

.method-info a:hover {
  color: #ffd700;
}

.method-info span {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
}

.location-card {
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.location-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.monica-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.location-text h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 8px;
}

.location-text p {
  color: rgba(255,255,255,0.9);
  line-height: 1.5;
}

.appointment-info {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
}

.appointment-icon {
  font-size: 1.5rem;
  margin-top: 2px;
}

.appointment-text h4 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffd700;
  margin-bottom: 5px;
}

.appointment-text p {
  color: rgba(255,255,255,0.8);
  font-size: 0.95rem;
  line-height: 1.4;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.social-link img {
  width: 20px;
  height: 20px;
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Wave Separators */
.wave-separator {
  position: relative;
  height: 120px;
  overflow: hidden;
  line-height: 0;
}

.wave-separator svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 120px;
}

.hero-to-menu {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
}

.menu-to-experience {
  background: rgba(30, 58, 138, 0.95);
}

.experience-to-fleet {
  background: #f8fafc;
}

.fleet-to-shop {
  background: white;
}

.shop-to-gallery {
  background: white;
}

.gallery-to-contact {
  background: #f8fafc;
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