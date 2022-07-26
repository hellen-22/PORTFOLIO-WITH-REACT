import Header from "./components/Header";
import Home from "./components/Home";
import background from "./images/background.jpg";


function App() {
  return (
    <div className="App" style={{ backgroundImage : `url(${background})`, backgroundSize : "cover", height : "100vh" }}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
