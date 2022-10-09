import React from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleSignin = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={handleSignin}>Sign In with google popup</button>
    </div>
  );
};

export default SignIn;
