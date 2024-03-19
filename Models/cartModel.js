const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        requied: true
    },
    price: {
        type: Number,
        requied: true
    },

    image: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        requied: true
    },
    totalPrice: {
        type: Number,
        requied: true
    },
    userId: {
        type: String,
        requied: true
    }
})

const cartItems = mongoose.model('cartItems', cartSchema)
module.exports = cartItems