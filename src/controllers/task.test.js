const request = require("supertest");
const app = require("./task");
const connection = require("../models/db");

jest.mock("../models/db");

describe("Task API", () => {
  beforeEach(() => {
    connection.query.mockReset();
  });

  describe("GET /task", () => {
    it("should return a list of tasks", async () => {
      connection.query.mockResolvedValue([
        { id: 1, nombre_tarea: "Tarea 1" },
        { id: 2, nombre_tarea: "Tarea 2" },
      ]);

      const response = await request(app).get("/task?id_usuario=1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        { id: 1, nombre_tarea: "Tarea 1" },
        { id: 2, nombre_tarea: "Tarea 2" },
      ]);
    });
  });

  describe("POST /task", () => {
    it("should create a new task", async () => {
      connection.query.mockResolvedValue({ affectedRows: 1 });

      const taskData = {
        id_Categoria: 1,
        id_usuario: 1,
        nombre_tarea: "Nueva tarea",
        descripcion: "Descripción de la tarea",
        categoria: "Categoria",
        prioridad: "Alta",
        estado: "Pendiente",
        fecha_creacion: new Date(),
      };

      const response = await request(app).post("/task").send(taskData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ "Tarea creada correctamente": 1 });
    });
  });

  describe("PUT /task/:idTask", () => {
    it("should update a task", async () => {
      connection.query.mockResolvedValue({ affectedRows: 1 });

      const taskData = {
        idTask: 1,
        id_Categoria: 1,
        id_usuario: 1,
        nombre_tarea: "Tarea actualizada",
        descripcion: "Descripción de la tarea actualizada",
        categoria: "Categoria",
        prioridad: "Alta",
        estado: "Pendiente",
        fecha_creacion: new Date(),
      };

      const response = await request(app).put("/task/1").send(taskData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ "Tarea actualizada correctamente": 1 });
    });
  });

  describe("DELETE /task/:idTask", () => {
    it("should delete a task", async () => {
      connection.query.mockResolvedValue({ affectedRows: 1 });

      const response = await request(app).delete("/task/1");

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ "Tarea eliminada": 1 });
    });
  });
});
