import { FirebaseError } from "firebase/app";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

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
      console.log(response);
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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(initialFormFieldsState);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google-sign-in"
            onClick={signInWithGoogle}
            type="button"
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
