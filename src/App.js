import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { Home } from './pages';
    
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
        </Routes>
      </Container>
    </BrowserRouter>
  );
}