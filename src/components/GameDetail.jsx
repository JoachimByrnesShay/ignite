import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { smallImage } from "../actions/util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  document.body.style.overflow =
    "hidden";
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (
      element.classList.contains(
        "shadow"
      )
    ) {
      document.body.style.overflow =
        "auto";
      navigate("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(
      game.rating
    );
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img
            alt="star"
            key={i}
            src={starFull}
          />
        );
      } else {
        stars.push(
          <img
            alt="star"
            key={i}
            src={starEmpty}
          />
        );
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const {
    game,
    screenShots,
    isLoading,
  } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow
          onClick={exitDetailHandler}
          className="shadow"
        >
          <Link to={"/"}>
            <Detail
              className="detail"
              LayoutId={pathId}
            >
              <Stats className="stats">
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>
                    Rating:{" "}
                    {game.rating}
                  </p>
                  <Stars>
                    {getStars()}
                  </Stars>
                </div>
                <Info className="info">
                  <h3>Platforms</h3>
                  <Platforms className="platforms">
                    {game.platforms.map(
                      (data) => (
                        <img
                          key={
                            data
                              .platform
                              .id
                          }
                          src={getPlatform(
                            data
                              .platform
                              .name
                          )}
                        />
                      )
                    )}
                  </Platforms>
                </Info>
              </Stats>
              <Media className="media">
                <img
                  src={smallImage(
                    game.background_image,
                    640
                  )}
                  alt=""
                />
              </Media>
              <Description className="description">
                <p>
                  {game.description_raw}
                </p>
              </Description>
              <div className="gallery">
                {screenShots.results.map(
                  (screen) => (
                    <img
                      key={screen.id}
                      src={screen.image}
                      alt="game screen"
                    />
                  )
                )}
              </div>
            </Detail>
          </Link>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;

  min-height: 100vh;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Stars = styled(motion.div)``;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  h3 {
    margin: 1.5rem 2%;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
