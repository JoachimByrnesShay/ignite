import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction.js";
import { Link } from "react-router-dom";
import { smallImage } from "../actions/util.js";

const Game = (props) => {
  const dispatch = useDispatch();
  const loadDetailHandler = (id) => {
    dispatch(loadDetail(id));
  };
  const stringId =
    props.gameId.toString();
  return (
    <StyledGame
      LayoutId={stringId}
      onClick={() =>
        loadDetailHandler(props.gameId)
      }
    >
      <Link
        to={`/game/${props.gameId}`}
      >
        <h3>{props.name}</h3>
        <p>{props.releaseDate}</p>
        <img
          src={smallImage(
            props.image,
            640
          )}
        />
      </Link>
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px
    rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  cursor: pointer;
  overflow: hidden;
`;
