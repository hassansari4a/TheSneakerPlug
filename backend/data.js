import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Ajal',
      email: 'ajal@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'Nike Shoe',
      image: '/images/p1.jpg',
      category: 'Shoe',
      price: 10000,
      brand: 'Nike',
      rating: 3,
      description: 'high quality shoe',
    },
    {
      name: 'Nike Air Shoe',
      image: '/images/1.jpg',
      category: 'Shoe',
      price: 25000,
      brand: 'Nike',
      rating: 2.5,
      description: ' Very high quality shoe',
    },
    {
      image: '/images/2.jpg',
      name: 'Nike Air Jordan',
      category: 'Shoe',
      price: 40000,
      brand: 'Nike',
      rating: 5,
      description: 'extremely high quality shoe',
    },
    {
      name: 'White Nike Air Shoe',
      image: '/images/3.jpg',
      category: 'Shoe',
      price: 25000,
      brand: 'Nike',
      rating: 4.5,
      description: ' a bit white high quality shoe',
    },
    {
      name: 'Rainbow Nike Air Shoe',
      image: '/images/4.jpg',
      category: 'Shoe',
      price: 15000,
      brand: 'Nike',
      rating: 4.5,
      description: 'pride high quality shoe',
    },
    {
      name: 'Nike Literally Air again Shoe',
      image: '/images/5.jpg',
      category: 'Shoe',
      price: 60000,
      brand: 'Nike',
      rating: 4,
      description: 'higher quality shoe',
    },
  ]
}

export default data