import Sidebar from '../componentes/Sidebar';
import '../estilos/users.css';
import { Link } from 'react-router-dom';


const dummyUsers = [
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

export default function Users() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="users-content">
        <h1>Users</h1>
        <div className="users-header">
          <input type="text" placeholder="Buscar..." />
          <Link to="/customers/newUser" className="add-button">+ Add New</Link>

        </div>
        <table className="users-table">
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
            {dummyUsers.map((u, idx) => (
              <tr key={idx}>
                <td>
                  <div className="user-info">
                    <div className="avatar" style={{ backgroundColor: u.color }}></div>
                    {u.name}
                  </div>
                </td>
                <td>{u.email}</td>
                <td className={`status ${u.status.toLowerCase().replace(/\s/g, '-')}`}>{u.status}</td>
                <td>{u.role}</td>
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