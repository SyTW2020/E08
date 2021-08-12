import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nombre : {
        type: String,
        require: true,
        min : 3
    },
    apellido : {
        type: String,
        require: true,
        min : 3
    },
    numero : {
        type: Number,
        require: true,
        min : 100000000,
        max : 999999999
    },
    poblacion : {
        type: String,
        require: true,
        min : 3
    },
    address : {
        type: String,
        require: true,
        min : 3
    },
    codigo : {
        type: Number,
        require: true,
        min : 10000,
        max : 99999
    },
    roles : [
        {
            ref : "Role",
            type: Schema.Types.ObjectId,
        },
    ],
},
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.statics.encryptPassword = async (password) => {
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(password,salt)
}
UserSchema.statics.compararPassword = async(password, recivePaswword) => {
    return await bcrypt.compare(password, recivePaswword)
}

export default model('User', UserSchema);

