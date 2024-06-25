const { User, Seller } = require("../models/userModel")

const getUserProfileInfo = (req, res) => {
    const token = req.token
    if (!token) return res.send("Unautharizated!")

    User
        .findById(token)
        .then(user => {
            if (!user) return res.send("user not found")
            if (user["__t"] === "Seller")
                return res.json({
                    products: user.products,
                    cart: user.cart
                })
            res.json(user.cart)
        })
}

module.exports = {
    getUserProfileInfo
}