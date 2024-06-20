const express = require("express");
const router = express.Router();

//conectar con la base de datos
const connection = require("../models/db");

//Utilizando el método Get
const getRol = (request, response) => {
  connection.query(
    "SELECT * FROM bsrfmthrgm3rb77oy9y4.Rol",
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results);
    }
  );
};

//Agregar Rol
const postRol = (request, response) => {
  const { id_rol, nombre_rol, id_usuario } = request.body;
  connection.query(
    "INSERT INTO bsrfmthrgm3rb77oy9y4.Rol(id_rol, nombre_rol, id_usuario) VALUES (?, ?, ?)",
    [id_rol, nombre_rol, id_usuario],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Rol creado correctamente": results.affectedRows });
    }
  );
};

// Actualizar Rol
const putRol = (request, response) => {
  const { id_rol, nombre_rol, id_usuario } = request.body;
  connection.query(
    "update bsrfmthrgm3rb77oy9y4.Rol set nombre_rol= ?, id_usuario= ?  where id_rol=?",
    [nombre_rol, id_usuario, id_rol],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Rol actualizado correctamente": results.affectedRows });
    }
  );
};

//Eliminar Rol
const deleteRol = (request, response) => {
  const id_rol = request.params.id_rol;
  connection.query(
    "delete from bsrfmthrgm3rb77oy9y4.Rol where id_rol = ?",
    [id_rol],
    (error, results) => {
      if (error) throw error;
      response.status(201).json({ "Rol eliminado": results.affectedRows });
    }
  );
};

module.exports = {
  getRol,
  postRol,
  putRol,
  deleteRol,
};
