import Sidebar from '../componentes/Sidebar';
import '../estilos/newUser.css';
import '../estilos/form-layout.css';

import ImagenPerfil from '../assets/perfiles/person.svg';

export default function NewUser() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="new-user-content">
        <h1>New User</h1>
        <div className="new-user-form">
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
                  <input type="text" />
                </div>
                <div>
                  <label>Apellidos</label>
                  <input type="text" />
                </div>
              </div>
              <label>Mail</label>
              <input type="email" />
              <label>Profession</label>
              <input type="text" />
              <label>Rol</label>
              <input type="text" />
            </form>
          </div>
          <div className="right-panel">
            <img src={ImagenPerfil} alt="Illustration" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}