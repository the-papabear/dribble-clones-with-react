import { $Input } from "./Input.styled";
import { useState } from "react";

const Input = () => {
  const [placeholder, setPlaceholder] = useState(false);
  return (
    <$Input
      type="text"
      placeholder={placeholder ? "Search" : "Try people, groups etc"}
      onClick={handleClick}
    ></$Input>
  );
  function handleClick() {
    setPlaceholder(!placeholder);
  }
};

export { Input };
