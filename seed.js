const db = require('./server/db/db')
const {green, red} = require('chalk')

const Products = require('./server/db/models/Products')
const Users = require('./server/db/models/user')
const {Orders} = require('./server/db/models')

const orders = [{}, {}]

const products = [
  {
    name: 'Hug Bot',
    description:
      'Hugs are a little cold and metallic, but cold hugs are better than no hugs!',
    imageUrl:
      'https://vignette.wikia.nocookie.net/starwars/images/0/05/Probe_Droid_SWB.png/revision/latest?cb=20151115014524',
    price: 399.99,
    stock: 3
  },
  {
    name: 'Fancy Bot',
    description: `Impress your parents with this shiny gold bot! They'll finally think you're successfull! ...maybe.`,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png',
    price: 3999.99,
    stock: 1
  },
  {
    name: 'Chef Gordon RamBot',
    description: `Is your kitchen a nightmare? Have a fancy feast already prepared for you when you come home from work! Cussing module sold separately.`,
    imageUrl:
      'https://static01.nyt.com/images/2010/02/24/dining/24robots-2/24robots_CA1-articleLarge.jpg',
    price: 99999.99,
    stock: 1
  }
]

const users = [
  {
    fname: 'John',
    lname: 'Doe',
    email: 'jdoe35@gmail.com',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png',
    address: '354 Fifth Ave, Barnesville, OK',
    password: 'happy345',
    phone: 9873458346
  },
  {
    fname: 'Jane',
    lname: 'Doe',
    email: 'whodoneit57@yahoo.com',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg',
    address: '87 Main St, Burgertown, MI',
    password: 't3ddyB3ars445',
    phone: 9462854299
  },
  {
    fname: 'Mary',
    lname: 'Poppins',
    email: 'pdubs138@outlook.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg',
    address: '77 Turle Ave, Bakersville, WA',
    password: 'umbrella999',
    phone: 7326549367
  }
]

const seed = async () => {
  await db.sync({force: true})

  await Promise.all(
    orders.map(order => {
      return Orders.create(order)
    })
  )

  await Promise.all(
    products.map(product => {
      return Products.create(product)
    })
  )

  await Promise.all(
    users.map(user => {
      return Users.create(user)
    })
  )

  console.log(green('Seeding successfull'))
  db.close()
}

seed().catch(err => {
  console.error(red('Seed Unsuccessfull'))
  console.error(err)
  db.close()
})
