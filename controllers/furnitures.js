const fs = require("fs");

exports.getAllCards = async (req, res) => {
  try {
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    console.log(furnitureData);

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      furnitureData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};

exports.price = async (req, res) => {
  try {
    const price = req.query.price;
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    console.log(furnitureData);
    const filterFurnitures = furnitureData.filter(
      (furniture) => furniture.price >= price
    );

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      filterFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};

exports.categories = async (req, res) => {
  try {
    const category = req.query.category;
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    console.log(category);
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const filterFurnitures = furnitureData.filter(
      (furniture) => furniture.category.toLowerCase() === category.toLowerCase()
    );

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      filterFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};

exports.brandName = async (req, res) => {
  try {
    const brandName = req.query.brandName;
    console.log(brandName);
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    console.log(furnitureData);

    // console.log(category);
    // if () {
    //   return res.status(400).json({ message: "brandName doesnot exist" });
    // }

    const filterFurnitures = furnitureData.filter(
      (furniture) =>
        furniture.brandName.toLowerCase() === brandName.toLowerCase()
    );

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      filterFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};

// Sort

exports.sortByBrandName = async (req, res) => {
  try {
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    const filterFurnitures = furnitureData.sort((a, b) =>
      a.brandName.localeCompare(b.brandName)
    );

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      filterFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};

exports.sortByPrice = async (req, res) => {
  try {
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    const filterFurnitures = furnitureData.sort((a, b) => a.price - b.price);

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      filterFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};
