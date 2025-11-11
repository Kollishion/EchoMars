interface FormSpanErrorProps {
  FormError: string;
}

const FormSpanError = ({ FormError }: FormSpanErrorProps) => {
  return <span className="text-red-500 text-xs italic">{FormError}</span>;
};

export default FormSpanError;
