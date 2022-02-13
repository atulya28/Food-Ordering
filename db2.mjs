import mongoose from 'mongoose'

const Validation = mongoose.Schema({
    total: String,
    name: String,
    phone: String,
    address: String
})

export default mongoose.model('user', Validation)