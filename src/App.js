import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/landing/home';
import { AppContextProvider } from './context/AppContextProvider';

function App() {
  return (
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
  );
}

export default App;
