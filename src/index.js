const express = require("express");
const app = express();
const port = 3000;
const routes = require("./api/endPoints");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const nodemailerSmtpTransport = require("nodemailer-smtp-transport");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pingUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
        }
      }
    });
  }
};
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mysql = require("mysql");
const { login } = require("./controllers/loginController");

const connection = require(__dirname + "/models/db.js"); // Importar la conexión a la base de datos

app.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  connection.query(
    `SELECT * FROM bsrfmthrgm3rb77oy9y4.Usuario WHERE email =?`,
    email,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.send({ Status: "Error" });
      }

      if (!rows.length) {
        return res.send({ Status: "Usuario no existe" });
      }

      const username = rows[0];
      const token = jwt.sign(
        { id_usuario: username.id_usuario },
        "auth_key_custom_secret",
        { expiresIn: "1d" }
      );

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mesaalejandro878@gmail.com",
          pass: "zbsiqagimeaouazn",
        },
      });

      transporter.verify((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      var mailOptions = {
        from: "mesaalejandro878@gmail.com",
        to: email,
        subject: "Reset Password Link",
        text: `http://localhost:5173/reset_password/${username.id_usuario}/${token}/${username.email}/${username.username}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          return res.send({ Status: "Success" });
        }
      });
    }
  );
});
