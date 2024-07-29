import { PulseLoadingAnimation } from "@modules/react";
import { useState } from "react";

import "./index.css";
import Button from "components/Button";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <PulseLoadingAnimation />
      <Button label="Button" onClick={() => {}} primary />
    </>
  );
};
