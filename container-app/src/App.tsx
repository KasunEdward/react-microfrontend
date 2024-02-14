import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//@ts-ignore
const ClockAppMfe = React.lazy(()=>import("clock_app/ClockAppMfe"));

const App = () => (
  <div className="container">
    <div>Container App</div>
    <React.Suspense fallback="Loading....">
      <ClockAppMfe/>
    </React.Suspense>
    
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
