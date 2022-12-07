import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SingProductItem } from './pages/SingProductItem';
import { Home } from './pages/Home';
import { useState } from 'react';

function App() {
  const [showPayments, setShowPayments] = useState(false);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
