import { FormInputLabel, GroupContainer, Input } from "./form-input.styles";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  const isActive =
    typeof otherProps.value === "string" && otherProps.value?.length > 0;

  return (
    <GroupContainer>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={isActive.toString()}>{label}</FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
