import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './components/Header.css'
import './components/Sm.css'
//Bura kompnentleri elave edecem
import Header from './components/Header'
import Sm from './components/Sm'
import Link from './components/Link'
import Home from './container/Home'
import Footer from './components/Footer'

import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import NotFound from './container/NotFound'
import Photos from './container/Photos'
import Quotes from './container/Quotes'
import Wallpaper from './container/Wallpaper'


function App() {
  return (
    <div className='container'>

    <Router>
      <Sm/>
    <Header/>
    <Link/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/quotes' element={<Quotes/>}/>
      <Route path='/wallpaper' element={<Wallpaper/>}/>




    </Routes>

    <Footer/>
    </Router>

    
    
    </div>
    
    
  )
}

export default App
