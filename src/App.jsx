// const apiKey = import.meta.env
//   .VITE_RAWG_APIKEY;
//import apiKey from "./apiKey";
import { popularGamesURL } from "./api.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  console.log(popularGamesURL());
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
