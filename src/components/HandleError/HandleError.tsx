import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hookRedux";

const ErrVpn = React.lazy(() => import("./ErrVpn"));
const ErrOffline = React.lazy(() => import("./ErrOffline"));

const HandleError = (props: any) => {
  const [offline, setOffline] = useState(false);
  const selector = useAppSelector((state: any) => state);
  useEffect(() => {
    console.log("render");
    if (navigator.onLine) {
      setOffline(false);
    } else {
      setOffline(true);
    }
    window.addEventListener("online", () => setOffline(false));
    window.addEventListener("offline", () => setOffline(true));
  }, []);
  return (
    <>
      {offline ? (
        <ErrOffline />
      ) : selector.listGamesReducer === "errVpn" ? (
        <ErrVpn />
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default HandleError;
