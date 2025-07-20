import { Link, useLocation } from 'react-router-dom';
import '../estilos/sidebar.css';

import IconHome from '../assets/sidebar/home-sidebar.svg';
import IconCustomers from '../assets/sidebar/customers-sidebar.svg';
import IconProducts from '../assets/sidebar/invoice-sidebar.svg';
import IconInvoices from '../assets/sidebar/product-sidebar.svg';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: IconHome, label: 'Home' },
    { path: '/invoices', icon: IconInvoices, label: 'Invoices' },
    { path: '/customers', icon: IconCustomers, label: 'Customers' },
    { path: '/products', icon: IconProducts, label: 'Products' }
  ];

  return (
    <aside className="sidebar">
      <ul>
        {navItems.map(item => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>
              <img src={item.icon} alt={item.label} />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
