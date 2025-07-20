import Sidebar from '../componentes/Sidebar';
import '../estilos/products.css';
import { Link } from 'react-router-dom';


const dummyProducts = [
  { name: 'Devon Lane', email: 'tranthuy.nute@gmail.com', status: 'Busy', role: 'Bot Analyst', color: 'red' },
  { name: 'Darlene Robertson', email: 'trungkienptknd@gmail.com', status: 'Free', role: 'Reporter', color: 'blue' },
  { name: 'Theresa Webb', email: 'thuahang.nute@gmail.com', status: 'Free', role: 'Broadcaster', color: 'orange' },
  { name: 'Cody Fisher', email: 'tienlepskptnd@gmail.com', status: 'Workin', role: 'Sales Manager', color: 'green' },
  { name: 'Eleanor Pena', email: 'vuathuongnute@gmail.com', status: 'On Vacation', role: 'Analytics Admin', color: 'purple' },
  { name: 'Savannah Nguyen', email: 'manhhackk08@gmail.com', status: 'Workin', role: 'Marketer', color: 'yellow' },
  { name: 'Marvin McKinney', email: 'binhnek628@gmail.com', status: 'Free', role: 'Team Editor', color: 'pink' },
  { name: 'Jenny Wilson', email: 'danghoang87h@gmail.com', status: 'Busy', role: 'Bot Editor', color: 'red' },
  { name: 'Jerome Bell', email: 'nvt.lisst.nute@gmail.com', status: 'Busy', role: 'Team Owner', color: 'blue' },
  { name: 'Cameron Williamson', email: 'ckctm12@gmail.com', status: 'Working', role: 'PPC Expert', color: 'green' },
];

export default function Products() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="products-content">
        <h1>Products</h1>
        <div className="products-header">
          <input type="text" placeholder="Buscar..." />
          <Link to="/products/newProduct" className="add-button">+ Add New</Link>

        </div>
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map((p, idx) => (
              <tr key={idx}>
                <td>
                  <div className="product-info">
                    <div className="avatar" style={{ backgroundColor: p.color }}></div>
                    {p.name}
                  </div>
                </td>
                <td>{p.email}</td>
                <td className={`status ${p.status.toLowerCase().replace(/\s/g, '-')}`}>{p.status}</td>
                <td>{p.role}</td>
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