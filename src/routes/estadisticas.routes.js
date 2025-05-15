import { Router } from 'express';
import {  totalVentasPorDia, totalVentasPorMes,totalVentasPorAño } from '../controllers/estadisticas.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/totalventaspordia', totalVentasPorDia);

// Ruta para obtener todos los empleados
router.get('/totalventaspormes', totalVentasPorMes);

// Ruta para obtener todos los empleados
router.get('/totalventasporaño', totalVentasPorAño);

export default router;