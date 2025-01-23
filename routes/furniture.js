const express = require("express");
const router = express.Router();

const {
  getAllCards,

  price,
  filter,
  sortByValue,
} = require("../controllers/furnitures");

//router.get("/furnitureCategory", categories);
router.get("/furniturePrice", price);
router.get("/furnitureFilter", filter);

router.get("/cards", getAllCards);
router.get("/sortByValue", sortByValue);
//router.get("/sortByPrice", sortByPrice);
module.exports = router;
