import React, { useState, useRef } from "react";
import Header from "./Header";
import Validate from "../utills/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../utills/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utills/users";
import { netFlixBGImg } from "../utills/gptConstants";
const Login = () => {
  const [isSignInPage, setSignInPage] = useState(true);
  const [errorInValidation, setErrorInValidation] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch = useDispatch()
  const toogleSignInSignUp = () => {
    setSignInPage(!isSignInPage);
  };
  


  const handleSubmitClick = () => {
    // we need email and password
    let emailVal = email.current.value;
    let passVal = password.current.value;
    const res = Validate(emailVal, passVal);
    setErrorInValidation(res);

    if (res === null) {
      if (!isSignInPage) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
          
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user,{
                displayName:username.current.value
            }).then(()=>{
                
                onAuthStateChanged(auth, (user) => {
                    console.log(user)
                  if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    const uid = auth.currentUser.uid;
                    const email = auth.currentUser.email;
                    const displayName = auth.currentUser.displayName
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                   
                   
                  } else {
                    
                    dispatch(removeUser())
                    
                  }
                });
                
            }).catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorInValidation(errorCode + " " + errorMessage);
                
            })
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorInValidation(errorCode + " " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorInValidation(errorCode+" "+errorMessage);
            
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={netFlixBGImg}
          alt="netflix-bg-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-black w-4/12 absolute my-36 mx-auto left-0 right-0 p-12 bg-opacity-80"
      >
        <h2 className="m-2 p-2 text-3xl font-bold">
          {isSignInPage ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInPage && (
          <input
            ref={username}
            className="m-2 p-2 w-full rounded-md bg-gray-700"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="m-2 p-2 w-full rounded-md bg-gray-700"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="m-2 p-2 w-full rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 font-light">{errorInValidation}</p>
        <button
          onClick={handleSubmitClick}
          className="m-2 p-2 w-full bg-red-600 rounded-md"
        >
          {isSignInPage ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between">
          <div>
            <input
              className=""
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value="rememberMe"
              checked
            />
            <label className="font-light " for="rememberMe">
              Remember me
            </label>
          </div>
          <div>
            <p className="font-light">Need help?</p>
          </div>
        </div>
        <div className="font-thin text-sm m-2 p-2">
          <p className="cursor-pointer font-bold" onClick={toogleSignInSignUp}>
            {isSignInPage
              ? `New to Netflix ? Sign up now.`
              : `Existing User ? Login now`}{" "}
          </p>
          <br />

          <p>
            Sign in is protected by Google reCAPTCHA to ensure you’re not a
            bot.[CDATA].Learn more.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
