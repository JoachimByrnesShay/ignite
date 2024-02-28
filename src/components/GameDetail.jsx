import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { gameScreenShotsURL } from "../api";

const GameDetail = () => {
  const { game, screenShots } =
    useSelector((state) => {
      console.log(state);
      return state.detail;
    });
  console.log("detail is: ", game);
  //   console.log(
  //     "game is:",
  //     gameScreenShotsURL
  //   );

  return (
    <CardShadow className="card-shadow">
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map(
                (data) => (
                  <h3
                    key={
                      data.platform.id
                    }
                  >
                    {data.platform.name}
                  </h3>
                )
              )}
            </div>
          </div>
        </div>
        <div className="media">
          <img
            src={game.background_image}
            alt="image"
          />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenShots.results.map(
            (screen) => (
              <img
                key={screen.id}
                src={screen.image}
                alt="screen"
              />
            )
          )}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
export default GameDetail;