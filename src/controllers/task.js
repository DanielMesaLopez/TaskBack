const express = require("express");
const router = express.Router();

//conectar con la base de datos
const connection = require("../models/db");

// Utilizando el método Get
const getTask = (request, response) => {
  connection.query(
    "SELECT * FROM bsrfmthrgm3rb77oy9y4.Task WHERE id_usuario = ? ",
    [request.query.id_usuario],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results);
    }
  );
};

// Utilizando el método post o metodo para crear Tareas
const postTask = (request, response) => {
  const {
    id_Categoria,
    id_usuario,
    nombre_tarea,
    descripcion,
    categoria,
    prioridad,
    estado,
    fecha_creacion,
  } = request.body;
  connection.query(
    "INSERT INTO bsrfmthrgm3rb77oy9y4.Task( id_Categoria, id_usuario, nombre_tarea, descripcion, categoria, prioridad, estado, fecha_creacion) VALUES ( ?, ? , ?, ?, ?, ?, ?, ?)",
    [
      id_Categoria,
      id_usuario,
      nombre_tarea,
      descripcion,
      categoria,
      prioridad,
      estado,
      fecha_creacion,
    ],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Tarea creada correctamente": results.affectedRows });
    }
  );
};

/* metodo put para actualizar Tareas*/
const putTask = (request, response) => {
  const {
    idTask,
    id_Categoria,
    id_usuario,
    nombre_tarea,
    descripcion,
    categoria,
    prioridad,
    estado,
    fecha_creacion,
  } = request.body;
  connection.query(
    "UPDATE bsrfmthrgm3rb77oy9y4.Task set id_Categoria =?, id_usuario =?, nombre_tarea =?, descripcion =?, categoria =?, prioridad =?, estado =?, fecha_creacion =?   where idTask = ?",
    [
      id_Categoria,
      id_usuario,
      nombre_tarea,
      descripcion,
      categoria,
      prioridad,
      estado,
      fecha_creacion,
      idTask,
    ],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Tarea actualizada correctamente": results.affectedRows });
    }
  );
};

/* Metodo delete */
const deleteTask = (request, response) => {
  const idTask = request.params.idTask;
  connection.query(
    "delete from bsrfmthrgm3rb77oy9y4.Task where idTask = ?",
    [idTask],
    (error, results) => {
      if (error) throw error;
      response.status(201).json({ "Tarea eliminada": results.affectedRows });
    }
  );
};

module.exports = {
  getTask,
  postTask,
  putTask,
  deleteTask,
};
