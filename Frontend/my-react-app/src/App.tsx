import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <Router>
{/*      
      <nav>
        <ul className="flex gap-4 p-4 bg-gray-200">
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="text-blue-500">Shop</Link>
          </li>
        </ul>
      </nav> */}
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
