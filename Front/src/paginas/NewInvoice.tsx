import Sidebar from '../componentes/Sidebar';
import '../estilos/newInvoice.css';
import '../estilos/form-layout.css';


export default function NewInvoice() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="new-invoice-content">
        <h1>New Invoice</h1>
        <div className="invoice-header">
          <div className="field-group">
            <label>Customer</label>
            <select>
              <option>Reoctal</option>
            </select>
          </div>
          <div className="field-group right">
            <label>Invoice #</label>
            <input type="text" value="INV-00089" readOnly />
            <label>Date</label>
            <input type="date" value="2018-03-07" />
            <label>Payment Term</label>
            <input type="text" value="Due end of month" />
            <label>Due Date</label>
            <input type="date" value="2018-03-31" />
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Services/Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Vat %</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Net Consultancy Services</td>
              <td>49</td>
              <td>25</td>
              <td>Hour(s)</td>
              <td>0</td>
              <td>1,225</td>
            </tr>
            <tr>
              <td>Net Consultancy Services</td>
              <td>25</td>
              <td>20</td>
              <td>Hour(s)</td>
              <td>0</td>
              <td>465</td>
            </tr>
            <tr>
              <td>Net Consultancy Services</td>
              <td>17</td>
              <td>32</td>
              <td>Hour(s)</td>
              <td>0</td>
              <td>544</td>
            </tr>
            <tr>
              <td>Net Consultancy Services</td>
              <td>50</td>
              <td>15</td>
              <td>Hour(s)</td>
              <td>0</td>
              <td>750</td>
            </tr>
          </tbody>
        </table>

        <button className="add-service-btn">+ Add Service/Product</button>

        <div className="invoice-summary">
          <p>Sub Total(s): <strong>$2,564</strong></p>
          <p>Total ($): <strong>$2,564</strong></p>
        </div>

        <div className="upload-box">
          <p>Drag and drop files — <button className="browse-btn">Browse</button></p>
        </div>

        <div className="actions">
          <label><input type="checkbox" /> Make recurring</label>
          <div>
            <button className="cancel-btn">Cancel</button>
            <button className="done-btn">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}