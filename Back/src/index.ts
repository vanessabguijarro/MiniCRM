import type { Knex } from 'knex';

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import customerRoutes from './routes/customers';
import db from './db/database';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);

// CONEXION BASE DE DATOS
async function initDB() {
  const exists = await db.schema.hasTable('products');
  if (!exists) {
    await db.schema.createTable('products', (table: Knex.TableBuilder) => {
      table.increments('id').primary();
      table.string('name');
      table.string('codigo');
      table.integer('stock');
      table.string('tipo');
      table.string('peso');
      table.float('precio');
    });

    console.log('✅ Tabla "products" creada');
  } else {
    console.log('ℹ️ Tabla "products" ya existe');
  }

  // Crear tabla customers si no existe
const existsCustomers = await db.schema.hasTable('customers');
if (!existsCustomers) {
  await db.schema.createTable('customers', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name');
    table.string('apellidos');
    table.string('empresa');
    table.string('mail');
    table.string('profession');
    table.string('rol');
  });

  console.log('✅ Tabla "customers" creada');
}

}

initDB();

app.listen(3001, () => {
  console.log('🚀 Servidor backend en http://localhost:3001');
});
