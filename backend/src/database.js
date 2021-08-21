import mongoose from 'mongoose'


mongoose.connect("mongodb+srv://grupo08:grupo08@cluster0.2gmcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log("DB is connect"))
    .catch(error => console.log(error))