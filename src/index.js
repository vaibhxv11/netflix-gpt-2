import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming your main App component is in a file named App.js
import './index.css';

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App   />
 </React.StrictMode>
);

