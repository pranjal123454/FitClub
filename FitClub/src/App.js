import './App.css';
import Hero from "./components/Hero/Hero";
import Program from './components/Header/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Plan from "./components/Plans/Plan";
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plan/>
          <Testimonials/>
    </div>
  );
}

export default App;
