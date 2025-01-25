import React from 'react';
import AppRoutes from './routes/Routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './styles/main.scss';

function App() {
  return (
      <div className="App">
        <Header/>
        <main>
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
  )
}

export default App
