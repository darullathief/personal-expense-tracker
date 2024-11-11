import {createBrowserRouter} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from "./pages/Login";

const App = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default App;
