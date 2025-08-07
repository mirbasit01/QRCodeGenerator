import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <QRCodeGenerator/>
    </>
  );
}

export default App;
