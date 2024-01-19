import { useState, useEffect } from "react";
// import styled from 'styled-components';
import { Link } from "react-router-dom";

import { fetchLinen } from "../api";
import { StyledAppContainer } from "./HomePageStyled";

export default function HomePage() {
  const [linenList, setLinenList] = useState([]);

  useEffect(() => {
    const getLinens = async () => {
      try {
        const response = await fetchLinen();
        setLinenList((prevList) => [...prevList, ...(response.results || [])]);
        console.log(response);
      } catch (error) {
        console.error("Error fetching linen:", error);
      }
    };
    getLinens();
  }, []);

  const linenArr = Array.isArray(linenList) && linenList.length;
  return (
    <StyledAppContainer>
      <h2 className="page-title">Trending today</h2>
      <ul className="movielist">
        {linenArr &&
          linenList.map((linenItem) => (
            <Link to={`/movies/${linenItem.id}`} key={linenItem.id}>
              <li className="movieitem">
                <h3 className="movietitle">
                  {linenItem.title || linenItem.name || "movie"}
                </h3>
                <img
                  src={
                    linenItem.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${linenItem.poster_path}`
                      : "defaultImg" // Замініть "defaultImg" на ваш шлях до дефолтного зображення
                  }
                  width={250}
                  alt={linenItem.title || linenItem.name || "poster"}
                />
              </li>
            </Link>
          ))}
      </ul>
    </StyledAppContainer>
  );
}
