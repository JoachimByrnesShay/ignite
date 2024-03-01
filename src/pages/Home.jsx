import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from ".././components/Game";
import { motion } from "framer-motion";
import styled from "styled-components";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const {
    popular,
    upcoming,
    newGames,
  } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <GameDetail />
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming &&
          upcoming.map((game) => {
            // console.log(game);
            return (
              <Game
                key={game.id}
                name={game.name}
                releaseDate={
                  game.released
                }
                gameId={game.id}
                image={
                  game.background_image
                }
              />
            );
          })}
      </Games>
      {/*<h2>Popular Games</h2>
      <Games>
        {popular.map((game) => {
          return (
            <Game
              key={game.id}
              name={game.name}
              releaseDate={
                game.released
              }
              image={
                game.background_image
              }
              gameId={game.id}
            />
          );
        })}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => {
          return (
            <Game
              key={game.id}
              name={game.name}
              releaseDate={
                game.released
              }
              image={
                game.background_image
              }
              gameId={game.id}
            />
          );
        })}
      </Games> */}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(500px, 1fr)
  );
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
