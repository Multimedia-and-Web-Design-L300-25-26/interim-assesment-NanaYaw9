import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  change24h: {
    type: Number,
    required: true,
    default: 0,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Crypto = mongoose.model("Crypto", cryptoSchema);

export default Crypto;