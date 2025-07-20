import { Link } from 'react-router-dom';
import Sidebar from '../componentes/Sidebar';
import '../estilos/home.css';
import invoicesImg from '../assets/home/invoices.svg';
import customersImg from '../assets/home/customers.svg';
import productsImg from '../assets/home/products.svg';
import newProductImg from '../assets/home/new-product.svg';
import financeImg from '../assets/home/finance.svg';
import settingsImg from '../assets/home/settings.svg';

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="home-content">
        <h1 className="home-title">Home</h1>
        <div className="card-grid">
          <Link to="/invoices" className="card">
            <img src={invoicesImg} alt="Invoices" />
            <p>Invoices</p>
          </Link>
          <Link to="/customers" className="card">
            <img src={customersImg} alt="Customers" />
            <p>Customers</p>
          </Link>
          <Link to="/products" className="card">
            <img src={productsImg} alt="Products" />
            <p>Products</p>
          </Link>
          <Link to="/products/new" className="card">
            <img src={newProductImg} alt="New Product" />
            <p>New Product</p>
          </Link>
          <Link to="#" className="card">
            <img src={financeImg} alt="Finance" />
            <p>Finance</p>
          </Link>
          <Link to="#" className="card">
            <img src={settingsImg} alt="Settings" />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
