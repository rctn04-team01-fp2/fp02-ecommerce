import * as React from 'react';
import { GlobalRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <GlobalRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
