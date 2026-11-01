import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { CustomerApp } from './components/customer/CustomerApp.tsx';
import './index.css';

const match = window.location.pathname.match(/^\/order\/t\/([^/]+)\/?$/);
const tableToken = match ? decodeURIComponent(match[1]) : null;

createRoot(document.getElementById('root')!).render(
  tableToken ? <CustomerApp token={tableToken} /> : <App />
);
