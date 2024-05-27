import React, { useEffect, useState } from "react";
import "./Similar.css";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const Similar = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDlhZGEzMWNiZjNhMGYxYWQ0MDlmNzliMDliZjdmZiIsInN1YiI6IjY2NDU0NmRkYTEwZWQ2OGUxYjI0MmZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HGm_3ki_mTgNFuKy_2eyHc0vPWxQhiW0W1EkPYG-1E",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="slider">
      <h1>Similar Movies</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="swiper"
      >
        {data.map((each, index) => {
          return (
            <SwiperSlide key={index} className="slide h-[320px]">
              <img
                src={`https://image.tmdb.org/t/p/w500` + each?.backdrop_path}
                alt={each?.name}
              />
              <p>{each?.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Similar;
