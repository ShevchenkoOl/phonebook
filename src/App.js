// import Spinner from 'components/Spinner/Spiner';
// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from "react-router-dom";

// const Contacts = lazy(() => import('components/Contacts/Contacts'));
// const HomePage = lazy(() => import('components/HomePage/HomePage'));


//  function App() {
//   return
  //   <Suspense fallback={<Spinner />}>
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/contacts" element={<Contacts />} />
  //     <Route path="*" element={<div>Not Found</div>} />
  //   </Routes>
  //  </Suspense>
// }

// export default App;


import React from 'react';
import HomePage from 'components/HomePage/HomePage';

const App = () => {
  return (
    <>
    <HomePage />
    </>
  );
}

export default App;
