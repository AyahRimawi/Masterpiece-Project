const User = require("../Models/User");


//todoo --------- get PersonalInfo --------------
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address.governorate,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// ------------------

//todoo --------- update PersonalInfo --------------

exports.updateUserData = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.address.governorate = address;

    await user.save();

    res.json({
      message: "User data updated successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address.governorate,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};