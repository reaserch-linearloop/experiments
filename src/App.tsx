import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg'; // Changed from '/vite.svg' to './vite.svg' to correct the path
import './App.css';
import Header from './header/head';

function App() {
  const [count, setCount] = useState(0);

  // Breaking SonarQube rule: Cognitive Complexity of functions should not be too high
  function complexFunction(n: number): number {
    if (n <= 1) return n;
    if (n % 2 === 0) {
      return complexFunction(n / 2);
    } else {
      return complexFunction(3 * n + 1);
    }
  }

  // Breaking SonarQube rule: "any" type should not be used
  let unsafeVariable: any = "This could be anything";

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <Link to="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </Link>
              <Link to="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </Link>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
              {/* Breaking SonarQube rule: React components should not have too many props */}
              <TooManyProps prop1={1} prop2={2} prop3={3} prop4={4} prop5={5} prop6={6} prop7={7} prop8={8} prop9={9} prop10={10} prop11={11} prop12={12} />
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        } />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

// Breaking SonarQube rule: Functions should not be too complex
function TooManyProps(props: any) {
  return <div>{Object.values(props).join(', ')}</div>;
}

export default App;