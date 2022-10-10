import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleGoogleSignin = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={handleGoogleSignin}>Sign In with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
