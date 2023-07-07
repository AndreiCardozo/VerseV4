import { useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';

import styles from '../src/App.module.css';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Carro } from './pages/Carro/Carro';
import { Moto } from './pages/Moto/Moto';
import { Mansoes } from './pages/Mansoes/Mansoes';
import { Vips } from './pages/Vips/Vips';
import { Outros } from './pages/Outros/Outros';
import { Carrinho } from './pages/Carrinho/Carrinho';
import { Aereo } from './pages/Aereo/aereo';
import theme from './theme';

export function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/carros"
              element={<Carro carrinho={carrinho} setCarrinho={setCarrinho} />}
            />
            <Route
              path="/motos"
              element={<Moto carrinho={carrinho} setCarrinho={setCarrinho} />}
            />
            <Route
              path="/mansoes"
              element={<Mansoes carrinho={carrinho} setCarrinho={setCarrinho} />}
            />
            <Route path="/vips" element={<Vips carrinho={carrinho} setCarrinho={setCarrinho} />} />
            <Route
              path="/outros"
              element={<Outros carrinho={carrinho} setCarrinho={setCarrinho} />}
            />
            <Route
              path="/aereo"
              element={<Aereo carrinho={carrinho} setCarrinho={setCarrinho} />}
            />
            <Route path="/carrinho" element={<Carrinho carrinho={carrinho} />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}
