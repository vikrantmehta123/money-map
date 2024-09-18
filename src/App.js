import './App.css';
import { React } from 'react';
import Resources from './components/Resources';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import Planner from './components/Planner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/planner" element={<Planner />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
