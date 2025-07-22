// Mock store service - replace with Medusa when backend is ready
const mockProducts = [
  {
    id: '1',
    title: 'Survey Report - Katxalot',
    description: 'Complete technical survey report for classic sailing yacht',
    thumbnail: '/img/katxalot-thumb.jpg',
    variants: [{ prices: [{ amount: 70000 }] }] // €700.00
  },
  {
    id: '2', 
    title: 'Survey Report - Louise Michel',
    description: 'Comprehensive motor yacht survey with insurance coverage',
    thumbnail: '/img/louise-thumb.jpg',
    variants: [{ prices: [{ amount: 100000 }] }] // €1000.00
  },
  {
    id: '3',
    title: 'Nautical Consultation',
    description: 'Professional boat buying consultation service',
    thumbnail: '/img/consultation-thumb.jpg', 
    variants: [{ prices: [{ amount: 12500 }] }] // €125.00
  },
  {
    id: '4',
    title: 'Technical Advisory',
    description: 'Expert technical advice for boat maintenance and repairs',
    thumbnail: '/img/advisory-thumb.jpg',
    variants: [{ prices: [{ amount: 17500 }] }] // €175.00
  }
]

const mockStore = {
  products: {
    list: () => Promise.resolve({ products: mockProducts })
  },
  carts: {
    create: () => Promise.resolve({ cart: { id: 'mock-cart' } })
  }
}

export default mockStore