import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hookRedux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Loading from "../Loading";
import { getToday } from "../getToday";
const DateList = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string | boolean>(false);
  const selector = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "SET_DATES" });
    setTimeout(() => {
      setActiveTab(getToday());
    }, 500);
  }, []);

  const handleChange = (event: any, date: string) => {
    dispatch({ type: "LOADING" });
    dispatch({ type: "WATCH_GET_LIST_GAMES", peyload: date });
    setActiveTab(date);
  };
  return (
    <div className="flex no-scrollbar overflow-x-scroll scroll-smooth">
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          {selector.dateReducer === "loading" ? (
            <Loading />
          ) : (
            selector.dateReducer.map((item: any, index: any) => {
              return (
                <Tab
                  key={index}
                  className="dark:text-white text-gray-900"
                  value={item.date}
                  label={item.nameDay}
                />
              );
            })
          )}
        </Tabs>
      </Box>
    </div>
  );
};

export default DateList;
