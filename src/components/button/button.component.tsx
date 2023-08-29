import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

type ButtonType = "base" | "google-sign-in" | "inverted";

const getButton = (buttonType: ButtonType) => {
  switch (buttonType) {
    case "base":
      return BaseButton;
    case "google-sign-in":
      return GoogleSignInButton;
    case "inverted":
      return InvertedButton;
    default:
      return BaseButton;
  }
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

const Button = ({
  buttonType = "base",
  children,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
