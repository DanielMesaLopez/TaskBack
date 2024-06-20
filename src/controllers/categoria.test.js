const request = require("supertest");
const app = require("./categoria");
const connection = require("../models/db");
jest.mock("../models/db");

describe("Categoria API", () => {
  beforeEach(() => {
    connection.query("TRUNCATE TABLE bsrfmthrgm3rb77oy9y4.Categoria");
  });

  afterEach(() => {
    connection.end();
  });

  describe("GET /categoria", () => {
    it("should return all categorias", async () => {
      const response = await request(app).get("/categoria");
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("POST /categoria", () => {
    it("should create a new categoria", async () => {
      const data = { id_Categoria: 1, nombre_categoria: "Categoria 1" };
      const response = await request(app).post("/categoria").send(data);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({ "Categoria creado correctamente": 1 });
    });
  });

  describe("PUT /categoria/:id_Categoria", () => {
    it("should update a categoria", async () => {
      const data = { nombre_categoria: "Categoria 2" };
      const response = await request(app).put("/categoria/1").send(data);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        "Categoria actualizada correctamente": 1,
      });
    });
  });

  describe("DELETE /categoria/:id_Categoria", () => {
    it("should delete a categoria", async () => {
      const response = await request(app).delete("/categoria/1");
      expect(response.status).toBe(201);
      expect(response.body).toEqual({ "Categoria eliminada": 1 });
    });
  });
});
