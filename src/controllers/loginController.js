const connection = require("../models/db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "daniel2868822#$%";

module.exports.login = (req, res) => {
  const { username, password } = req.body;
  const consult =
    "SELECT * FROM bsrfmthrgm3rb77oy9y4.Usuario WHERE username = ? AND  password = ?";

  try {
    connection.query(consult, [username, password], (err, result) => {
      if (err || result.length === 0) {
        return res.status(401).json({ message: "invalid credentials" });
      }
      const [userFromDb] = result;
      const token = jwt.sign({ username }, SECRET_KEY, {
        expiresIn: "2m",
      });
      res.status(200).json({
        token,
        user: {
          username,
          email: userFromDb.email,
          id_usuario: userFromDb.id_usuario,
        },
      });
    });
  } catch (e) {
    console.log(e);
  }
};
