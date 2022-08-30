import React from "react";

const Home = React.lazy(() => import("./pages/HomePage"));

const routers: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Home /> },
];

export default routers;
