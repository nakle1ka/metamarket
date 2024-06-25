const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ""
    },
    info: {
        email: { type: String, default: "" },
        phoneNumber: { type: String, default: "" },
        feedBack: [
            {
                name: { type: String },
                estimation: { type: Number },
                comment: { type: String },
            }
        ]
    },
    cart: [
        {
            id: { type: String },
            name: { type: String },
            avatar: { type: String },
            description: { type: String },
            price: { type: Number },
        }
    ]
},
    {
        collection: 'users'
    }
)

const sellerShema = new Schema({
    products: [
        {
            id: { type: String },
            name: { type: String },
            avatar: { type: String },
            description: { type: String },
            price: { type: Number },
        }
    ]
})

const User = mongoose.model('User', userSchema)
const Seller = User.description('Seller', sellerShema)

module.exports = {User, Seller}