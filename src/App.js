import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Header /> */}
      <About />
      <Projects />
    </main>
  );
}

export default App;
