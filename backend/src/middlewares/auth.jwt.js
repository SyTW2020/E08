import jwt from 'jsonwebtoken'
import  config  from '../config'
import User from '../models/Usuarios'
import Role from '../models/Rol'

export const verifytoken = async(req,res,next) => {
    let token = req.headers["x-access-token"] 
    if(!token) return res.status(403).json({message : "No existe token"})
    try {
        
        const decode = jwt.verify(token,config.SECRET)
        req.userId = decode.id
        
        const user = await User.findById(req.userId, {password : 0})
        //console.log(user)
        if(!user) return res.status(404).json({message : "Usuario no existe"})
        next()
    } catch (error) {
        return res.status(500).json({message: "No autorizado"})
    }
}


export const isModerador = async(req,res,next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in : user.roles}})
   
    for(let i = 0 ; i < roles.length; i++){
        if (roles[i].name === 'moderator'){
            next()
            return
        }
    }
    return res.status(403).json({message : "No eres moderador"})
    
    
}