const express = require("express");
const router = express.Router();

//conectar con la base de datos
const connection = require("../models/db");

//consultar usuario get // consultar

const getuser = (request, response) => {
  connection.query(
    "SELECT * FROM bsrfmthrgm3rb77oy9y4.Usuario WHERE id_usuario = ?",
    [request.query.id_usuario],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results);
    }
  );
};

// Crear usuario post// registro
const postuser = (request, response) => {
  const { id_usuario, username, email, password } = request.body;
  connection.query(
    "INSERT INTO bsrfmthrgm3rb77oy9y4.Usuario( id_usuario, username, email, password ) VALUES (?, ?, ? , ?)",
    [id_usuario, username, email, password],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Usuario creado correctamente": results.affectedRows });
    }
  );
};

/* metodo put */
const putuser = (request, response) => {
  const { username, email, password } = request.body;
  connection.query(
    "UPDATE bsrfmthrgm3rb77oy9y4.Usuario set username =?, email =? , password =?  where id_usuario = ?",
    [username, email, password, request.query.id_usuario],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Usuario actualizado correctamente": results.affectedRows });
    }
  );
};

/* Metodo delete */

const deleteuser = (request, response) => {
  const id_usuario = request.params.id_usuario;
  connection.query(
    "delete from bsrfmthrgm3rb77oy9y4.Usuario where id_usuario= ?",
    [id_usuario],
    (error, results) => {
      if (error) throw error;
      response.status(201).json({ "Usuario eliminado": results.affectedRows });
    }
  );
};

module.exports = {
  getuser,
  postuser,
  putuser,
  deleteuser,
};
