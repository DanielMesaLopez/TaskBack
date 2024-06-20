const connection = require("../models/db");

module.exports.usuario = (req, res) => {
  const consult = "SELECT * FROM bsrfmthrgm3rb77oy9y4.Usuario";

  try {
    connection.query(consult, (err, results) => {
      console.log(results);
      res.json(results);
    });
  } catch (e) {}
};
