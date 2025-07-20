import Sidebar from '../componentes/Sidebar';
import '../estilos/newProduct.css';
import '../estilos/form-layout.css';
import NuevoProduct from '../assets/perfiles/profile-new-product.svg';

export default function NewProduct() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="new-product-content">
        <div className="form-layout">
          <div className="form-wrapper">
            <h1>New Product</h1>
            <div className="form-card">
              <h2>Product</h2>
              <div className="product-image">📦</div>
              <div className="btn-row">
                <button className="change-btn">Change picture</button>
                <button className="delete-btn">Delete picture</button>
              </div>
              <form>
                <div className="form-row">
                  <div>
                    <label>Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Codigo</label>
                    <input type="text" />
                  </div>
                </div>
                <label>Stock</label>
                <input type="number" />
                <label>Tipo</label>
                <input type="text" />
                <label>Peso</label>
                <input type="text" />
                <label>Precio</label>
                <input type="number" />
              </form>
            </div>
          </div>

          <div className="right-panel">
            <img src={NuevoProduct} alt="Illustration" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
