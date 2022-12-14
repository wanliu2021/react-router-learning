import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.amount}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
