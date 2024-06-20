const express = require("express");
const router = express.Router();

//conectar con la base de datos
const connection = require("../models/db");

//Utilizando el método Get
const getcategoria = (request, response) => {
  connection.query(
    "SELECT * FROM bsrfmthrgm3rb77oy9y4.Categoria",
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results);
    }
  );
};

//Agregar Categoria
const postcategoria = (request, response) => {
  const { id_Categoria, nombre_categoria } = request.body;
  connection.query(
    "INSERT INTO bsrfmthrgm3rb77oy9y4.Categoria(id_Categoria, nombre_categoria) VALUES (?, ?)",
    [id_Categoria, nombre_categoria],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Categoria creado correctamente": results.affectedRows });
    }
  );
};

// Actualizar Categoria
const putcategoria = (request, response) => {
  const { id_Categoria, nombre_categoria } = request.body;
  connection.query(
    "update bsrfmthrgm3rb77oy9y4.Categoria set nombre_categoria= ? where id_Categoria=?",
    [nombre_categoria, id_Categoria],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Categoria actualizada correctamente": results.affectedRows });
    }
  );
};

//Eliminar Categoria
const deletecategoria = (request, response) => {
  const id_Categoria = request.params.id_Categoria;
  connection.query(
    "delete from bsrfmthrgm3rb77oy9y4.Categoria where id_Categoria = ?",
    [id_Categoria],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Categoria eliminada": results.affectedRows });
    }
  );
};

module.exports = {
  getcategoria,
  postcategoria,
  putcategoria,
  deletecategoria,
};
