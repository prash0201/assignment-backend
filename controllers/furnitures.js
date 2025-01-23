const fs = require("fs");

exports.getAllCards = async (req, res) => {
  try {
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    // console.log(furnitureData);

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
    // console.log(furnitureData);
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

    // console.log(category);
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

exports.filter = async (req, res) => {
  try {
    const value = req.query.value;
    console.log(value);

    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    console.log("backend value", value);
    if (value === "all") {
      return res.status(200).json({
        success: true,
        message: "Data found successfully",
        filterFurnitures: furnitureData,
      });
    }

    const filterFurnitures = furnitureData.filter(
      (furniture) =>
        furniture.brandName.toLowerCase() === value.toLowerCase() ||
        furniture.category.toLowerCase() === value.toLowerCase()
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

exports.sortByValue = async (req, res) => {
  try {
    const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

    const value = req.query.value;
    console.log("backend value", value);
    if (value === "all") {
      return res.status(200).json({
        success: true,
        message: "Data found successfully",
        sortedFurnitures: furnitureData,
      });
    }
    const sortedFurnitures = furnitureData.sort((a, b) => {
      if (value === "brandName") {
        return a.brandName.localeCompare(b.brandName); // Sort alphabetically
      } else if (value === "price") {
        return a.price - b.price; // Sort numerically by price
      }
      return 0; // No sorting for unknown values
    });

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      sortedFurnitures,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "No data found",
    });
  }
};
// exports.sortByPrice = async (req, res) => {
//   try {
//     const furnitureData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

//     const filterFurnitures = furnitureData.sort((a, b) => a.price - b.price);

//     return res.status(200).json({
//       success: true,
//       message: "Data found successfully",
//       filterFurnitures,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "No data found",
//     });
//   }
// };
