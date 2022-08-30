import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider } from "next-themes";
const App = React.lazy(() => import("./App"));
const ErrorBoundary = React.lazy(
  () => import("./components/HandleError/ErrorBoundary")
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); 

root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <ThemeProvider attribute="class" defaultTheme="light">
          <App />
        </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
