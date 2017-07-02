module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.cartQuantity = oldCart.cartQuantity || 0; // stupid ass handlebars won't let me just do view logic
  this.cartPrice = oldCart.cartPrice || 0;

  console.log(this.items);

  this.add = function(item, id) {
    var isStored = this.items[id];
    if (!isStored) {
      this.items[id] = {description: item, quantity: 0};
    }
    this.items[id].quantity++;
    this.items[id].totalPrice = this.items[id].description.price * this.items[id].quantity;
    this.cartQuantity++;
    this.cartPrice += this.items[id].description.price;
  };

  this.remove = function(id) {
    var isStored = this.items[id]
    if (!isStored) {
      return res.status(404);
    }
    this.cartQuantity -= this.items[id].quantity;
    this.cartPrice -= this.items[id].description.price * this.items[id].quantity;
    delete this.items[id];
  }

  this.removeOne = function(id) {
    var isStored = this.items[id]
    if (!isStored) {
      return res.status(404);
    }
    else if (this.items[id].quantity === 1) {
      return this.remove(id);
    }
    this.items[id].totalPrice -= this.items[id].description.price;
    this.cartPrice -= this.items[id].description.price;
    this.cartQuantity--;
    this.items[id].quantity--;
  }

  this.generateArray = function() {
    var arr = [];
    for (var i in this.items) {
      arr.push(this.items[i]);
    }
    return arr;
  };
};
