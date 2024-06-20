const express = require("express");
const router = express.Router();
const { usuario } = require("../controllers/pingController");
const { login } = require("../controllers/loginController");
const {
  getcategoria,
  putcategoria,
  postcategoria,
  deletecategoria,
} = require("../controllers/categoria");
const { getRol, postRol, putRol, deleteRol } = require("../controllers/Rol");
const {
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require("../controllers/task");
const {
  getuser,
  postuser,
  putuser,
  deleteuser,
} = require("../controllers/user");

// este es el crud del usuario para el Login
router.get("/usuario", usuario);
router.post("/login", login);

// este es el crud del usuario
router.get("/user/Consultaruser", getuser);
router.post("/user/Insertaruser", postuser);
router.put("/user/Actualizaruser", putuser);
router.delete("/user/:id_usuario", deleteuser);

// este el crud de las Task
router.get("/Task/ConsultarTask", getTask);
router.post("/Task/InsertarTask", postTask);
router.put("/Task/ActualizarTarea", putTask);
router.delete("/Task/:idTask", deleteTask);

// este el crud de las categorias
router.get("/categorias/todascategorias", getcategoria);
router.put("/categorias/actualizarcategoria", putcategoria);
router.post("/categorias/crearcategoria", postcategoria);
router.delete("/categorias/:id_Categoria", deletecategoria);

// este el crud del Rol
router.get("/Rol/ConsultarRol", getRol);
router.post("/Rol/InsertarRol", postRol);
router.put("/Rol/actualizarRol", putRol);
router.delete("/Rol/:id_rol", deleteRol);

module.exports = router;
