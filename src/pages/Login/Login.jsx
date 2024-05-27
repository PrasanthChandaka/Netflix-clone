import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (signState == "signIn") {
      try {
        const userDetails = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userDetails);
        toast.success(`Welcome ${userDetails.user.email.split("@")[0]}`);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        localStorage.setItem(
          "token",
          JSON.stringify(userDetails.user.accessToken)
        );
        navigate("/home");
      } catch (e) {
        toast.error(e.message.split("/")[1].split(")")[0].split("-").join(" "));
      }
    } else {
      try {
        const userDetails = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userDetails);
        await addDoc(collection(db, "userdetails"), {
          uid: userDetails.user.uid,
          name,
          authPrivider: "local",
          email,
          password,
        });
        toast.success("Success we have created your accout.You can login Now!");
        setSignState("signIn");
      } catch (e) {
        toast.error(e.message.split("/")[1].split(")")[0].split("-").join(" "));
      }
    }
    setName("");
    setEmail("");
    setPassword("");
    setLoader(false);
  };
  const sign = () => {
    setSignState(signState == "signIn" ? "signUp" : "signIn");
  };

  return loader ? (
    <div className="loader">
      <img src={netflix_spinner} alt="loader" />
    </div>
  ) : (
    <div className="login">
      <Link to="/">
        <img className="netflix" src={logo} alt="logo" />
      </Link>
      <form onSubmit={submitForm}>
        <h1>{signState == "signIn" ? "Sign In" : "Sign Up"}</h1>
        {signState == "signUp" && (
          <input
            required
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          required
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {signState == "signIn" ? "Sign In" : "Sign Up"}
        </button>
        <div className="checkbox-container">
          <div>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        {signState == "signIn" ? (
          <p className="text">
            New to Netflix?<span onClick={sign}>Sign Up Now</span>
          </p>
        ) : (
          <p className="text">
            Already have an Account?<span onClick={sign}>Sign In Now</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
