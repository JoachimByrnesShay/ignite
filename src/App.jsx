// const apiKey = import.meta.env
//   .VITE_RAWG_APIKEY;
//import apiKey from "./apiKey";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
