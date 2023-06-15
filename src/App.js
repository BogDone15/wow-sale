// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { SingProductItem } from './pages/SingProductItem';
import { Home } from './pages/Home';
import { useState } from 'react';

function App() {
  const [showPayments, setShowPayments] = useState(false);

  return (
    // <BrowserRouter basename={process.env.PUBLIC_KEY}>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showPayments={showPayments}
              setShowPayments={setShowPayments}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <SingProductItem
              showPayments={showPayments}
              setShowPayments={setShowPayments}
            />
          }
        />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
