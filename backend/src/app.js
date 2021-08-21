import express from 'express'
import morgan from 'morgan'

import { createRoles } from './libs/initialSetup'

import productsroutes from './routes/products.routes'
import authroutes from './routes/auth.routes'
const app = express()

const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

createRoles();


app.use(morgan('dev'));
app.use(express.json());
app.get('/',(req,res) =>{
    res.json('OkeeeY')
})

 app.use('/products', productsroutes);
 app.use('/auth', authroutes);
 
export default app
