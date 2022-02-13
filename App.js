import './App.css';
import Navbar from './Navbar';
import Pay from './Pay';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Italian from './Italian';
import Burger from './Burger';
import Beverages from './Beverages';
import Desserts from './Desserts';

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path = "/" element={<Navbar />}>
          </Route>
          <Route path = "/italian" element={<Italian />}>
          </Route>
          <Route path = "/burger" element={<Burger />}>
          </Route>
          <Route path = "/desserts" element={<Desserts />}>
          </Route>
          <Route path = "/beverages" element={<Beverages />}>
          </Route>
          <Route path = "/pay" element={<Pay />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
