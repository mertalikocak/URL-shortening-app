import "./App.css";
import Header from "./Components/Header";
import GetStarted from "./Components/GetStarted";
import Shortener from "./Components/Shortener";
import Statistics from "./Components/Statistics";
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
