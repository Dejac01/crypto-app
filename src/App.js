import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from './components/Nav';
import App2 from './App2';
import Stocks from "./components/Stocks";
import Dashboard from "./components/Dashboard";

export default function App (props) {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>

    <Routes>
      <Route path="/" element={<App2/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price/:symbols" element={<Price/>}/>
      <Route path="/stocks" element={<Dashboard/>}/>
  <Route path="/stocks/:symbols" element={<Stocks/>}/>

    </Routes>
    </div>
  );
}