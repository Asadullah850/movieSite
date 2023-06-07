import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Share/Nav/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    < >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
