import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Invoices from './paginas/Invoices';
import NewInvoice from './paginas/NewInvoice';
import Customers from './paginas/Customers';
import NewCustomer from './paginas/NewCustomer';
import Products from './paginas/Products';
import NewProduct from './paginas/NewProduct';
import Users from './paginas/Users';
import NewUser from './paginas/NewUser';
import type { JSX } from 'react/jsx-dev-runtime';

// Ruta privada
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
      <Route path="/invoices/newInvoice" element={<PrivateRoute><NewInvoice /></PrivateRoute>} />
      <Route path="/customers" element={<PrivateRoute><Customers /></PrivateRoute>} />
      <Route path="/customers/newCustomer" element={<PrivateRoute><NewCustomer /></PrivateRoute>} />
      <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
      <Route path="/products/newProduct" element={<PrivateRoute><NewProduct /></PrivateRoute>} />
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
      <Route path="/users/newUser" element={<PrivateRoute><NewUser /></PrivateRoute>} />
      
      {/* Redirige rutas no válidas al login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
