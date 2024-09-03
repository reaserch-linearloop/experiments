import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
import Header from './header/head';

interface AppState {
  count: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const incrementCount = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };

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
                <button onClick={incrementCount}>
                  count is {this.state.count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
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
}


export default App;