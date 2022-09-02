import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/index.scss";
const $root = document.querySelector<HTMLDivElement>("#root");
if (!$root) {
  throw new Error("<div id=root></div> が見つかりません");
}
createRoot($root).render(<App />);
