const getallProducts = async (req, res) => {
  res.status(200).json({ msg: "you will getAllProducts" });
};

const getallProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "you wil getallProductsTesting" });
};

module.exports = { getallProducts, getallProductsTesting };
