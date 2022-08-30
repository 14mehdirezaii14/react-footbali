import { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CardLeaguesType, MatchesType } from "../../types";
let moment = require("moment-jalaali");
const CardLeagues = ({ leagueMatches }: { leagueMatches: CardLeaguesType }) => {
  const [open, setOpen] = useState(true);
  return (
    <Card className="dark:bg-gray-900 dark:text-white mx-2 my-5">
      <CardContent>
        <button
          className="flex w-full align-middle   justify-between"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          <img className="w-10" src={leagueMatches.leagueImage} alt="" />
          {leagueMatches.nameLeague}
          <div className="float-left pb-3">
            {open ? <ExpandLess /> : <ExpandMore />}
          </div>
        </button>
      </CardContent>
      <Collapse in={open}>
        <CardContent className="border-t  dark:border-t-gray-600">
          {leagueMatches.matches.map((item: MatchesType, index: number) => {
            return (
              <div key={index}>
                <div className="flex align-middle justify-around mb-3 pb-3 border-b  dark:border-b-gray-600">
                  <img
                    className="w-8 pl-3 text-center"
                    src={item.away.logo}
                    alt=""
                  />
                  <p className="text-xs text-center">{item.away.name}</p>
                  <p className="px-2 text-sm text-center">{moment(item.timeGame).format("hh:mm")}</p>
                  <p className="text-xs text-center">{item.home.name}</p>
                  <img
                    className="w-8 pr-3 text-center"
                    src={item.home.logo}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardLeagues;
