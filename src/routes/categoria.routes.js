import { Router } from 'express';
import {  obtenerCategorias, registrarCategoria, eliminarCategoria, actualizarCategoria } from '../controllers/categoria.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categoria', obtenerCategorias);
router.post('/registrarcategoria', registrarCategoria);
// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcategoria/:id', eliminarCategoria);
// Ruta para actualizar una categoría por su ID
router.patch('/actualizarcategoria/:id', actualizarCategoria);


export default router;