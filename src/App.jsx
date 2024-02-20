// const apiKey = import.meta.env
//   .VITE_RAWG_APIKEY;
//import apiKey from "./apiKey";
import { popularGamesURL } from "./api.js";
function App() {
  console.log(popularGamesURL());
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
