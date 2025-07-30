<template>
  <div class="tienda">
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
          <h1 class="hero-title">{{ currentLanguage === 'es' ? 'Tienda Náutica' : 'Nautical Store' }}</h1>
          <p class="subtitle-text">{{ currentLanguage === 'es' ? 'Productos de calidad para tu embarcación' : 'Quality products for your vessel' }}</p>
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
          <router-link to="/about-us" class="menu-link-nav">{{ currentLanguage === 'es' ? 'MI HISTORIA' : 'MY STORY' }}</router-link>
          <router-link to="/tienda" class="menu-link-nav active">{{ currentLanguage === 'es' ? 'TIENDA' : 'STORE' }}</router-link>
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
          <p>{{ currentLanguage === 'es' ? 'Descubre nuestra selección de productos náuticos' : 'Discover our selection of nautical products' }}</p>
        </div>
        
        <div v-if="loading" class="loading">{{ currentLanguage === 'es' ? 'Cargando productos...' : 'Loading products...' }}</div>
        <div v-else-if="products.length === 0" class="no-products">{{ currentLanguage === 'es' ? 'No hay productos disponibles' : 'No products available' }}</div>
        <div v-else class="products-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <div class="product-image">
              <img v-if="product.image" :src="product.image" :alt="product.name">
              <div v-else class="no-image">Sin imagen</div>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="description">{{ product.description }}</p>
              <div class="product-price">
                <span class="price">€{{ product.price }}</span>
              </div>
              <button @click="addToCart(product)" class="add-to-cart-btn">{{ currentLanguage === 'es' ? 'Añadir al Carrito' : 'Add to Cart' }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Cart Button -->
    <button v-if="cartItems.length > 0" @click="showCart = true" class="cart-button">
      🛒 {{ cartItems.length }}
    </button>
    
    <!-- Cart Modal -->
    <div v-if="showCart" class="cart-overlay" @click="showCart = false">
      <div class="cart-modal" @click.stop>
        <div class="cart-header">
          <h3>{{ currentLanguage === 'es' ? 'Carrito de Compras' : 'Shopping Cart' }}</h3>
          <button @click="showCart = false" class="close-btn">&times;</button>
        </div>
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <div>
              <h4>{{ item.name }}</h4>
              <p>€{{ item.price }} x {{ item.quantity }}</p>
            </div>
            <div class="item-controls">
              <button @click="updateQuantity(item.id, -1)" class="qty-btn">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, 1)" class="qty-btn">+</button>
              <button @click="removeFromCart(item.id)" class="remove-btn">×</button>
            </div>
          </div>
        </div>
        <div class="cart-total">
          <strong>{{ currentLanguage === 'es' ? 'Total' : 'Total' }}: €{{ cartTotal }}</strong>
        </div>
        <button @click="proceedToCheckout" class="checkout-btn">
          {{ currentLanguage === 'es' ? 'Proceder al Pago' : 'Proceed to Checkout' }}
        </button>
      </div>
    </div>
    
    <!-- Checkout Modal -->
    <div v-if="showCheckout" class="cart-overlay" @click="showCheckout = false">
      <div class="checkout-modal" @click.stop>
        <div class="cart-header">
          <h3>{{ currentLanguage === 'es' ? 'Datos de Envío' : 'Shipping Information' }}</h3>
          <button @click="showCheckout = false" class="close-btn">&times;</button>
        </div>
        <form @submit.prevent="submitOrder">
          <div class="form-group">
            <input v-model="customerInfo.name" type="text" placeholder="Nombre completo" required>
          </div>
          <div class="form-group">
            <input v-model="customerInfo.email" type="email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input v-model="customerInfo.phone" type="tel" placeholder="Teléfono" required>
          </div>
          <div class="form-group">
            <textarea v-model="customerInfo.address" placeholder="Dirección completa" required></textarea>
          </div>
          <div class="order-summary">
            <h4>{{ currentLanguage === 'es' ? 'Resumen del Pedido' : 'Order Summary' }}</h4>
            <div v-for="item in cartItems" :key="item.id" class="summary-item">
              {{ item.name }} x{{ item.quantity }} - €{{ (item.price * item.quantity).toFixed(2) }}
            </div>
            <div class="summary-total">
              <strong>Total: €{{ cartTotal }}</strong>
            </div>
          </div>
          <button type="submit" class="checkout-btn">
            {{ currentLanguage === 'es' ? 'Confirmar Pedido' : 'Confirm Order' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTienda',
  data() {
    return {
      products: [],
      loading: true,
      currentLanguage: 'es',
      isSticky: false,
      mobileMenuOpen: false,
      cartItems: [],
      showCart: false,
      showCheckout: false,
      customerInfo: {
        name: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  async mounted() {
    await this.loadProducts();
    this.loadCart();
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async loadProducts() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL || 'https://infoser-back.onrender.com'}/api/products`);
        this.products = await response.json();
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        this.loading = false;
      }
    },
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    updateQuantity(productId, change) {
      const item = this.cartItems.find(item => item.id === productId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          this.removeFromCart(productId);
        } else {
          this.saveCart();
        }
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    loadCart() {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.cartItems = JSON.parse(saved);
      }
    },
    proceedToCheckout() {
      this.showCart = false;
      this.showCheckout = true;
    },
    async submitOrder() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL || 'https://infoser-back.onrender.com'}/api/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: this.cartItems,
            customerInfo: this.customerInfo,
            total: this.cartTotal
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          alert(this.currentLanguage === 'es' 
            ? `Pedido confirmado! Número de orden: ${data.orderId}` 
            : `Order confirmed! Order number: ${data.orderId}`);
          this.cartItems = [];
          this.saveCart();
          this.showCheckout = false;
          this.customerInfo = { name: '', email: '', phone: '', address: '' };
        }
      } catch (error) {
        alert(this.currentLanguage === 'es' ? 'Error al procesar el pedido' : 'Error processing order');
      }
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    },
    handleScroll() {
      this.isSticky = window.scrollY > 100;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
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
  overflow: hidden;
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
  padding: 120px 50px 40px 50px;
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

.loading, .no-products {
  text-align: center;
  padding: 60px 0;
  font-size: 1.2rem;
  color: #4a5568;
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
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-image {
  color: #94a3b8;
  font-size: 0.9rem;
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

.description {
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
  font-size: 1rem;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

/* Cart Styles */
.cart-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
}

.cart-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
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
  padding: 20px;
}

.cart-modal, .checkout-modal {
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 30px;
  max-height: 80vh;
  overflow-y: auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e8f0;
}

.cart-header h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  color: #1a202c;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f1f5f9;
}

.cart-item h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
  color: #1a202c;
}

.cart-item p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn, .remove-btn {
  background: #f1f5f9;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.qty-btn:hover {
  background: #e2e8f0;
}

.remove-btn {
  background: #fef2f2;
  color: #dc2626;
}

.remove-btn:hover {
  background: #fee2e2;
}

.cart-total {
  text-align: center;
  padding: 20px 0;
  font-size: 1.2rem;
  border-top: 2px solid #e2e8f0;
  margin-top: 15px;
}

.checkout-btn {
  width: 100%;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.form-group {
  margin-bottom: 15px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
}

.form-group textarea {
  min-height: 80px;
  resize: vertical;
}

.order-summary {
  background: #f8fafc;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.order-summary h4 {
  margin: 0 0 15px 0;
  color: #1a202c;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.summary-total {
  border-top: 1px solid #e2e8f0;
  padding-top: 10px;
  margin-top: 10px;
  font-size: 1.1rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container {
    max-width: 95vw;
    padding: 0 15px;
  }
  
  .navbar {
    padding: 15px 20px;
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
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(30, 58, 138, 0.98);
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  }
  
  .menu-items-nav.mobile-open {
    display: flex;
  }
  
  .menu-content {
    padding: 15px 20px;
    max-width: 100%;
    position: relative;
  }
  
  .lang-btn, .contact-btn {
    display: none;
  }
  
  .cart-modal, .checkout-modal {
    margin: 10px;
    padding: 20px;
    max-height: 90vh;
  }
  
  .cart-button {
    bottom: 15px;
    right: 15px;
    padding: 12px 16px;
    font-size: 1rem;
  }
}
</style>