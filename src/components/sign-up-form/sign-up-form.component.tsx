import { FirebaseError } from "firebase/app";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpFormContainer, SignUpFormTitle } from "./sign-up-form.styles";

const initialFormFieldsState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsState);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword({
        email,
        password,
      });

      if (!response) return;

      const { user } = response;

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      const err = error as FirebaseError;
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use!");
        return;
      }
      console.error("Error creating user...", `💥 ${err.code}: ${err.message}`);
    }
  };

  const resetFormFields = () => {
    setFormFields(initialFormFieldsState);
  };

  return (
    <SignUpFormContainer>
      <SignUpFormTitle>Don't have an account?</SignUpFormTitle>
      <span>Sign up with email and password...</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          required
          type="password"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
