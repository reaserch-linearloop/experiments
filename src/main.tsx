import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//i am testing the code with this comment that deep source will scan it or not 

const rv = 10;

//Working on PR Reaserch

//creating new version of the code with more unused variables

const rv2 = 20;
 