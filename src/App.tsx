import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import AboutPage from './components/about-us';


function App() {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage/>} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  );
}

export default App;
