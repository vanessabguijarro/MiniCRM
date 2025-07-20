import { Router } from 'express';
import db from '../db/database';

const router = Router();

router.post('/products', async (req, res) => {
  try {
    const { name, codigo, stock, tipo, peso, precio } = req.body;

    await db('products').insert({
      name,
      codigo,
      stock,
      tipo,
      peso,
      precio
    });

    res.status(201).json({ message: '✅ Producto guardado correctamente' });
  } catch (error) {
    console.error('❌ Error al guardar producto:', error);
    res.status(500).json({ error: 'No se pudo guardar el producto' });
  }
});

export default router;
