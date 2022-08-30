import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../Redux/hookRedux";
import { getToday } from "../components/getToday";
import { CardLeaguesType } from "../types";
const CardLeagues = React.lazy(() => import("../components/Games/CardLeague"));

const HomePage = () => {
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let today: string = getToday();
    dispatch({ type: "WATCH_GET_LIST_GAMES", peyload: today });
  }, []);
  return (
    <div className="container w-full mx-auto">
      { selector.listGamesReducer === "loading" ? (
        <Loading />
      ) : (
        Object.entries(selector.listGamesReducer).map(
          (
            item: (string | CardLeaguesType | any)[],
            index: number
          ): JSX.Element => {
            return <CardLeagues leagueMatches={item[1]} key={index} />;
          }
        )
      )}
    </div>
  );
};

export default HomePage;
