import './App.css';
import { React } from 'react';
import Resources from './components/Resources';
import MultiStepForm from './components/MultiStepForm';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <MultiStepForm/>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
