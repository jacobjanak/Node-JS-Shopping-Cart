var express = require('express');
var router = express.Router();

var Cart = require('../models/cart')
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, doc) {
    res.render('index', { title: 'Shopping Cart', products: doc});
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  //NOTE: we could just extract ID later
  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/remove-from-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  if (!req.session.cart) {
    res.redirect('/');
  }
  var cart = new Cart(req.session.cart);
  cart.remove(productId); // poor choice of name, Jake
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/remove-one-from-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  if (!req.session.cart) {
    res.redirect('/');
  }
  var cart = new Cart(req.session.cart);
  cart.removeOne(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('cart', {title: 'Shopping Cart', products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('cart', {
    title: 'Shopping Cart',
    products: cart.generateArray()
  });
});

module.exports = router;
