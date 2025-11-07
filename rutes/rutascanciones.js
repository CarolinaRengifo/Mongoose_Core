import express from "express";
import { crearcancion, obtenercanciones, obtenercancionPorId, actualizarcancion, eliminarcancion } from "../controller/cancioncontroller.js";   

const router = express.Router();

router.post("/", crearcancion);
router.get("/", obtenercanciones);
router.get("/:id", obtenercancionPorId);
router.put("/:id", actualizarcancion);
router.delete("/:id", eliminarcancion);

export default router;
