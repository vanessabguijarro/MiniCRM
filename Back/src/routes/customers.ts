import { Router } from 'express';
import db from '../db/database';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, apellidos, empresa, mail, profession, rol } = req.body;

    await db('customers').insert({
      name,
      apellidos,
      empresa,
      mail,
      profession,
      rol
    });

    res.status(201).json({ message: '✅ Cliente guardado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar cliente' });
  }
});

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const customers = await db('customers').select('*');
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});


export default router;
