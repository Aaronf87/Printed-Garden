const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  items: [
    {
      // This is expecting an array of ObjectId's from the Book model
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  quanity: {
    type: Number,
    min: 0,
    default: 0,
  },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
