import "./button.styles.scss";

interface ButtonType {
  google: "google-sign-in";
  inverted: "inverted";
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

const Button = ({ buttonType, children, ...otherProps }: ButtonProps) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
