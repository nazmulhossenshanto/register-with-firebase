import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Components/Root.jsx";
import FirebaseAuthProvider from "./Context/FirebaseAuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>
);
