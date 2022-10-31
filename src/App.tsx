import * as React from 'react';
import LoginPage from './pages/login';
import { GlobalRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <GlobalRoutes />
    </div>
  );
}

export default App;
