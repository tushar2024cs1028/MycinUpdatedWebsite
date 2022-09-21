import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements"
import {Routes,Route} from "react-router-dom";
function App() {
  return (<div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Team" element={<Team/>} />
      <Route path="Achievements" element={<Achievements/>} />

    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
