import React from "react";

const SearchBoxHeader = React.lazy(() => import("./SearchBoxHeader"));
const DateList = React.lazy(() => import("./DateList"));
const Theme = React.lazy(() => import("./Theme"));

const Header = (): JSX.Element => {
  return (
    <div className="shadow-md dark:shadow-md dark:shadow-gray-700 pt-5 px-4 mb-5">
      <div className="flex justify-between align-middle mb-2">
        <h1 className="">نتایج زنده</h1>
        <Theme />
      </div>
      <SearchBoxHeader />
      <DateList />
    </div>
  );
};

export default Header;
