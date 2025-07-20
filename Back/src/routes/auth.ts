import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

const users = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('admin', 10) }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });
  res.json({ token });
});



export default router;
