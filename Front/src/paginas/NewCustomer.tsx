import { useState } from 'react';
import Sidebar from '../componentes/Sidebar';
import '../estilos/newCustomer.css';
import '../estilos/form-layout.css';
import ImagenPerfil from '../assets/perfiles/person.svg';

export default function NewCustomer() {
  const [form, setForm] = useState({
    name: '',
    apellidos: '',
    empresa: '',
    mail: '',
    profession: '',
    rol: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert('Error al enviar el cliente');
      console.error(err);
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="new-customer-content">
        <div className="form-layout">
          <div className="form-wrapper">
            <h1>New Customer</h1>
            <div className="form-card">
              <h2>Profile</h2>
              <div className="avatar-placeholder">👤</div>
              <div className="btn-row">
                <button className="change-btn">Change picture</button>
                <button className="delete-btn">Delete picture</button>
              </div>
              <form>
                <div className="form-row">
                  <div>
                    <label>Name</label>
                    <input name="name" type="text" value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Apellidos</label>
                    <input name="apellidos" type="text" value={form.apellidos} onChange={handleChange} />
                  </div>
                </div>
                <label>Empresa</label>
                <input name="empresa" type="text" value={form.empresa} onChange={handleChange} />
                <label>Mail</label>
                <input name="mail" type="email" value={form.mail} onChange={handleChange} />
                <label>Profession</label>
                <input name="profession" type="text" value={form.profession} onChange={handleChange} />
                <label>Rol</label>
                <input name="rol" type="text" value={form.rol} onChange={handleChange} />
              </form>
            </div>
          </div>
          <div className="right-panel">
            <img src={ImagenPerfil} alt="Illustration" />
            <button className="send-btn" type="button" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
