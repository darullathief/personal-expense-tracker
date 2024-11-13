import {createBrowserRouter} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default App;
