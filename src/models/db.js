const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "bsrfmthrgm3rb77oy9y4-mysql.services.clever-cloud.com",
  user: "udh8ztjyvnme58hx",
  password: "C2raGz66fXS9sdZyEgH0",
  database: "bsrfmthrgm3rb77oy9y4",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

module.exports = connection;
