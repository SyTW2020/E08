const router = require('express').Router();

const User = require('../models/User');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Joi = require('@hapi/joi');

require('dotenv').config()

const schemaRegister = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(1024).required().email(),
    password: Joi.string().min(8).max(255).required()
//    direccion: Joi.string().min(3).max(1024).required()
  //  poblacion: Joi.string().min(3).max(1024).required()
    //fecha_nacimiento
    //codigo_postal
})

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(1024).required().email(),
    password: Joi.string().min(8).max(255).required()
})

router.post('/login', async (req, res) =>{

    //validaciones
    const { error } = schemaLogin.validate(req.body)
    if (error) return res.status(400).json({error: error.details[0].message})
    
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).json({error: true, mensaje: 'email no encontrado'})

    const pass = await bcrypt.compare(req.body.password, user.password)
    if(!pass) return res.status(400).json({error: true, mensaje: 'contraseña mal'})

    var sec  = process.env.TOKEN_SECRET; 

    //crear token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, sec)
/*
    res.json({
        error: null,
        mensaje: 'Hey',
        token: token
    })
*/
    res.header('auth-token', token),json({
        error: null,
        data: {token}
    })


})

router.post('/register', async (req, res) => {

    // validate user
    const { error } = schemaRegister.validate(req.body)
    if (error) return res.status(400).json({error: error.details[0].message})
    
    const EmailExiste = await User.findOne({email: req.body.email})
    if (EmailExiste) return res.status(400).json({error: true, mensaje: 'Email ya Registrado. Por favor introduzca otro'})

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        //password: password
        password
    })

try{

const userDB = await user.save();
res.json({
    error: null,
    data: userDB
})

}catch (error){
    res.status(400).json(error)
}

})

module.exports = router;