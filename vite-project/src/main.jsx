import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* known as fragments  */}
    <>  
      <Chai/>
      <p>Hello paragraph !</p>
    </>
  </React.StrictMode>,
)
