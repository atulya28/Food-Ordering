import mongoose from 'mongoose'

const Validation = mongoose.Schema({
    imgsrc: String,
    title: String,
    desc: String,
    price: String,
    id: String,
    name: String,
    phone: String,
    address: String
})

export default mongoose.model('cart', Validation)