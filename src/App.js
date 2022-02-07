import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import ItemCard from './components/ItemCard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ItemCard />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
