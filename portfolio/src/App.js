import Header from "./components/Header";
import Home from "./components/Home";
import background from "./images/banner.jpg";



function App() {
  return (
    <div className="App" style={{ backgroundImage : `url(${background})` }}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
