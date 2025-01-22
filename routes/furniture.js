const express = require("express");
const router = express.Router();

const {
  getAllCards,
  categories,
  price,
  brandName,
  sortByBrandName,
  sortByPrice,
} = require("../controllers/furnitures");

router.get("/furnitureCategory", categories);
router.get("/furniturePrice", price);
router.get("/furnitureBrandName", brandName);

router.get("/cards", getAllCards);
router.get("/sortByBrandName", sortByBrandName);
router.get("/sortByPrice", sortByPrice);
module.exports = router;
