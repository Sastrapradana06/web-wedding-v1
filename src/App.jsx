
import './App.css'

import Sidebar from './components/sidebar/sidebar'
import About from './views/about/about'
import Events from './views/events/Events'
import Footer from './views/footer/Footer'
import Gallery from './views/gallery/Gallery'
import Home from './views/home/home'



function App() {

  return (
    <div className='w-[100%] min-h-[100vh] max-h-max relative'>
      <Sidebar />
      <Home />
      <About />
      <Events />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
