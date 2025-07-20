import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../componentes/Sidebar';
import '../estilos/customers.css';

interface Customer {
  id: number;
  name: string;
  apellidos: string;
  empresa: string;
  mail: string;
  profession: string;
  rol: string;
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/customers')
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error('Error cargando clientes', err));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="customers-content">
        <h1>Customers</h1>
        <div className="customers-header">
          <input type="text" placeholder="Buscar..." />
          <Link to="/customers/newCustomer" className="add-button">+ Add New</Link>
        </div>
        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Empresa</th>
              <th>Rol</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="customer-info">
                    <div className="avatar" style={{ backgroundColor: '#6c63ff' }}></div>
                    {c.name} {c.apellidos}
                  </div>
                </td>
                <td>{c.mail}</td>
                <td>{c.empresa}</td>
                <td>{c.rol}</td>
                <td className="actions">
                  <button>✏️</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
