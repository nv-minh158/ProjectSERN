import { registerService, loginService } from "../services/auth";
const register = async (req, res) => {
  const { userName, phone, password } = req.body;
  // Simple validation
  if (!userName || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username or phone or password",
    });
  }
  try {
    const response = await registerService({ userName, phone, password, res });
  } catch (error) {}
};

const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    const response = await loginService({ phone, password, res });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};

module.exports = {
  register,
  login,
};
