import { MantineProvider } from '@mantine/core';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, Projects, About, Contact } from './pages';
import Navbar from './components/Navbar';
import GlobalAudio from "./components/GlobalAudio";

const App = () => {
  return (
    <MantineProvider>
      <main className="bg-slate-300/20 h-full">
        <Router>
          <Navbar />
          <GlobalAudio />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </MantineProvider>
  );
};

export default App;
