const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Please add id"],
  },
  title: {
    type: String,
    required: [true, "Please add title"],
  },
  description: {
    type: String,
    required: [true, "Please add description"],
  },
  price: {
    type: Number,
    required: [true, "Please add price"],
  },
  discountPercentage: {
    type: Number,
    required: [true, "Please add discount percentage"],
  },
  rating: {
    type: Number,
    required: [true, "Please add rating"],
  },
  stock: {
    type: Number,
    required: [true, "Please add stock"],
  },
  brand: {
    type: String,
    required: [true, "Please add brand name"],
  },
  thumbnail: {
    type: String,
    required: [true, "Please add thumbnail"],
  },
  images: {
    type: Array,
    required: [true, "Please add images"],
  },
});

module.exports = mongoose.model("products", productsSchema);
