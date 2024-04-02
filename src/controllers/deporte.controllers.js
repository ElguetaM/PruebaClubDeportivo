import fs, { rename } from "fs";
import path from "path";
import { fileURLToPath } from "node:url";

const __dirname = import.meta.dirname;
const pathDeportes = fileURLToPath(
  new URL("../../assets/data.json", import.meta.url)
);

const index = (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
};

const deportesPath = (req, res) => {
  res.sendFile(pathDeportes);
};

const deportePush = (req, res) => {
  const { nombre, precio } = req.query;
  const deporteNuevo = { nombre, precio };
  const { deportes } = JSON.parse(fs.readFileSync(pathDeportes));
  deportes.push(deporteNuevo);
  fs.writeFileSync(pathDeportes, JSON.stringify({ deportes }));
  res.send("Deporte agregado con exito");
};

const deporteEditar = (req, res) => {
  let { nombre, precio } = req.query;
  let { deportes } = JSON.parse(fs.readFileSync(pathDeportes));
  deportes = deportes.map((de) => {
    if (de.nombre === nombre) {
      return { ...de, precio: precio };
    }
    return de;
  });
  fs.writeFileSync(pathDeportes, JSON.stringify({ deportes }));
  res.send("Deporte editado con exito");
};

const deporteEliminar = (req, res) => {
  let { nombre } = req.query;
  let { deportes } = JSON.parse(fs.readFileSync(pathDeportes));
  deportes = deportes.filter((na) => na.nombre != nombre);
  fs.writeFileSync(pathDeportes, JSON.stringify({ deportes }));
  res.send("Deporte eliminado con exito");
};

export { index, deportesPath, deportePush, deporteEditar, deporteEliminar };
