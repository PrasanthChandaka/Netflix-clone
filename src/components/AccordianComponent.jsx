import React, { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { store } from "../context";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const englishContent = [
  {
    id: 1,
    title: "What is Netflix?",
    content:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },

  {
    id: 2,
    title: "How much does Netflix cost?",
    content:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    title: "Where can I watch?",
    content:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    title: "How do I cancel?",
    content:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    title: "What can I watch on Netflix?",
    content:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    title: "Is Netflix good for kids?",
    content:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const hindiContent = [
  {
    id: 1,
    title: "Netflix क्या है?",
    content:
      "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!",
  },

  {
    id: 2,
    title: "Netflix की कीमत कितनी है?",
    content:
      "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.",
  },
  {
    id: 3,
    title: "मैं कहां देख सकता हूं?",
    content:
      "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं.",
  },
  {
    id: 4,
    title: "मैं कैसे कैंसल करूं?",
    content:
      "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
  },
  {
    id: 5,
    title: "मैं Netflix पर क्या देख सकता/सकती हूं?",
    content:
      "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",
  },
  {
    id: 6,
    title: "क्या Netflix बच्चों के लिए ठीक है?",
    content:
      "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.",
  },
];

const AccordianComponent = () => {
  const [expand, setExpand] = useState(false);
  const { option } = useContext(store);
  const navigate = useNavigate();
  return (
    <ul className="touch-pan-y flex flex-col gap-3 text-sm md:text-xl">
      {option === "English"
        ? englishContent.map((each) => (
            <li key={each.id}>
              <div
                className="flex justify-between items-center p-7 bg-[#2d2d2d] hover:bg-[#414141]"
                onClick={() => setExpand(!expand)}
              >
                <p>{each.title}</p>
                {expand ? <RxCross1 /> : <FiPlus />}
              </div>
              {expand && (
                <p className="bg-[#2d2d2d] p-5 mt-[1px] leading-relaxed">
                  {each.content}
                </p>
              )}
            </li>
          ))
        : hindiContent.map((each) => (
            <li key={each.id}>
              <div
                className="flex justify-between items-center p-7 cursor-pointer bg-[#2d2d2d] hover:bg-[#414141]"
                onClick={() => setExpand(!expand)}
              >
                <p>{each.title}</p>
                {expand ? <RxCross1 /> : <FiPlus />}
              </div>
              {expand && (
                <p className="bg-[#2d2d2d] p-5 mt-[1px] leading-relaxed">
                  {each.content}
                </p>
              )}
            </li>
          ))}
      <p className="text-center mt-10">
        {option === "English"
          ? "Ready to watch? Enter your email to create or restart your membership."
          : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}
      </p>
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
          placeholder={option === "English" ? "Email Address" : "ईमेल एड्रेस"}
          className="rounded-md p-4 w-[70%] max-w-[340px] bg-[rgba(0,0,0,0.6)] border placeholder:text-[#c0bebe] outline-none"
        />
        <button
          className="bg-[#C11119] inline-flex items-center gap-2 p-4 rounded-md text-xl font-semibold"
          type="submit"
        >
          {option === "English" ? "Get Started" : "शुरू करें"}
          <IoIosArrowForward />
        </button>
      </form>
    </ul>
  );
};

export default AccordianComponent;
