import 'tailwindcss/tailwind.css';
import './App.css'
import MainLayer from './layouts/MainLayout';
import Home from './pages/index/Home'


function App() {

  return (
    <MainLayer>
      <Home />
    </MainLayer>
  )
}

export default App;