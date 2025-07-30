const API_URL = 'https://infoser-back.onrender.com'

const store = {
  products: {
    list: async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`)
        const products = await response.json()
        
        // Transform backend products to match frontend format
        const transformedProducts = products.map(product => ({
          id: product.id,
          title: product.name,
          description: product.description,
          thumbnail: product.imageUrl || '/img/default-product.jpg',
          variants: [{ prices: [{ amount: Math.round(product.price * 100) }] }] // Convert to cents
        }))
        
        return { products: transformedProducts }
      } catch (error) {
        console.error('Error fetching products:', error)
        return { products: [] }
      }
    }
  },
  carts: {
    create: () => Promise.resolve({ cart: { id: 'mock-cart' } })
  }
}

export default store