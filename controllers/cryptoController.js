import Crypto from "../models/Crypto.js";

export const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ addedAt: -1 });
    res.status(200).json({ cryptos });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } }).sort({ change24h: -1 });
    res.status(200).json({ cryptos: gainers });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getNewListings = async (req, res) => {
  try {
    const newCryptos = await Crypto.find().sort({ addedAt: -1 });
    res.status(200).json({ cryptos: newCryptos });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;
    const existing = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (existing) {
      return res.status(400).json({ message: "Cryptocurrency with this symbol already exists" });
    }
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ message: "Cryptocurrency added successfully", crypto });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};