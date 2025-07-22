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
      
      <div class="hero-content">
        <div class="hero-center">
          <div class="company-name">
            <h1 class="hero-title">{{ currentLanguage === 'es' ? 'TIENDA' : 'STORE' }}</h1>
            <h2><span class="subtitle-text">{{ currentLanguage === 'es' ? 'Productos y servicios náuticos especializados' : 'Specialized nautical products and services' }}</span></h2>
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
          <router-link to="/tienda" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'TIENDA' : 'STORE' }}</router-link>
          <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
        </div>
        <button @click="toggleMobileMenu" class="hamburger-btn mobile-sticky-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Products Section -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ currentLanguage === 'es' ? 'Nuestros Productos' : 'Our Products' }}</h2>
          <p>{{ currentLanguage === 'es' ? 'Informes profesionales y merchandising náutico especializado' : 'Professional reports and specialized nautical merchandise' }}</p>
        </div>
        
        <div class="products-grid" v-if="products.length">
          <div v-for="product in products" :key="product.id" class="product-card">
            <div class="product-image">
              <img :src="product.thumbnail || '/img/default-product.jpg'" :alt="product.title" />
            </div>
            <div class="product-info">
              <h3>{{ product.title }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-price">
                <span class="price">€{{ formatPrice(product.variants?.[0]?.prices?.[0]?.amount) }}</span>
              </div>
              <button @click="addToCart(product)" class="add-to-cart-btn">
                {{ currentLanguage === 'es' ? 'Añadir al Carrito' : 'Add to Cart' }}
              </button>
            </div>
          </div>
        </div>
        
        <div v-else class="loading">
          <p>{{ currentLanguage === 'es' ? 'Cargando productos...' : 'Loading products...' }}</p>
        </div>
      </div>
    </section>

    <!-- Cart -->
    <div v-if="showCart" class="cart-overlay" @click="showCart = false">
      <div class="cart-modal" @click.stop>
        <div class="cart-header">
          <h3>{{ currentLanguage === 'es' ? 'Carrito' : 'Cart' }}</h3>
          <button @click="showCart = false" class="close-btn">×</button>
        </div>
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <span>{{ item.title }}</span>
            <span>€{{ formatPrice(item.price) }}</span>
          </div>
        </div>
        <div class="cart-footer">
          <button @click="checkout" class="checkout-btn">
            {{ currentLanguage === 'es' ? 'Finalizar Compra' : 'Checkout' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Cart Button -->
    <button v-if="cartItems.length" @click="showCart = true" class="cart-button">
      🛒 {{ cartItems.length }}
    </button>
  </div>
</template>

<script>
import medusaService from '../services/medusaService.js'

export default {
  name: 'AppTienda',
  data() {
    return {
      currentLanguage: 'es',
      mobileMenuOpen: false,
      products: [],
      cartItems: [],
      showCart: false
    }
  },
  async mounted() {
    await this.loadProducts()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es'
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    handleScroll() {
      const mainMenu = this.$refs.mainMenu
      if (!mainMenu) return
      
      const menuTop = mainMenu.offsetTop
      const scrollY = window.scrollY
      
      if (scrollY > menuTop) {
        mainMenu.classList.add('sticky-active')
      } else {
        mainMenu.classList.remove('sticky-active')
      }
    },
    async loadProducts() {
      try {
        this.products = await medusaService.getProducts()
      } catch (error) {
        console.error('Error loading products:', error)
        this.products = []
      }
    },
    formatPrice(amount) {
      if (!amount || amount === undefined) return '0.00'
      return (amount / 100).toFixed(2)
    },
    async addToCart(product) {
      try {
        let cartId = localStorage.getItem('medusa_cart_id')
        if (!cartId) {
          const cart = await medusaService.createCart()
          if (cart) {
            cartId = cart.id
            localStorage.setItem('medusa_cart_id', cartId)
          }
        }
        
        if (cartId && product.variants?.[0]?.id) {
          await medusaService.addToCart(cartId, product.variants[0].id)
          this.cartItems.push({
            id: product.id,
            title: product.title,
            price: product.variants?.[0]?.prices?.[0]?.amount || 0
          })
          alert(this.currentLanguage === 'es' ? 'Producto añadido al carrito' : 'Product added to cart')
        }
      } catch (error) {
        console.error('Error adding to cart:', error)
      }
    },
    async checkout() {
      try {
        const cartId = localStorage.getItem('medusa_cart_id')
        if (cartId) {
          const cart = await medusaService.getCart(cartId)
          console.log('Checkout initiated', cart)
          // Here you would redirect to checkout page or payment processor
          alert(this.currentLanguage === 'es' ? 'Redirigiendo al checkout...' : 'Redirecting to checkout...')
        }
      } catch (error) {
        console.error('Checkout error:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Import existing styles */
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

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 50px 40px 50px;
  position: relative;
  z-index: 5;
  text-align: center;
}

.hero-center {
  max-width: 900px;
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
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 0;
  transition: all 0.3s ease;
  position: relative;
}

.home-link:hover {
  color: #fbbf24;
}

.home-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #fbbf24;
  transition: width 0.3s ease;
}

.home-link:hover::after {
  width: 100%;
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

/* Products Section */
.products-section {
  padding: 100px 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.section-header p {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 25px;
}

.product-info h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 10px;
}

.product-info p {
  color: #4a5568;
  margin-bottom: 15px;
  line-height: 1.6;
}

.product-price {
  margin-bottom: 20px;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

/* Cart */
.cart-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  z-index: 1000;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-modal {
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 20px;
  padding: 30px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.cart-header h3 {
  font-size: 1.5rem;
  color: #1a202c;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
}

.checkout-btn {
  width: 100%;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
}

.loading {
  text-align: center;
  padding: 60px 0;
  font-size: 1.2rem;
  color: #4a5568;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container {
    max-width: 95vw !important;
    padding: 0 15px;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .subtitle-text {
    font-size: 1.4rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .hamburger-btn {
    display: flex;
  }
  
  .menu-items-nav {
    display: none;
  }
}
</style>