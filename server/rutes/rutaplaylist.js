import {  crearplaylist, obtenerplaylist } from "../controller/playlistcontroller.js";
import express from "express";

const rutaplaylist = express.Router();


rutaplaylist.post("/", crearplaylist);
rutaplaylist.get("/", obtenerplaylist);



export default rutaplaylist;