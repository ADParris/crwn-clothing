import { FirebaseError } from "firebase/app";
import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  SignInFormButtonsContainer,
  SignInFormContainer,
  SignInFormTitle,
} from "./sign-in-form.styles";

const initialFormFieldsState = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsState);
  const { email, password } = formFields;

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword({
        email,
        password,
      });

      if (!response) return;
      const { user } = response;

      resetFormFields();
    } catch (error) {
      const err = error as FirebaseError;

      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          alert("Incorrect username or password.");
          break;
        default:
          console.error(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(initialFormFieldsState);
  };

  return (
    <SignInFormContainer>
      <SignInFormTitle>Already have an account?</SignInFormTitle>
      <span>Sign in with email and password...</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={email}
        />

        <FormInput
          label="Password"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={password}
        />

        <SignInFormButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google-sign-in"
            onClick={signInWithGoogle}
            type="button"
          >
            Google sign in
          </Button>
        </SignInFormButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
