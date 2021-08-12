import User from '../models/Usuarios'
import Role from '../models/Rol'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signup = async (req, res) => {

     //obteniendo req body
     const {username, email,password,nombre,apellido,numero,poblacion,address,codigo,roles} = req.body
     
     //Creando nuevo usuario 
    const nuevousuario = new User ({
          username,
          email,
          password: await User.encryptPassword(password),
          nombre,
          apellido,
          numero,
          poblacion,address,
          codigo
     })

     //Comprobando si tiene roles si no asigna usuario
     if(roles){
          const foundRoles = await Role.find({name: {$in : roles}})
          nuevousuario.roles = foundRoles.map((role) => role._id)
     }else{
          const role = await Role.findOne({name : "user"});
          nuevousuario.roles = [role._id];
     }
     
     //Guardamos usuario en mongo
     const saveUser = await nuevousuario.save();
     console.log(saveUser)
     
     //Creamos token
     const token = jwt.sign({id:saveUser._id}, config.SECRET,{
          expiresIn: 1800 // 30 min
     })
     const data = {
          username,
          email,
          nombre,
          apellido,
          numero,
          poblacion,
          address,
          codigo}
     return res.json({token,data})
}

export const signin = async (req, res) => {
     
     const userFound = await User.findOne({email: req.body.email}).populate("roles")
     if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})

    const matchpass =  await User.compararPassword(req.body.password , userFound.password)
     if (!matchpass) return res.status(401).json({token: null , message : "Contraseña fallida "})
     
    const token = jwt.sign({id: userFound._id}, config.SECRET,{
          expiresIn : 1800
     })
     const data = {
          "username" : userFound.username,
          "email" : userFound.email,
          "nombre" : userFound.nombre,
          "apellido" : userFound.apellido,
          "numero" : userFound.numero,
          "poblacion" : userFound.poblacion,
          "address" : userFound.address,
          "codigo" : userFound.codigo
     }
     res.json({token,data})

}