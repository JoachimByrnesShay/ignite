import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

function Nav() {
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      fetchSearch(searchVal.trim())
    );
    setSearchVal("");
  };
  const [searchVal, setSearchVal] =
    useState("");

  const dispatch = useDispatch();
  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img
          src={logo}
          alt="logo"
        />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input
          type="text"
          value={searchVal}
          onChange={(e) =>
            setSearchVal(e.target.value)
          }
        />
        <button
          onClick={handleSubmit}
          type="submit"
        >
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    outline: none;
    box-shadow: 0px 0px 30px
      rgba(0, 0, 0, 0.2);
  }
  button {
    padding: 0.5rem 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    border: none;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
