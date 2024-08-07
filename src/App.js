import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner/Spiner'; // исправьте опечатку в импорте Spinner
import AuthPage from 'components/pages/AuthPage/AuthPage';
import RegistrPage from 'components/pages/RegistrPage/RegistrPage';

const HomePage = lazy(() => import('components/pages/HomePage/HomePage.jsx'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegistrPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;



// import React from 'react';
// import HomePage from 'components/pages/HomePage/HomePage';

// const App = () => {
//   return (
//     <>
//     <HomePage />
//     </>
//   );
// }

// export default App;
