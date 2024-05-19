import express from 'express' // ES6
const app = express()
const port = 3000
import User_Router from './modules/User_module/User.Routes.js'
import Product_Router from './modules/Product_module/Product.Routes.js'
app.use(express.json())

app.use('/api/v1/users', User_Router)
app.use('/api/v1/products', Product_Router)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Download extension (Thunder Client) , same as postman but in VScode and its work offline too
