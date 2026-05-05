import express from "express";
import { getAllCrypto, getTopGainers, getNewListings, addCrypto } from "../controllers/cryptoController.js";

const router = express.Router();

router.get("/", getAllCrypto);
router.get("/gainers", getTopGainers);
router.get("/new", getNewListings);
router.post("/", addCrypto);

export default router;