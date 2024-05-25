import React, { useEffect, useState } from "react";
import "./Player.css";
import leftArrow from "../../assets/back_arrow_icon.png";
import ReactPlayer from "react-player";
import { Link, useNavigate, useParams } from "react-router-dom";
import Notfound from "../../components/Notfound/Notfound";

const Player = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDlhZGEzMWNiZjNhMGYxYWQ0MDlmNzliMDliZjdmZiIsInN1YiI6IjY2NDU0NmRkYTEwZWQ2OGUxYjI0MmZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HGm_3ki_mTgNFuKy_2eyHc0vPWxQhiW0W1EkPYG-1E",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results[0]);
        console.log(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const truncate = (str, n) => {
    return str?.length > n && str.slice(str, n);
  };

  const truncate2 = (str, n) => {
    return str?.length > n && str.slice(str, n);
  };
  return data ? (
    <div className="player">
      <Link to="/home">
        <img src={leftArrow} alt="left" />
      </Link>
      <div className="h-full max-h-[450px] md:max-h-[900px]">
        <ReactPlayer
          className=""
          url={`https://www.youtube.com/embed/${data.key}`}
          controls
          height="90%"
          width="100%"
          playing="true"
        />
      </div>
      <div className="video-details bg-[grey] p-5 flex justify-center gap-3 text-sm md:text-xl">
        <p>{truncate2(data?.name, 20)}</p>
        <p>|</p>
        <p>{truncate(data?.published_at, 10)}</p>
        <p>|</p>
        <p>{data.type}</p>
      </div>
    </div>
  ) : (
    <Notfound />
  );
};

export default Player;
