import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { Home, HotCoffee, IceCoffee } from './pages';
    
export default function App() {
    
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route 
            path='/'
            element={<Home />} 
          />
          <Route 
            path='/hot'
            element={<HotCoffee />} 
          />
          <Route 
            path='/ice'
            element={<IceCoffee />} 
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}