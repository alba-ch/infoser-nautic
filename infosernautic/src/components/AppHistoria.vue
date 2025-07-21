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
            <h1 class="hero-title">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</h1>
            <h2><span class="subtitle-text">{{ currentLanguage === 'es' ? 'Mónica Xufre - 30 años de experiencia náutica' : 'Mónica Xufre - 30 years of nautical experience' }}</span></h2>
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
          <router-link to="/tarifas" class="menu-link-nav">{{ currentLanguage === 'es' ? 'TARIFAS' : 'RATES' }}</router-link>
          <router-link to="/about-us" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
        </div>
      </div>
    </nav>

    <!-- Story Section 1 -->
    <section class="story-section">
      <div class="container">
        <div class="story-card">
          <div class="story-content">
            <div class="story-image">
              <img src="../assets/sobre-nosotros/S1.png" alt="Monica Xufre" />
            </div>
            <div class="story-text">
              <h2>{{ currentLanguage === 'es' ? 'Sobre mi vida de marino hasta llegar al perito:' : 'About my life as a sailor until becoming an expert:' }}</h2>
              <p>
                {{ currentLanguage === 'es' ? 'Monica Xufre (Octubre 1967), se inició en la navegación a los 6 años de edad, comenzando su vida laboral a los 15 años en la revista SKIPPER. Descubre la navegación de crucero de la mano de Enrique G.Curt. y realiza las primeras tareas de mantenimiento en el "Font Vella" como divertimento. Ello le llevó a lanzarse con 16 años y acabado el bachillerato, que cursó en nocturno, en el mantenimiento y reparación de barcos, como ayudante siendo contratada por la empresa BRICOMAR con sede en El Masnou.' : 'Monica Xufre (October 1967), started sailing at 6 years old, beginning her working life at 15 in SKIPPER magazine. She discovered cruising sailing with Enrique G.Curt and performed her first maintenance tasks on "Font Vella" as entertainment. This led her to launch at 16, having finished high school (which she studied at night), into boat maintenance and repair as an assistant, being hired by BRICOMAR company based in El Masnou.' }}
              </p>
            </div>
          </div>
          <div class="story-text-full">
            <p>
              {{ currentLanguage === 'es' ? 'Gracias a su experiencia en vela ligera y demostrado buen hacer como navegante en crucero, sus jefes, le confiaban pequeños traslados por la costa y a los 19 cruzaba a Baleares en solitario y conserva, una época sin gps, ni los precisos boletines meteorológicos de hoy. Su equipo era una corredera walker, compás sestrel y radiogonio Lofrans a pilas, amén de cartas y el perceptivo equipo de herramientas. ¡Era otra época! y tuvo excelentes maestros, auténticos marinos y navegantes.' : 'Thanks to her experience in light sailing and proven good work as a cruising navigator, her bosses entrusted her with small coastal transfers and at 19 she crossed to the Balearics solo, in an era without GPS or today\'s precise weather bulletins. Her equipment was a walker log, sestrel compass and battery-powered Lofrans radio direction finder, plus charts and the essential tool kit. It was another era! and she had excellent teachers, authentic sailors and navigators.' }}
            </p>
            <p>
              {{ currentLanguage === 'es' ? 'Estuvo trasladando barcos por todo el mediterraneo con no pocos percances, muy variados. Esto le llevó a un agotamiento anímico y pasó 1989 reponiendose consiguiendo trabajo en el Club Náutico El Balís como Secretaria Técnica Deportiva, recobrando un poco de paz y tranquilidad. Pero el mar llama y "sala" la sangre. Tras este año de reposo, volvió al transporte de barcos, algunos clásicos, charter y tareas de tripulante hasta 1993. Finalmente en 1994 fundaba INFOSER NAUTIC SL "Los Clásicos", Yacht Broker especialista en venta, restauración y reparación de clásicos que eran los que más le gustaban.' : 'She was moving boats throughout the Mediterranean with many varied mishaps. This led to emotional exhaustion and she spent 1989 recovering, getting work at Club Náutico El Balís as Sports Technical Secretary, regaining some peace and tranquility. But the sea calls and "salts" the blood. After this year of rest, she returned to boat transport, some classics, charter and crew tasks until 1993. Finally in 1994 she founded INFOSER NAUTIC SL "Los Clásicos", Yacht Broker specialist in sales, restoration and repair of classics which were her favorites.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="separator">
      <img src="../assets/sobre-nosotros/ESPACIADOR.png" alt="Separator" />
    </div>

    <!-- Story Section 2 -->
    <section class="story-section">
      <div class="container">
        <div class="story-card">
          <div class="story-content reverse">
            <div class="story-image">
              <img src="../assets/sobre-nosotros/FOTO 2.jpg" alt="Monica Xufre" />
            </div>
            <div class="story-text">
              <h3>{{ currentLanguage === 'es' ? 'Tras 30 años se inicia una nueva etapa:' : 'After 30 years a new stage begins:' }}</h3>
              <p>
                {{ currentLanguage === 'es' ? '"He vendido, restaurado y rehabilitado muchos barcos clásicos y conozco perfectamente a la mayoría de diseñadores, astilleros y barcos de fibra, especialmente construidos en los 70, 80 y 90, Los posteriores no tienen mucho secreto para mi obviamente. He cerrado ya la etapa de la venta de barcos y actualmente me concentraré en la peritación, tasación, valoración, asesoría técnica, certificación y medición, también si surge una restauración, y por supuesto a navegar."' : '"I have sold, restored and rehabilitated many classic boats and I know perfectly most designers, shipyards and fiberglass boats, especially those built in the 70s, 80s and 90s. The later ones obviously have no secrets for me. I have already closed the boat sales stage and currently I will concentrate on expert assessment, appraisal, valuation, technical advice, certification and measurement, also if a restoration arises, and of course sailing."' }}
              </p>
            </div>
          </div>
          <div class="story-content">
            <div class="story-image">
              <img src="../assets/sobre-nosotros/FOTO 2222.jpg" alt="Monica Xufre" />
            </div>
            <div class="story-text">
              <p>
                {{ currentLanguage === 'es' ? 'En mis inicios, no siempre tope con "buenas personas", pero por suerte las buenas personas han sido mayoría. Quiero agradecer a todas las personas buenas y respetuosas con las que me he topado, que por suerte, me animaron a no desistir, sobre todo agradecer al Sr. Adame (DEP), socio y gerente del Club Náutico El Balís en 1988-9, quien me dio la oportunidad de llevar la Secretaría Náutico Deportiva del Club, y recuperar esa estabilidad necesaria para continuar con más fuerza!' : 'In my beginnings, I didn\'t always encounter "good people", but fortunately good people have been the majority. I want to thank all the good and respectful people I have encountered, who fortunately encouraged me not to give up, especially thank Mr. Adame (RIP), partner and manager of Club Náutico El Balís in 1988-9, who gave me the opportunity to run the Club\'s Nautical Sports Secretariat, and recover that stability necessary to continue with more strength!' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="separator">
      <img src="../assets/sobre-nosotros/ESPACIADOR.png" alt="Separator" />
    </div>

    <!-- Masters Section -->
    <section class="story-section masters-section">
      <div class="container">
        <div class="story-card">
          <div class="section-header">
            <h3>{{ currentLanguage === 'es' ? 'Mención especial a:' : 'Special mention to:' }}</h3>
          </div>
          <div class="masters-grid">
            <figure class="master-figure">
              <img src="../assets/sobre-nosotros/foto 3.jpg" alt="Maestro Emilio Morales" />
              <figcaption>{{ currentLanguage === 'es' ? 'Maestro Emilio Morales (DEP)' : 'Master Emilio Morales (RIP)' }}<br>{{ currentLanguage === 'es' ? 'Foto: Ferrara 2014' : 'Photo: Ferrara 2014' }}</figcaption>
            </figure>
            <figure class="master-figure">
              <img src="../assets/sobre-nosotros/FOTO 4.jpg" alt="Maestro Joaquin Morales" />
              <figcaption>{{ currentLanguage === 'es' ? 'Maestro Joaquin Morales (hijo de Emilio)' : 'Master Joaquin Morales (son of Emilio)' }}<br>{{ currentLanguage === 'es' ? 'Foto: Analia 2010' : 'Photo: Analia 2010' }}</figcaption>
            </figure>
          </div>
          <div class="story-text-full">
            <p>
              {{ currentLanguage === 'es' ? 'Grandes proyectos de restauración, no hubieran sido posibles sin la profesionalidad e implicación del Maestro Emilio y Maestro Joaquin, calafates de 4ª y 5ª generación, conocedores del oficio. Junto a ellos he restaurado barcos como el "Meltemi" (2007-8), "Analia" (2009-10) "Lilibeth" (2011), "Ferrara" (2013-5), "Rejucilo IV" (2020) "La Juliana" (2019-22) "Bakea" (2022) y realizado muchas pequeñas reparaciones en otros barcos.' : 'Great restoration projects would not have been possible without the professionalism and involvement of Master Emilio and Master Joaquin, 4th and 5th generation caulkers, knowledgeable in the trade. Together with them I have restored boats such as "Meltemi" (2007-8), "Analia" (2009-10) "Lilibeth" (2011), "Ferrara" (2013-5), "Rejucilo IV" (2020) "La Juliana" (2019-22) "Bakea" (2022) and carried out many small repairs on other boats.' }}
            </p>
          </div>
          <div class="boats-gallery">
            <figure class="boat-figure">
              <img src="../assets/sobre-nosotros/FOTO 5.jpg" alt="Analia" />
              <figcaption>{{ currentLanguage === 'es' ? 'Analia, ketch 24 mts' : 'Analia, ketch 24 mts' }}</figcaption>
            </figure>
            <figure class="boat-figure">
              <img src="../assets/sobre-nosotros/foto 6.jpg" alt="Ferrara" />
              <figcaption>{{ currentLanguage === 'es' ? 'Ferrara MFV 20 mts' : 'Ferrara MFV 20 mts' }}</figcaption>
            </figure>
            <figure class="boat-figure">
              <img src="../assets/sobre-nosotros/5.jpg" alt="Meltemi" />
              <figcaption>{{ currentLanguage === 'es' ? 'Meltemi, ketch 16 mts' : 'Meltemi, ketch 16 mts' }}</figcaption>
            </figure>
          </div>
          <div class="lilibeth-section">
            <div class="lilibeth-images">
              <img src="../assets/sobre-nosotros/foto10.png" alt="Lilibeth" />
              <img src="../assets/sobre-nosotros/foto11.png" alt="Lilibeth" />
            </div>
            <p class="lilibeth-text">
              {{ currentLanguage === 'es' ? 'Lilibeth 12 mts, un Dallimore que llegó procedente del lago Michigan!' : 'Lilibeth 12 mts, a Dallimore that came from Lake Michigan!' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="separator">
      <img src="../assets/sobre-nosotros/ESPACIADOR.png" alt="Separator" />
    </div>

    <!-- Gallart Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-card">
          <div class="gallart-images">
            <img src="../assets/sobre-nosotros/Foto 8.jpg" alt="J.Jaume Gallart" />
            <img src="../assets/sobre-nosotros/FOTO GALLARTS.jpg" alt="Gallarts" />
          </div>
          <div class="story-text-full">
            <p>
              <strong>{{ currentLanguage === 'es' ? 'J.Jaume Gallart y foto gallarts' : 'J.Jaume Gallart and gallarts photo' }}</strong><br>
              {{ currentLanguage === 'es' ? 'Todo lo que explicaba era oro para mi: la época dorada de la construcción en madera y la transición a la fibra: nadie como él para entender la industria náutica en España, desde la playa de Vilassar a aprender a UK el oficio. Sus historias sobre los salones náuticos en EEUU, no tenían desperdicio. El primer barco que restaure (1994) era precisamente un Carlson 29, cuya mayoría de unidades se vendieron en EEUU. He compartido muy buenos momentos, y ha sido un referente toda mi vida, ya que se trasladaron de Badalona (donde viví muchos años) a Mataró justo al lado de la nave de ASTILLEROS XUFRE, propiedad de un primo de mi padre y a donde iba de visita a menudo de pequeña con él.' : 'Everything he explained was gold to me: the golden age of wooden construction and the transition to fiberglass: no one like him to understand the nautical industry in Spain, from the beach of Vilassar to learning the trade in the UK. His stories about boat shows in the USA were priceless. The first boat I restored (1994) was precisely a Carlson 29, most of whose units were sold in the USA. I have shared very good moments, and he has been a reference all my life, since they moved from Badalona (where I lived for many years) to Mataró right next to the ASTILLEROS XUFRE warehouse, owned by a cousin of my father and where I often visited as a child with him.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Separator -->
    <div class="separator">
      <img src="../assets/sobre-nosotros/ESPACIADOR.png" alt="Separator" />
    </div>

    <!-- Final Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-card">
          <div class="final-images">
            <img src="../assets/sobre-nosotros/Foto 13.jpg" alt="Yolanda Llinas" />
            <img src="../assets/sobre-nosotros/font vella.jpeg" alt="Font Vella" />
          </div>
          <div class="story-text-full">
            <p>
              <strong>{{ currentLanguage === 'es' ? 'Yolanda Llinas, yo misma, Laura G.Curt y Enrique G. Curt' : 'Yolanda Llinas, myself, Laura G.Curt and Enrique G. Curt' }}</strong><br>
              {{ currentLanguage === 'es' ? 'En especial Yolanda y Enrique que me acogieron en la revista Skipper, (con 15 años recién cumplidos, mientras cursaba bachillerato nocturno) en donde pude durante un par de años escribir artículos de regatas de windsurf, muy en boga en la época y en donde navegaba. De su mano, es donde descubrí las bondades de la navegación en crucero, a bordo del esponsorizado "Font Vella", acompañándolos en los traslados pre regatas y me inicie en el mantenimiento como tareas de tripulante. El primer winche que abrí en mi vida para limpiar y engrasar era del FontVella. Una amistad que dura hasta hoy, ¡40 años no son nada! Con Yolanda Llinas somos miembros de la Junta Directiva de la Asociación Española barcos de Época y Clásicos (AEBEC)' : 'Especially Yolanda and Enrique who welcomed me at Skipper magazine, (at 15 years old, while studying night high school) where I could write windsurfing regatta articles for a couple of years, very popular at the time and where I sailed. From their hand, is where I discovered the benefits of cruising sailing, aboard the sponsored "Font Vella", accompanying them in pre-regatta transfers and I started in maintenance as crew tasks. The first winch I opened in my life to clean and grease was from FontVella. A friendship that lasts until today, 40 years is nothing! With Yolanda Llinas we are members of the Board of Directors of the Spanish Association of Vintage and Classic Boats (AEBEC)' }}
            </p>
          </div>
          <div class="rejucilo-section">
            <div class="rejucilo-images">
              <img src="../assets/sobre-nosotros/Foto 9.jpg" alt="Juan Kouyoumdjian" />
              <img src="../assets/sobre-nosotros/REJUCILO.png" alt="Rejucilo IV" />
            </div>
            <div class="story-text-full">
              <p>
                <strong>{{ currentLanguage === 'es' ? 'Juan Kouyoumdjian: el reconocimiento a una trayectoria de 40 años.' : 'Juan Kouyoumdjian: recognition of a 40-year career.' }}</strong><br>
                (<a href="https://www.juanyachtdesign.com">https://www.juanyachtdesign.com</a>) {{ currentLanguage === 'es' ? 'quien en 2019 acudió a mi para pedirme un informe técnico y consejo sobre su joya, la "Rejucilo IV". Realice varias mejoras, y desde este año la tengo al cuidado y custodia, además la traslado personalmente allá donde Juan K la necesita. He recorrido ya más de 2500 millas con ella por todo el Mediterraneo occidental, y redescubierto la navegación a motor, que también tiene su encanto, sobre todo cuando vas con un mueble como la Rejucilo IV. Hay que estar muy atento a la meteo y la autonomía !!! Además, trabajar para Juan K, te aporta un aprendizaje constante de un mundo que era para mi desconocido, amén de tener la oportunidad de conocer grandes Ingenieros y navegantes, regatistas olímpicos, mundialistas, en fin, una élite de lujo del mundo de la vela de alta competición.' : 'who in 2019 came to me to ask for a technical report and advice on his jewel, the "Rejucilo IV". I made several improvements, and since this year I have her in care and custody, I also personally transport her wherever Juan K needs her. I have already traveled more than 2500 miles with her throughout the western Mediterranean, and rediscovered motor sailing, which also has its charm, especially when you go with a piece of furniture like the Rejucilo IV. You have to be very attentive to the weather and autonomy !!! In addition, working for Juan K, gives you constant learning from a world that was unknown to me, not to mention having the opportunity to meet great Engineers and navigators, Olympic sailors, world champions, in short, a luxury elite from the world of high competition sailing.' }}
              </p>
            </div>
          </div>
          <div class="final-images-bottom">
            <img src="../assets/sobre-nosotros/FOTO 12.jpg" alt="Final photo 1" />
            <img src="../assets/sobre-nosotros/FOTO 11.jpg" alt="Final photo 2" />
          </div>
          <div class="story-text-full">
            <p><strong>{{ currentLanguage === 'es' ? 'Cierro una etapa y abro otra.' : 'I close one stage and open another.' }}</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="container">
        <div class="video-container">
          <iframe width="700" height="500" src="https://www.youtube.com/embed/O1PUEqk5C3Q" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppHistoria',
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
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.home-link:hover {
  background: rgba(255, 255, 255, 0.2);
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

/* Story Sections */
.story-section {
  padding: 100px 0;
  background: #f8fafc;
}

.story-section:nth-child(even) {
  background: white;
}

.story-card {
  background: white;
  border-radius: 25px;
  padding: 60px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 40px;
}

.story-content.reverse {
  grid-template-columns: 1fr 1fr;
}

.story-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.story-text h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 25px;
  font-style: italic;
}

.story-text h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 20px;
  text-decoration: underline;
  font-style: italic;
}

.story-text p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  font-style: italic;
  text-align: justify;
}

.story-text-full {
  margin-top: 30px;
}

.story-text-full p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
  text-align: justify;
}

/* Separator */
.separator {
  margin: 60px 0;
  text-align: center;
}

.separator img {
  width: 100%;
  height: auto;
  max-height: 2em;
}

/* Masters Section */
.masters-section {
  background: white;
}

.section-header {
  text-align: left;
  margin-bottom: 40px;
}

.section-header h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  font-style: italic;
}

.masters-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.master-figure {
  text-align: center;
}

.master-figure img {
  height: 15em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  margin-bottom: 15px;
}

.master-figure figcaption {
  font-size: 0.9rem;
  font-style: italic;
  color: #4a5568;
  line-height: 1.4;
}

.boats-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 40px 0;
}

.boat-figure {
  text-align: center;
}

.boat-figure img {
  height: 10em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  margin-bottom: 10px;
}

.boat-figure figcaption {
  font-size: 0.9rem;
  font-style: italic;
  color: #4a5568;
}

.lilibeth-section {
  margin-top: 40px;
  text-align: center;
}

.lilibeth-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  justify-items: center;
}

.lilibeth-images img {
  height: 15em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.lilibeth-text {
  font-size: 1.1rem;
  color: #4a5568;
  font-style: italic;
  text-align: center;
}

.gallart-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  justify-items: center;
}

.gallart-images img {
  height: 17em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.final-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  justify-items: center;
}

.final-images img {
  height: 19.5em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.rejucilo-section {
  margin: 40px 0;
}

.rejucilo-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
  justify-items: center;
}

.rejucilo-images img {
  height: 17.5em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.final-images-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 40px 0;
  justify-items: center;
}

.final-images-bottom img {
  height: 17.5em;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Video Section */
.video-section {
  padding: 80px 0;
  background: white;
}

.video-container {
  text-align: center;
  background: #f8fafc;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.video-container iframe {
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .story-content.reverse {
    grid-template-columns: 1fr;
  }
  
  .video-container iframe {
    width: 100% !important;
    height: 400px !important;
  }
  
  .masters-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .boats-gallery {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .lilibeth-images,
  .gallart-images,
  .final-images,
  .rejucilo-images,
  .final-images-bottom {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .master-figure img,
  .boat-figure img,
  .lilibeth-images img,
  .gallart-images img,
  .final-images img,
  .rejucilo-images img,
  .final-images-bottom img {
    height: auto;
    max-width: 100%;
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
  
  .story-card {
    padding: 40px 30px;
  }
  
  .story-text h2 {
    font-size: 1.8rem;
  }
  
  .story-text h3 {
    font-size: 1.3rem;
  }
  
  .video-container {
    padding: 20px;
  }
  
  .video-container iframe {
    width: 100% !important;
    height: 300px !important;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .story-card {
    padding: 30px 20px;
  }
  
  .story-text h2 {
    font-size: 1.5rem;
  }
}
</style>