import Header from './components/Header'
import LashServices from './components/LashServices'
import NailServices from './components/NailServices'
import Footer from './components/Footer'
import './style.css'
function App() {

  return (
    <>
     <div className="min-h-screen bg-pink-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <LashServices />
        <NailServices />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
