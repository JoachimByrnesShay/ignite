// const apiKey = import.meta.env
//   .VITE_RAWG_APIKEY;
//import apiKey from "./apiKey";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        {["/game/:id", "/"].map(
          (path) => (
            <Route
              key={path}
              path={path}
              element={<Home />}
            />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
