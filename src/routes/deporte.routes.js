import { Router } from "express";
import {
  index,
  deportesPath,
  deportePush,
  deporteEditar,
  deporteEliminar,
} from "../controllers/deporte.controllers.js";

const router = Router();

router.get("/", index);
router.get("/deportes", deportesPath);
router.get("/agregar", deportePush);
router.get("/editar", deporteEditar);
router.get("/eliminar", deporteEliminar);

export default router;
