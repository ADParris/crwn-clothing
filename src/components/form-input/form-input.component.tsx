import "./form-input.styles.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  const isTyping =
    typeof otherProps.value === "string" && otherProps.value.length;

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${isTyping ? "shrink" : ""} form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
