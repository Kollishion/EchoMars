import React from "react";

interface MyButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ label, onClick, disabled = false }: MyButtonProps) => {
  return <div>Button</div>;
};

export default Button;
