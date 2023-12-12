import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Login from './components/Login'
import Users from './components/Users'


function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />}  />

    </Routes>
    
    </BrowserRouter>

  </Provider>

  )
}

export default App