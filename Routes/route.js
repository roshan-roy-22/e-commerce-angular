const express = require('express')
const productController = require('../Controllers/productControllers')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistContoller')
const cartController = require('../Controllers/cartController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()

//getallproducts
router.get('/all-products',productController.getAllProductController)

//registeruser
router.post('/register',userController.registerController)

//login User
router.post('/login',userController.loginController)

//getaproduct
router.get('/view-product/:id',productController.getAProductController)

//add-to-wishlish
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)

//get-wishilist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)

//removewishlist
router.delete('/remove-wishlist/:id',jwtMiddleware,wishlistController.removeProductWishlistController)

//addtocart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCartController)

// getcart
router.get('/get-cart',jwtMiddleware,cartController.getCartController)

//remocveitem from cart
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartitemController)

//quantity-increase
router.get('/cart-inc/:id',jwtMiddleware,cartController.incrementItemController)

router.get('/cart-decrement/:id', jwtMiddleware, cartController.decrementItemController)

router.delete('/empty-cart', jwtMiddleware, cartController.emptyCartController)

module.exports=router