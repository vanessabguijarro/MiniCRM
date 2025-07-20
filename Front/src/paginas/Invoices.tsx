import Sidebar from '../componentes/Sidebar';
import '../estilos/invoices.css';
import { Link } from 'react-router-dom';


const invoices = [
  { date: '02-11-2018', number: '00087', customer: 'Reoctal', amount: 2500, due: '03-17-2018', state: 'Invoiced' },
  { date: '01-16-2018', number: '00086', customer: 'Promotional', amount: 1500, due: '11-18-2018', state: 'Paid' },
  { date: '01-08-2018', number: '00085', customer: 'Effie Watkins', amount: 4300, due: '09-07-2018', state: 'Overdue' },
  { date: '01-07-2018', number: '00084', customer: 'Traveller', amount: 900, due: '06-20-2018', state: 'Paid' },
  { date: '01-02-2018', number: '00083', customer: 'Reoctal', amount: 400, due: '08-17-2018', state: 'Due Date' },
  { date: '12-28-2017', number: '00082', customer: 'Traveller', amount: 2500, due: '06-17-2018', state: 'Invoiced' },
  { date: '12-26-2017', number: '00081', customer: 'Don Welsh', amount: 7300, due: '05-02-2018', state: 'Due Date' },
  { date: '12-24-2017', number: '00080', customer: 'Brett Parker', amount: 1200, due: '01-08-2018', state: 'Invoiced' },
  { date: '12-20-2017', number: '00079', customer: 'Promotional', amount: 1800, due: '09-05-2018', state: 'Invoiced' },
  { date: '12-02-2017', number: '00078', customer: 'Reoctal', amount: 900, due: '06-26-2018', state: 'Paid' },
];

const stateClass = (state: string) => {
  return state.toLowerCase().replace(/\s/g, '-');
};

export default function Invoices() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="invoices-content">
        <h1>Invoices</h1>

        <div className="invoices-toolbar">
          <button>📅 Sort by Date</button>
          <button>📌 Any Date</button>
          <input type="text" placeholder="Search" />
          <Link to="/invoices/newInvoice" className="add-button">+ Add New</Link>

        </div>

        <div className="invoices-filters">
          <button className="selected">All <span>$189,774</span></button>
          <button>Unpaid <span>$5400</span></button>
          <button>Paid <span>$183,774</span></button>
          <button>Cancelled <span>$600</span></button>
        </div>

        <table className="invoices-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Number</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Outstanding</th>
              <th>Due Date</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, idx) => (
              <tr key={idx}>
                <td>{inv.date}</td>
                <td>{inv.number}</td>
                <td>{inv.customer}</td>
                <td>${inv.amount}</td>
                <td>0</td>
                <td>{inv.due}</td>
                <td><span className={`tag ${stateClass(inv.state)}`}>{inv.state}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">First ◀ 1 2 3 4 ▶ Last</div>
      </div>
    </div>
  );
}