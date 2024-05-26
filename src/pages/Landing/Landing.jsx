import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { store } from "../../context";
import { IoIosArrowForward } from "react-icons/io";
import landingImg1 from "../../assets/landing-feature-1.webp";
import landingImg2 from "../../assets/landing-feature-2.webp";
import landingImg3 from "../../assets/landing-feature-3.webp";
import landingImg4 from "../../assets/landing-feature-4.png";
import AccordianComponent from "../../components/AccordianComponent";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const landingBanner = {
  English: {
    heading: "Unlimited movies, TV shows and more",
    description1: "Watch anywhere. Cancel anytime.",
    description2:
      "Ready to watch? Enter your email to create or restart your membership.",
    placeHolder: "Email Address",
    button: "Get Started",
  },
  Hindi: {
    heading: "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ",
    description1: "जहां चाहें देखें. जब चाहें कैंसल करें.",
    description2:
      "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
    placeHolder: "ईमेल एड्रेस",
    button: "शुरू करें",
  },
};

const landingTv = {
  English: {
    tvHeading: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  },
  Hindi: {
    tvHeading: "अपने टीवी पर आनंद लें",
    description:
      "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.",
  },
};

const landingDownload = {
  English: {
    DownloadHeading: "Download your shows to watch offline",
    DownloadDescription:
      "Save your favourites easily and always have something to watch.",
  },
  Hindi: {
    DownloadHeading: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
    DownloadDescription:
      "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.",
  },
};
const landingStreaming = {
  English: {
    streamHeading: "Watch everywhere",
    streamDescription:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  Hindi: {
    streamHeading: "हर जगह देखें",
    streamDescription:
      "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.",
  },
};
const landingProfile = {
  English: {
    profileHeading: "Create profiles for kids",
    profileDescription:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
  },
  Hindi: {
    profileHeading: "बच्चों के लिए प्रोफ़ाइल बनाएं",
    profileDescription:
      "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.",
  },
};

const Landing = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const { option } = useContext(store);
  const navigate = useNavigate();
  const landingBannerContent = (option) => {
    switch (option) {
      case "English":
        return landingBanner.English;
      case "Hindi":
        return landingBanner.Hindi;
      default:
        return null;
    }
  };
  const landingTvContent = (option) => {
    switch (option) {
      case "English":
        return landingTv.English;
      case "Hindi":
        return landingTv.Hindi;
      default:
        return null;
    }
  };
  const landingDownloadContent = (option) => {
    switch (option) {
      case "English":
        return landingDownload.English;
      case "Hindi":
        return landingDownload.Hindi;
      default:
        return null;
    }
  };
  const landingStreamContent = (option) => {
    switch (option) {
      case "English":
        return landingStreaming.English;
      case "Hindi":
        return landingStreaming.Hindi;
      default:
        return null;
    }
  };
  const landingProfileContent = (option) => {
    switch (option) {
      case "English":
        return landingProfile.English;
      case "Hindi":
        return landingProfile.Hindi;
      default:
        return null;
    }
  };
  const { heading, description1, description2, placeHolder, button } =
    landingBannerContent(option);
  const { tvHeading, description } = landingTvContent(option);
  const { DownloadHeading, DownloadDescription } =
    landingDownloadContent(option);
  const { streamHeading, streamDescription } = landingStreamContent(option);
  const { profileHeading, profileDescription } = landingProfileContent(option);
  return (
    <>
      <div className="bg-header-bg bg-cover min-[960px]:h-screen w-full relative grid place-items-center pt-28 pb-10">
        <div className="absolute h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
        <Header />
        <div className="inner-container w-full text-white flex flex-col justify-center items-center gap-5 text-center z-10">
          <h1 className="text-[32px] md:text-5xl font-bold">{heading}</h1>
          <p className="text-md md:text-xl">{description1}</p>
          <p className="text-md md:text-xl">{description2}</p>
          <form
            className="flex flex-col md:flex-row justify-center items-center gap-5 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            <input
              type="email"
              required
              placeholder={placeHolder}
              className="rounded-md p-4 w-[70%] max-w-[340px] bg-[rgba(0,0,0,0.6)] border border-grey-50 placeholder:text-[#c0bebe] outline-none"
            />
            <button
              className="bg-[#C11119] inline-flex items-center gap-2 p-4 rounded-md text-xl font-semibold"
              type="submit"
            >
              {button}
              <IoIosArrowForward />
            </button>
          </form>
        </div>
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <div className="inner-container bg-cover text-white grid grid-cols-1 md:grid-cols-2 py-[7%] place-items-center gap-20">
        <div className="text-center md:text-left ">
          <h1 className="text-[32px] md:text-5xl font-bold mb-5">
            {tvHeading}
          </h1>
          <p className="text-md md:text-xl">{description}</p>
        </div>
        <img
          className="max-w-[350px] object-contain "
          src={landingImg1}
          alt="landing-img"
        />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <div className="inner-container bg-cover text-white grid grid-cols-1 md:grid-cols-2 py-[7%] place-items-center gap-20">
        <div className="text-center md:text-left md:order-2">
          <h1 className="text-[32px] md:text-5xl font-bold mb-5">
            {DownloadHeading}
          </h1>
          <p className="text-md md:text-xl">{DownloadDescription}</p>
        </div>
        <img
          className="max-w-[350px] object-contain md:order-1"
          src={landingImg2}
          alt="landing-img"
        />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <div className="inner-container bg-cover text-white grid grid-cols-1 md:grid-cols-2 py-[7%] place-items-center gap-20">
        <div className="text-center md:text-left ">
          <h1 className="text-[32px] md:text-5xl font-bold mb-5">
            {streamHeading}
          </h1>
          <p className="text-md md:text-xl">{streamDescription}</p>
        </div>
        <img
          className="max-w-[350px] object-contain "
          src={landingImg3}
          alt="landing-img"
        />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <div className="inner-container bg-cover text-white grid grid-cols-1 md:grid-cols-2 py-[7%] place-items-center gap-20">
        <div className="text-center md:text-left md:order-2">
          <h1 className="text-[32px] md:text-5xl font-bold mb-5">
            {profileHeading}
          </h1>
          <p className="text-md md:text-xl">{profileDescription}</p>
        </div>
        <img
          className="max-w-[350px] object-contain md:order-1"
          src={landingImg4}
          alt="landing-img"
        />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <div className="inner-container bg-cover text-white py-20">
        {option === "English" ? (
          <h1 className="text-[32px] md:text-5xl font-bold mb-5 text-center">
            Frequently Asked Questions
          </h1>
        ) : (
          <h1 className="text-[32px] md:text-5xl font-bold mb-5 text-center">
            अक्सर पूछे जाने वाले सवाल
          </h1>
        )}
        <AccordianComponent />
      </div>
      <hr className="border-[5px] border-[#232323]" />
      <Footer />
    </>
  );
};

export default Landing;
