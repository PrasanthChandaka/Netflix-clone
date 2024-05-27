import React, { useEffect, useState } from "react";
import "./Home.css";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [data, setData] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer ${process.env.ACCESS}",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results[1]);
      })
      .catch((err) => console.error(err));
  }, []);

  const truncate = (des, val) => {
    return des?.length > val ? des.substr(0, val - 1) + "..." : des;
  };

  return (
    <>
      <Navbar />
      <div
        className="home"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        }}
      >
        <div>
          <div className="banner-content">
            <h1>{data?.original_title}</h1>
            <p>{truncate(data?.overview, 150)}</p>
            <div className="btn-container">
              <Link to={`/player/${data?.id}`}>
                <button type="button" className="btn1">
                  <img src={play} alt="" />
                  Play
                </button>
              </Link>
              <button type="button" className="btn2">
                <img src={info} alt="" />
                More Info
              </button>
            </div>
          </div>
          <div>
            <Slider title={"Popular on Netflix"} />
          </div>
        </div>
      </div>
      <div className="slider-category-container">
        <Slider title={"Blockbuster Movies"} category={"popular"} />
        <Slider title={"Only on Netflix"} category={"top_rated"} />
        <Slider title={"Upcoming"} category={"upcoming"} />
        <Slider title={"Top pics for you"} category={"top_rated"} />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <Footer />
    </>
  );
};

export default Home;
