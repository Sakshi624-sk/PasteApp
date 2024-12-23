import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="w-screen min-h-screen overflow-hidden">
        <App />
        <Toaster position="top-right"/>
      </div>
    </Provider>
  </StrictMode>
);
