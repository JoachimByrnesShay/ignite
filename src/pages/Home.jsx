import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  fetchSearch,
  loadGames,
} from "../actions/gamesAction";
import Game from ".././components/Game";
import {
  motion,
  AnimatePresence,
  // LayoutGroup,
} from "framer-motion";
import styled from "styled-components";
import GameDetail from ".././components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId =
    location.pathname.split("/")[2];
  // console.log(location);
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const {
    // popular,
    upcoming,
    // newGames,
    searched,
  } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {/* <LayoutGroup type="crossfade"> */}

      {pathId && (
        <GameDetail
          pathId={pathId}
          initial={{
            opacity: 0,
            y: 700,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        />
      )}

      <Games>
        {searched && searched.length ? (
          <h2> Searched Games</h2>
        ) : (
          ""
        )}
        {searched &&
          searched.map((game) => {
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
        <h2>Upcoming Games</h2>
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
      {/* </LayoutGroup> */}
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
  h2 {
    grid-column: 1 / -1;
  }
`;

export default Home;
