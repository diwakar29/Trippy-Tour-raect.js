
import "./styles.css";

import { Route,Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';


export default function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="service" element={<Service/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
    </Routes>
    
   
    </div>
  );
}
