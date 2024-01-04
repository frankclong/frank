import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Navbar from './components/Navbar.js';
import Chess from './components/Chess.js';
import Wine from './components/Wine.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Header /> */}
      <Navbar />
      <About />
      <Projects />
      <Chess />
      <Wine />
    </main>
  );
}

export default App;