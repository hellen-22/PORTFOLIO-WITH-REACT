import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import background from "./images/background.jpg";


function App() {
  return (
    <div className="App" style={{ backgroundImage : `url(${background})`, backgroundSize : "cover", height : "100vh" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
