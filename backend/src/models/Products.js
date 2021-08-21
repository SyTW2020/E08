import {Schema, model} from 'mongoose'

const ProducSchema = new Schema({
    name: String,
    categoria: String,
    precio: Number,
    stock : Number,
    descripcion: String,
    imgUrl : String
},
{
        timestamps : true,
        versionKwy : false

})

export default model('Procust',ProducSchema);