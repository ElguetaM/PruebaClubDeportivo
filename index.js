import express from "express";
import deporteRoutes from "./src/routes/deporte.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(deporteRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:PORT`)
);
