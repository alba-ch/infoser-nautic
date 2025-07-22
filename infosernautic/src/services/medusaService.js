import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 3,
  publishableApiKey: "pk_5d87567b0f0380ddb6201ed1622f7b7894fd629e11971c10a72cd89bd06abd0e"
})

export default {
  // Products
  async getProducts() {
    try {
      const { products } = await medusa.products.list()
      console.log('Products response:', products)
      return products || []
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  },

  async getProduct(id) {
    try {
      const { product } = await medusa.products.retrieve(id)
      return product
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  },

  // Cart
  async createCart() {
    try {
      const { cart } = await medusa.carts.create()
      return cart
    } catch (error) {
      console.error('Error creating cart:', error)
      return null
    }
  },

  async addToCart(cartId, variantId, quantity = 1) {
    try {
      const { cart } = await medusa.carts.lineItems.create(cartId, {
        variant_id: variantId,
        quantity: quantity
      })
      return cart
    } catch (error) {
      console.error('Error adding to cart:', error)
      return null
    }
  },

  async getCart(cartId) {
    try {
      const { cart } = await medusa.carts.retrieve(cartId)
      return cart
    } catch (error) {
      console.error('Error fetching cart:', error)
      return null
    }
  }
}