import { StrictMode } from "react";
import ReactDOMClient from "react-dom/client";
import React from 'react';
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
