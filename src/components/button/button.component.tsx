import "./button.styles.scss";

type ButtonType = "google-sign-in" | "inverted";

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
