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
            <router-link to="/mundo-barco" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
            <router-link to="/tarifas" class="mobile-menu-link active" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
            <router-link to="/about-us" class="mobile-menu-link" @click="toggleMobileMenu">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
          </div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-center">
          <div class="header-images">
            <img src="../assets/tarifas/tarifa-logo.png" alt="Tarifas" class="header-logo" />
            <img src="../assets/tarifas/antpm.png" alt="ANTPM" class="header-logo" />
          </div>
          <div class="company-name">
            <h1 class="hero-title">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</h1>
            <h2><span class="year-text">{{ currentLanguage === 'es' ? 'año 2025' : 'year 2025' }}</span></h2>
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
          <router-link to="/servicios" class="menu-link-nav">{{ currentLanguage === 'es' ? 'SERVICIOS' : 'SERVICES' }}</router-link>
          <router-link to="/mundo-barco" class="menu-link-nav">{{ currentLanguage === 'es' ? 'EL MUNDO DEL BARCO' : 'BOAT WORLD' }}</router-link>
          <router-link to="/tarifas" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
          <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
        </div>
      </div>
    </nav>

    <!-- Tasaciones Section -->
    <section class="tasaciones">
      <div class="container">
        <div class="section-card">
          <div class="section-header">
            <h2>{{ currentLanguage === 'es' ? 'TASACIONES y VALORACIONES' : 'APPRAISALS and VALUATIONS' }}</h2>
            <p class="section-subtitle">{{ currentLanguage === 'es' ? 'Hacienda, herencias, divorcio, bienes' : 'Treasury, inheritances, divorce, assets' }}</p>
          </div>
          
          <div class="section-content">
            <p class="intro-text">
              {{ currentLanguage === 'es' ? 'A veces necesitamos disponer de una' : 'Sometimes we need to have an' }} 
              <strong>{{ currentLanguage === 'es' ? 'VALORACIÓN OFICIAL' : 'OFFICIAL VALUATION' }}</strong> 
              {{ currentLanguage === 'es' ? 'de una embarcación, por los motivos que sea. Efectuamos' : 'of a vessel, for whatever reasons. We carry out' }} 
              <strong>{{ currentLanguage === 'es' ? 'TASACIONES y VALORACIONES' : 'APPRAISALS and VALUATIONS' }}</strong> 
              {{ currentLanguage === 'es' ? 'en toda Europa. También se incluye la defensa de la tasación en juzgado, si se precisa, llegado el caso*' : 'throughout Europe. Defense of the appraisal in court is also included, if required, when the case arises*' }}
            </p>
            
            <div class="pricing-section">
              <div class="pricing-header">
                <h3>{{ currentLanguage === 'es' ? 'TASAR/VALORAR Barcelona y área' : 'APPRAISE/VALUE Barcelona and area' }}</h3>
                <span class="fiscal-badge">{{ currentLanguage === 'es' ? 'Con VALOR FISCAL' : 'With FISCAL VALUE' }}</span>
              </div>
              
              <div class="pricing-grid">
                <div class="pricing-image">
                  <img src="../assets/tarifas/TARIFAS1.png" alt="Tasación" class="service-image" />
                </div>
                <div class="pricing-table">
                  <div class="price-row">
                    <span class="length">8 a 10 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">475 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">675 €</span>
                  </div>
                  <div class="price-row">
                    <span class="length">10,01 a 12 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">575 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">800 €</span>
                  </div>
                  <div class="price-row">
                    <span class="length">12,01 a 15 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">675 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">975 €</span>
                  </div>
                  <div class="price-row">
                    <span class="length">15,01 a 18 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">775 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">1.175 €</span>
                  </div>
                  <div class="price-row">
                    <span class="length">18,01 a 22 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">900 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">1.350 €</span>
                  </div>
                  <div class="price-row">
                    <span class="length">22,01 a 24 mts</span>
                    <span class="dots">……..…</span>
                    <span class="price">1.250 €</span>
                    <span class="dots">……..…</span>
                    <span class="price">1.650 €</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="important-notes">
              <p class="note-text">
                <strong>{{ currentLanguage === 'es' ? 'Válido embarcaciones de fibra de vidrio /Aluminio/Acero. Madera aumenta un 25% más. Otras esloras envía un mail con tu consulta:' : 'Valid for fiberglass/Aluminum/Steel vessels. Wood increases by 25% more. For other lengths send an email with your query:' }}</strong>
                <a href="mailto:barcosclasicos@infosernautic.com" class="email-link">barcosclasicos@infosernautic.com</a>
              </p>
              <p class="disclaimer">
                {{ currentLanguage === 'es' ? '(*válido para la provincia de Barcelona sin coste añadido más que los gastos de desplazamiento y 3 horas de minuta, durante un plazo de 6 meses máximo a partir de la fecha del informe.)' : '(*valid for the province of Barcelona with no added cost other than travel expenses and 3 hours of billing, for a maximum period of 6 months from the date of the report.)' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <!-- Certificados y Mediciones -->
        <div class="service-card">
          <div class="service-content">
            <div class="service-text">
              <h3>{{ currentLanguage === 'es' ? 'CERTIFICADOS Y MEDICIONES' : 'CERTIFICATES AND MEASUREMENTS' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? 'Cambios de bandera, documentación del propio barco (histórico, sobre el Astillero, etc) la máquina burocrática ESPAÑOLA insaciable en papeles y papeles es posible que nos soliciten algún informe o documento que no se tenga.' : 'Flag changes, boat documentation (historical, about the Shipyard, etc.) the insatiable Spanish bureaucratic machine for papers and papers may request some report or document that we do not have.' }}
              </p>
              <p>{{ currentLanguage === 'es' ? 'Consultanos tu problema y que necesitas.' : 'Consult us about your problem and what you need.' }}</p>
              <p class="highlight-text">{{ currentLanguage === 'es' ? '¡Buscaremos una SOLUCIÓN!' : 'We will find a SOLUTION!' }}</p>
            </div>
            <div class="service-image">
              <img src="../assets/tarifas/tarifas0.png" alt="Certificados" />
            </div>
          </div>
        </div>

        <!-- Consultoría Técnica -->
        <div class="service-card reverse">
          <div class="service-content">
            <div class="service-image">
              <img src="../assets/tarifas/tarifas2.png" alt="Consultoría" />
            </div>
            <div class="service-text">
              <h3>{{ currentLanguage === 'es' ? 'Consultoría Técnica' : 'Technical Consulting' }}</h3>
              <h4>{{ currentLanguage === 'es' ? '¿En qué consiste?' : 'What does it consist of?' }}</h4>
              <p>
                {{ currentLanguage === 'es' ? 'Muchas veces nos encaminamos en busca del barco ideal, pero no sabemos por dónde empezar, no conocemos los modelos, sus particularidades, o simplemente tener una segunda opinión. En unas horas, podremos aclarar muchas cosas!' : 'Many times we set out in search of the ideal boat, but we don\'t know where to start, we don\'t know the models, their particularities, or simply want a second opinion. In a few hours, we can clarify many things!' }}
              </p>
              <div class="pricing-info">
                <p><strong>Barcelona</strong> {{ currentLanguage === 'es' ? 'presencial en nuestro barco/oficina a partir de' : 'in-person at our boat/office from' }} <strong>125 €</strong></p>
                <p><strong>{{ currentLanguage === 'es' ? 'Telemática' : 'Remote' }}</strong> {{ currentLanguage === 'es' ? 'a partir de' : 'from' }} <strong>99 €</strong></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Asesoría Técnica -->
        <div class="service-card">
          <div class="service-content">
            <div class="service-text">
              <h3>{{ currentLanguage === 'es' ? 'Asesoría Técnica' : 'Technical Advisory' }}</h3>
              <h4>{{ currentLanguage === 'es' ? '¿En qué consiste?' : 'What does it consist of?' }}</h4>
              <p>
                {{ currentLanguage === 'es' ? 'Tenemos claro que nuestro barco necesita obras de mejora, pero no conocemos profesionales, ni precios ni por dónde empezar, ¡te ayudo!' : 'We are clear that our boat needs improvement work, but we don\'t know professionals, prices or where to start, I help you!' }}
              </p>
              <div class="pricing-info">
                <p><strong>Barcelona</strong> {{ currentLanguage === 'es' ? 'y área:' : 'and area:' }} <strong>175 €</strong>, {{ currentLanguage === 'es' ? 'resto consultar gastos de desplazamiento.' : 'rest consult travel expenses.' }}</p>
              </div>
            </div>
            <div class="service-image">
              <img src="../assets/tarifas/tarifas3.png" alt="Asesoría" />
            </div>
          </div>
        </div>

        <!-- Survey / Peritaciones -->
        <div class="service-card reverse">
          <div class="service-content">
            <div class="service-image">
              <img src="../assets/tarifas/FOTO 1 TARIFAS.jpg" alt="Survey" />
            </div>
            <div class="service-text">
              <h3>{{ currentLanguage === 'es' ? 'Survey / Peritaciones' : 'Survey / Expert Assessments' }}</h3>
              <h4>{{ currentLanguage === 'es' ? 'Informe de estado y conservación' : 'Condition and conservation report' }}</h4>
              <p>
                {{ currentLanguage === 'es' ? 'Creemos haber encontrado nuestro barco perfecto, pero tenemos tantas dudas: ¿me oculta algo el vendedor? ¿estará todo bien? ¿se nos escapa algo? ¿eso que dice que es poca cosa será así? ¿ese ruidito del motor? , aquí ofrecemos' : 'We think we have found our perfect boat, but we have so many doubts: is the seller hiding something from me? will everything be fine? are we missing something? will that thing he says is minor really be so? that little engine noise? here we offer' }} 
                <strong>3</strong> {{ currentLanguage === 'es' ? 'soluciones:' : 'solutions:' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Survey Express -->
        <div class="service-card survey-express">
          <div class="service-content">
            <div class="service-text">
              <h3 class="express-title">{{ currentLanguage === 'es' ? '1: SURVEY EXPRESS' : '1: EXPRESS SURVEY' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? 'Visitamos el barco con el interesado o solos, pero no emitimos informe técnico por escrito, simplemente señalamos in situ lo que encontramos. En caso de que el interesado no pueda acompañarnos en la visita, efectuamos o un video con el resultado de la inspección o una conexión vía videollamada donde enseñamos lo que hemos visto.' : 'We visit the boat with the interested party or alone, but we do not issue a written technical report, we simply point out on site what we find. In case the interested party cannot accompany us on the visit, we make either a video with the result of the inspection or a video call connection where we show what we have seen.' }}
              </p>
              <h4>{{ currentLanguage === 'es' ? 'TARIFAS:' : 'RATES:' }}</h4>
              <div class="express-pricing">
                <div class="pricing-grid-express">
                  <div class="pricing-text">
                    <p>{{ currentLanguage === 'es' ? 'Visita Barcelona y área,' : 'Visit Barcelona and area,' }}</p>
                  </div>
                  <div class="pricing-details">
                    <p>{{ currentLanguage === 'es' ? 'para' : 'for' }} <strong>8 {{ currentLanguage === 'es' ? 'a' : 'to' }} 10 {{ currentLanguage === 'es' ? 'mts' : 'mts' }}</strong> {{ currentLanguage === 'es' ? 'a partir de' : 'from' }} <strong>400 €</strong></p>
                    <p>{{ currentLanguage === 'es' ? 'con video o llamada:' : 'with video or call:' }} <strong>450 €</strong></p>
                    <p>{{ currentLanguage === 'es' ? 'para' : 'for' }} <strong>10 {{ currentLanguage === 'es' ? 'a' : 'to' }} 12 {{ currentLanguage === 'es' ? 'mts' : 'mts' }}</strong> {{ currentLanguage === 'es' ? 'a partir de' : 'from' }} <strong>500 €</strong></p>
                    <p>{{ currentLanguage === 'es' ? 'con video o llamada:' : 'with video or call:' }} <strong>575 €</strong></p>
                  </div>
                </div>
                <p class="small-note">
                  {{ currentLanguage === 'es' ? 'Otras esloras consultanos! para más de una unidad, se aplican descuentos, no te preocupes si el barco visitado no es el que te conviene, a la 2ª, 3ª y 4ª* unidad se aplican descuentos de hasta el 75%, porque sabemos que no es fácil!' : 'Other lengths consult us! for more than one unit, discounts apply, don\'t worry if the visited boat is not the one that suits you, to the 2nd, 3rd and 4th* unit discounts of up to 75% apply, because we know it\'s not easy!' }}
                </p>
                <p class="highlight-note">
                  <strong>{{ currentLanguage === 'es' ? '*Nuestra experiencia es que a la 4ª visita "hay barco".' : '*Our experience is that on the 4th visit "there is a boat".' }}</strong>
                </p>
              </div>
            </div>
            <div class="service-image">
              <img src="../assets/tarifas/FOTO 2 TARIFAS.jpeg" alt="Survey Express" />
            </div>
          </div>
        </div>

        <!-- Survey 2 -->
        <div class="service-card survey-2">
          <div class="service-content">
            <div class="service-text full-width">
              <h3 class="survey-title">{{ currentLanguage === 'es' ? '2: SURVEY: Con informe técnico' : '2: SURVEY: With technical report' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? 'Visitamos el barco y realizamos un informe técnico muy completo y detallado, sobre lo visto, detallando todos los elementos e identificando su posición y estado. También incluye el coste de reparación / rehabilitación aproximado.' : 'We visit the boat and carry out a very complete and detailed technical report on what was seen, detailing all elements and identifying their position and condition. It also includes the approximate repair/rehabilitation cost.' }}
              </p>
              <h4>{{ currentLanguage === 'es' ? 'TARIFAS:' : 'RATES:' }}</h4>
              <div class="survey-pricing">
                <div class="pricing-grid-survey">
                  <div class="pricing-text">
                    <p>{{ currentLanguage === 'es' ? 'Barcelona y área para' : 'Barcelona and area for' }}</p>
                  </div>
                  <div class="pricing-details">
                    <p><strong>8 {{ currentLanguage === 'es' ? 'a' : 'to' }} 10 {{ currentLanguage === 'es' ? 'mts' : 'mts' }} 700 €</strong></p>
                    <p><strong>10 {{ currentLanguage === 'es' ? 'a' : 'to' }} 12 {{ currentLanguage === 'es' ? 'mts' : 'mts' }} 900 €</strong></p>
                  </div>
                </div>
                <p class="small-note">
                  {{ currentLanguage === 'es' ? 'Más 12 mts: consultar según eslora y antigüedad.' : 'More than 12 mts: consult according to length and age.' }}
                </p>
                <div class="survey-example">
                  <p>{{ currentLanguage === 'es' ? '¿Quieres ver un survey?' : 'Want to see a survey?' }}</p>
                  <button @click="showPdf = !showPdf" v-if="!showPdf" class="pdf-btn">
                    {{ currentLanguage === 'es' ? 'PINCHA AQUÍ' : 'CLICK HERE' }}
                  </button>
                  <button v-if="showPdf" @click="showPdf = false" class="pdf-btn">
                    {{ currentLanguage === 'es' ? 'CERRAR' : 'CLOSE' }}
                  </button>
                  <div v-if="showPdf" class="pdf-container">
                    <iframe src="SURVEY katxalot.pdf" width="100%" height="600px">
                      {{ currentLanguage === 'es' ? 'Tu navegador no soporta PDF.' : 'Your browser does not support PDF.' }}
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Survey 3 -->
        <div class="service-card survey-3 reverse">
          <div class="service-content">
            <div class="service-image">
              <img src="../assets/tarifas/louisemichel.png" alt="Survey Insurance" />
            </div>
            <div class="service-text">
              <h3 class="survey-title">{{ currentLanguage === 'es' ? '3: SURVEY: Informe técnico que además podrá servir para obtención seguro todo riesgo' : '3: SURVEY: Technical report that can also be used to obtain comprehensive insurance' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? 'Visitamos el barco y realizamos un informe técnico escrito sobre lo visto, detallando todos los elementos vistos e identificando su posición y estado. Se hace un especial hincapié en todos los elementos de seguridad a bordo, activos y pasivos, detallando la ayuda de aparatos electrónicos a la navegación, así como la ubicación e idoneidad.' : 'We visit the boat and carry out a written technical report on what was seen, detailing all elements seen and identifying their position and condition. Special emphasis is placed on all safety elements on board, active and passive, detailing the help of electronic navigation devices, as well as their location and suitability.' }}
              </p>
              <h4>{{ currentLanguage === 'es' ? 'TARIFAS:' : 'RATES:' }}</h4>
              <div class="survey-pricing">
                <div class="pricing-grid-survey">
                  <div class="pricing-text">
                    <p>{{ currentLanguage === 'es' ? 'Barcelona y área para' : 'Barcelona and area for' }}</p>
                  </div>
                  <div class="pricing-details">
                    <p><strong>8 {{ currentLanguage === 'es' ? 'a' : 'to' }} 10 {{ currentLanguage === 'es' ? 'mts' : 'mts' }} 830 €</strong></p>
                    <p><strong>10 {{ currentLanguage === 'es' ? 'a' : 'to' }} 12 {{ currentLanguage === 'es' ? 'mts' : 'mts' }} 1.000 €</strong></p>
                  </div>
                </div>
                <p class="small-note">
                  <strong>{{ currentLanguage === 'es' ? 'Más 12 mts: consultar según eslora y antigüedad.' : 'More than 12 mts: consult according to length and age.' }}</strong>
                </p>
                <div class="survey-example">
                  <p>{{ currentLanguage === 'es' ? '¿Quieres ver un survey de un barco no muy moderno que obtuvo seguro todo riesgo?' : 'Want to see a survey of a not very modern boat that obtained comprehensive insurance?' }}</p>
                  <button @click="showPdf2 = !showPdf2" v-if="!showPdf2" class="pdf-btn">
                    {{ currentLanguage === 'es' ? 'PINCHA AQUÍ' : 'CLICK HERE' }}
                  </button>
                  <button v-if="showPdf2" @click="showPdf2 = false" class="pdf-btn">
                    {{ currentLanguage === 'es' ? 'CERRAR' : 'CLOSE' }}
                  </button>
                  <div v-if="showPdf2" class="pdf-container">
                    <iframe src="SURVEY katxalot.pdf" width="100%" height="600px">
                      {{ currentLanguage === 'es' ? 'Tu navegador no soporta PDF.' : 'Your browser does not support PDF.' }}
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Additional Notes -->
        <div class="service-card notes-card">
          <div class="service-content">
            <div class="service-image">
              <img src="../assets/tarifas/tarifas4.png" alt="Notes" />
            </div>
            <div class="service-text">
              <h3>{{ currentLanguage === 'es' ? 'Nota:' : 'Note:' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? 'Fuera de lo que sería Barcelona y su área, se aplicarán gastos de desplazamiento y dietas si las hubiere. Si el desplazamiento se realiza con el vehículo del interesado sólo se aplica el 25% de lo que sería el 100% como gasto de desplazamiento. Respecto a motores, las pruebas de compresión mecánicas no están incluidas, que en caso de solicitar se efectuará por profesionales competentes de la zona donde se ubique el barco y que merezcan la confianza de INFOSER NAUTIC SL.' : 'Outside what would be Barcelona and its area, travel expenses and allowances will be applied if any. If the trip is made with the interested party\'s vehicle, only 25% of what would be 100% is applied as travel expense. Regarding engines, mechanical compression tests are not included, which if requested will be carried out by competent professionals in the area where the boat is located and who deserve the trust of INFOSER NAUTIC SL.' }}
              </p>
              <p>
                {{ currentLanguage === 'es' ? 'En cuanto a la instalación eléctrica si bien se revisa el cuadro, aspecto e instalacion, no esta incluido el megado del cableado que en caso de solicitar se efectuará por profesionales competentes de la zona donde se ubique el barco y que merezcan la confianza de INFOSER NAUTIC SL. Respecto a la Jarcia, en caso de no aportar facturas que justifique la antigüedad de la misma, se aplicarán los criterios recomendados por' : 'Regarding the electrical installation, although the panel, appearance and installation are reviewed, the megger testing of the wiring is not included, which if requested will be carried out by competent professionals in the area where the boat is located and who deserve the trust of INFOSER NAUTIC SL. Regarding the Rigging, in case of not providing invoices that justify its age, the criteria recommended by' }} <strong>Lloyd\'s {{ currentLanguage === 'es' ? 'y' : 'and' }} Bureau Veritas</strong> {{ currentLanguage === 'es' ? 'se aplicarán.' : 'will be applied.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Final Info Section -->
        <div class="service-card final-info">
          <div class="service-content">
            <div class="service-text full-width text-center">
              <h3 class="info-title">{{ currentLanguage === 'es' ? '¿Más información?' : 'More information?' }}</h3>
              <a href="mailto:barcosclasicos@infosernautic.com" class="email-contact">barcosclasicos@infosernautic.com</a>
              <p class="call-text">{{ currentLanguage === 'es' ? 'o llamar al' : 'or call' }}</p>
              <div class="phone-info">
                <img src="../assets/tarifas/SPAIN.png" alt="Spain" class="flag-icon" />
                <span class="phone-number">609.448.459</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <section class="footer-section">
      <div class="container">
        <div class="footer-content">
          <p>
            <strong>
              {{ currentLanguage === 'es' ? 'Yacht Broker, Asesoría Técnica, Peritajes, Perito Judicial de embarcaciones, Ingeniería Naval, Reparación, restauración, mecánica y servicios Náuticos en general tanto para profesionales como particulares desde 1994.' : 'Yacht Broker, Technical Consultancy, Expertise & Survey, Judiciary Expert, Naval Engineering, repair, restoration, mechanics and services Nautical Services in general or both professionals and individuals since 1994.' }}
            </strong>
          </p>
          <p>
            <strong>
              {{ currentLanguage === 'es' ? 'Yacht broker, Technical Consultancy, Expertise & Survey, Judiciary Expert, Naval Engineering, repair, restoration, mechanics and services Nautical Services in general or both professionals and individuals since 1994.' : 'Yacht Broker, Asesoría Técnica, Peritajes, Perito Judicial de embarcaciones, Ingeniería Naval, Reparación, restauración, mecánica y servicios Náuticos en general tanto para profesionales como particulares desde 1994.' }}
            </strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <div class="contact-header">
          <h2 class="contact-title">{{ currentLanguage === 'es' ? 'Ponte en Contacto' : 'Get In Touch' }}</h2>
          <p class="contact-subtitle">{{ currentLanguage === 'es' ? '¿Necesitas una tasación o consultoría? Contacta con Mónica para experiencia náutica profesional.' : 'Need an appraisal or consultation? Contact Mónica for professional nautical expertise.' }}</p>
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppTarifas',
  data() {
    return {
      currentLanguage: 'es',
      showPdf: false,
      showPdf2: false,
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

.header-images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}

.header-logo {
  width: 8em;
  height: fit-content;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: 4.2rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
}

.year-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 0.3px;
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

/* Tasaciones Section */
.tasaciones {
  padding: 100px 0;
  background: #f8fafc;
}

.section-card {
  background: white;
  border-radius: 25px;
  padding: 60px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #4a5568;
  font-weight: 600;
}

.intro-text {
  font-size: 1.2rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 40px;
  text-align: center;
}

.pricing-section {
  margin-bottom: 40px;
}

.pricing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.pricing-header h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
}

.fiscal-badge {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: center;
}

.pricing-image {
  text-align: center;
}

.service-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.pricing-table {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.price-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  padding: 15px 20px;
  background: #f8fafc;
  border-radius: 10px;
  font-size: 1rem;
}

.length {
  font-weight: 600;
  color: #1a202c;
}

.dots {
  color: #94a3b8;
  font-weight: 300;
}

.price {
  font-weight: 700;
  color: #3b82f6;
  text-align: center;
}

.important-notes {
  background: #f0f9ff;
  padding: 30px;
  border-radius: 15px;
  border-left: 4px solid #3b82f6;
}

.note-text {
  font-size: 1.1rem;
  color: #1a202c;
  margin-bottom: 15px;
  line-height: 1.7;
}

.email-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
}

.email-link:hover {
  text-decoration: underline;
}

.disclaimer {
  font-size: 0.95rem;
  color: #6b7280;
  font-style: italic;
  line-height: 1.6;
}

/* Services Section */
.services {
  padding: 100px 0;
  background: white;
}

.service-card {
  background: #f8fafc;
  border-radius: 25px;
  padding: 50px;
  margin-bottom: 40px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.service-card.reverse .service-content {
  flex-direction: row-reverse;
}

.service-card.survey-express {
  background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%);
}

.service-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.service-text {
  flex: 1;
}

.service-text.full-width {
  flex: none;
  width: 100%;
}

.service-text h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 15px;
  text-decoration: underline;
}

.service-text h4 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 20px;
  text-decoration: underline;
}

.express-title {
  color: #fbbf24 !important;
  font-size: 2rem !important;
}

.service-text p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 20px;
}

.highlight-text {
  color: #fbbf24 !important;
  font-weight: 700 !important;
  font-size: 1.2rem !important;
}

.pricing-info {
  background: rgba(59, 130, 246, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.pricing-info p {
  margin-bottom: 10px;
  font-size: 1rem;
}

.express-pricing {
  background: rgba(251, 191, 36, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.service-image {
  flex: 0 0 auto;
}

.service-image img {
  width: 200px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Survey Specific Styles */
.service-card.survey-2 {
  background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
}

.service-card.survey-3 {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
}

.service-card.notes-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.service-card.final-info {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  text-align: center;
}

.survey-title {
  color: #1e40af !important;
  font-size: 1.6rem !important;
}

.pricing-grid-express,
.pricing-grid-survey {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: start;
  margin-bottom: 20px;
}

.pricing-details p {
  margin-bottom: 8px;
  font-size: 1rem;
}

.small-note {
  font-size: 0.9rem;
  color: #6b7280;
  font-style: italic;
  margin-top: 15px;
}

.highlight-note {
  background: rgba(251, 191, 36, 0.2);
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
}

.survey-example {
  margin-top: 25px;
}

.pdf-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: underline;
}

.pdf-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.pdf-container {
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.text-center {
  text-align: center;
}

.info-title {
  font-size: 2rem;
  color: #059669;
  margin-bottom: 20px;
}

.email-contact {
  font-size: 1.3rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-bottom: 15px;
}

.email-contact:hover {
  text-decoration: underline;
}

.call-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 15px;
}

.phone-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.flag-icon {
  width: 3em;
  height: auto;
}

.phone-number {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
}

/* Footer Section */
.footer-section {
  padding: 60px 0;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.footer-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.footer-content p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 20px;
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
  display: flex;
  justify-content: center;
}

.contact-methods {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
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
  min-width: 300px;
}

.contact-method:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
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

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 90vw !important;
  }
  
  .hero-title {
    font-size: 3.8rem;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .service-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .service-card.reverse .service-content {
    flex-direction: column;
  }
  
  .pricing-grid-express,
  .pricing-grid-survey {
    grid-template-columns: 1fr;
    gap: 15px;
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
  }
  
  .year-text {
    font-size: 1.4rem;
  }
  
  .header-images {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .header-logo {
    width: 6em;
  }
  
  .menu-content {
    padding: 10px 15px;
    max-width: 95vw;
  }
  
  .home-link {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
  
  .tasaciones {
    padding: 60px 0;
  }
  
  .section-card {
    padding: 30px 20px;
    border-radius: 15px;
  }
  
  .section-header {
    margin-bottom: 30px;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .intro-text {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  
  .pricing-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .pricing-header h3 {
    font-size: 1.3rem;
  }
  
  .fiscal-badge {
    align-self: center;
    font-size: 0.8rem;
    padding: 6px 15px;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .service-image {
    max-width: 150px;
    margin: 0 auto;
  }
  
  .price-row {
    grid-template-columns: 1fr auto 1fr;
    gap: 8px;
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  .length {
    font-size: 0.85rem;
  }
  
  .price {
    font-size: 0.9rem;
  }
  
  .dots {
    display: none;
  }
  
  .important-notes {
    padding: 20px;
    border-radius: 10px;
  }
  
  .note-text {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .disclaimer {
    font-size: 0.85rem;
  }
  
  .services {
    padding: 60px 0;
  }
  
  .service-card {
    padding: 25px 20px;
    margin-bottom: 30px;
    border-radius: 15px;
  }
  
  .service-content {
    gap: 25px;
  }
  
  .service-text h3 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  
  .service-text h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .express-title {
    font-size: 1.6rem !important;
  }
  
  .survey-title {
    font-size: 1.4rem !important;
  }
  
  .service-text p {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  .highlight-text {
    font-size: 1.1rem !important;
  }
  
  .pricing-info,
  .express-pricing {
    padding: 15px;
    margin-top: 15px;
  }
  
  .pricing-info p {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .service-image img {
    width: 150px;
  }
  
  .pricing-details p {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }
  
  .small-note {
    font-size: 0.8rem;
    margin-top: 12px;
  }
  
  .highlight-note {
    padding: 8px;
    margin-top: 12px;
  }
  
  .pdf-btn {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
  
  .info-title {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
  
  .email-contact {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  .call-text {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .phone-info {
    flex-direction: column;
    gap: 10px;
  }
  
  .flag-icon {
    width: 2.5em;
  }
  
  .phone-number {
    font-size: 1.6rem;
  }
  
  .footer-section {
    padding: 40px 0;
  }
  
  .footer-content p {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .contact {
    padding: 60px 0;
  }
  
  .contact-title {
    font-size: 2.2rem;
  }
  
  .contact-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-methods {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .contact-method {
    min-width: auto;
    width: 100%;
    max-width: 350px;
    padding: 20px;
  }
  
  .method-icon svg {
    width: 40px;
    height: 40px;
  }
  
  .method-info h3 {
    font-size: 1.1rem;
  }
  
  .method-info a {
    font-size: 1rem;
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
    line-height: 1.2;
  }
  
  .year-text {
    font-size: 1.2rem;
  }
  
  .header-images {
    gap: 15px;
    margin-bottom: 25px;
  }
  
  .header-logo {
    width: 5em;
  }
  
  .section-card {
    padding: 20px 15px;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .intro-text {
    font-size: 0.95rem;
  }
  
  .pricing-header h3 {
    font-size: 1.1rem;
  }
  
  .fiscal-badge {
    font-size: 0.75rem;
    padding: 5px 12px;
  }
  
  .price-row {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 5px;
    padding: 10px;
  }
  
  .length,
  .price {
    font-size: 0.8rem;
  }
  
  .service-card {
    padding: 20px 15px;
  }
  
  .service-text h3 {
    font-size: 1.3rem;
  }
  
  .service-text h4 {
    font-size: 1rem;
  }
  
  .express-title {
    font-size: 1.4rem !important;
  }
  
  .survey-title {
    font-size: 1.2rem !important;
  }
  
  .service-text p {
    font-size: 0.9rem;
  }
  
  .highlight-text {
    font-size: 1rem !important;
  }
  
  .service-image img {
    width: 120px;
  }
  
  .pricing-info,
  .express-pricing {
    padding: 12px;
  }
  
  .pricing-details p {
    font-size: 0.8rem;
  }
  
  .small-note {
    font-size: 0.75rem;
  }
  
  .info-title {
    font-size: 1.4rem;
  }
  
  .email-contact {
    font-size: 1rem;
  }
  
  .phone-number {
    font-size: 1.4rem;
  }
  
  .contact-title {
    font-size: 1.8rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-method {
    padding: 15px;
    flex-direction: column;
    text-align: center;
  }
  
  .method-icon svg {
    width: 35px;
    height: 35px;
  }
  
  .method-info h3 {
    font-size: 1rem;
  }
  
  .method-info a {
    font-size: 0.9rem;
  }
}
</style>