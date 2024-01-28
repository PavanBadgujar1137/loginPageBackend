const Login = require("../models/Login");

exports.createLogin = async (req, res) => {
  try {
    // Fetch data from request's body
    const { fname, lname, email, mobileNo } = req.body;

    // create Object and insert into the DB
    const response = await Login.create({ fname, lname, email, mobileNo });

    // give response
    res.status(200).json({
      success: true,
      data: response,
      message: "Successfully Create Entry in DB....",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Issue...",
      message: error.message,
    });
  }
};
