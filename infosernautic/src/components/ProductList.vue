<template>
  <div class="products-section">
    <div class="container">
      <h2>Our Products</h2>
      <div class="products-grid" v-if="products.length">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
        >
          <img 
            :src="product.thumbnail || '/placeholder-product.jpg'" 
            :alt="product.title"
            class="product-image"
          >
          <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-price">
              ${{ formatPrice(product.variants[0]?.prices[0]?.amount) }}
            </div>
            <button 
              @click="addToCart(product.variants[0]?.id)"
              class="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="loading" class="loading">
        Loading products...
      </div>
      <div v-else class="no-products">
        No products available. Make sure your Medusa backend is running.
      </div>
    </div>
  </div>
</template>

<script>
import medusaService from '../services/medusaService'

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      loading: true,
      cartId: null
    }
  },
  async mounted() {
    await this.loadProducts()
    await this.initCart()
  },
  methods: {
    async loadProducts() {
      this.loading = true
      this.products = await medusaService.getProducts()
      this.loading = false
    },
    
    async initCart() {
      let cartId = localStorage.getItem('medusa_cart_id')
      if (!cartId) {
        const cart = await medusaService.createCart()
        if (cart) {
          cartId = cart.id
          localStorage.setItem('medusa_cart_id', cartId)
        }
      }
      this.cartId = cartId
    },
    
    async addToCart(variantId) {
      if (!this.cartId || !variantId) return
      
      const cart = await medusaService.addToCart(this.cartId, variantId)
      if (cart) {
        alert('Product added to cart!')
      }
    },
    
    formatPrice(amount) {
      return amount ? (amount / 100).toFixed(2) : '0.00'
    }
  }
}
</script>

<style scoped>
.products-section {
  padding: 80px 0;
  background: #f8fafc;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a202c;
}

.product-description {
  color: #4a5568;
  margin-bottom: 15px;
  line-height: 1.6;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 15px;
}

.add-to-cart-btn {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.loading, .no-products {
  text-align: center;
  padding: 40px;
  color: #4a5568;
  font-size: 1.1rem;
}
</style>