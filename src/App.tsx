import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
// import NavigationComponent from './components/navigation/navigation.component';
import IndexPage from './pages/index.page';
import MatadorPage from './pages/matador.page';
import NavigationComponent from './components/navigation/navigation.component';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
        <NavigationComponent />
          <Routes>
            <Route index element={
              <IndexPage />
            } />
            <Route path="/matador" element={
              <MatadorPage />
            } />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
