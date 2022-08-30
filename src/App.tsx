import React, { Suspense } from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Loading from "./components/Loading";
const Header = React.lazy(() => import("./components/Header/Header"));
const RenderRouter = React.lazy(() => import("./components/RenderRouter"));
const HandleError = React.lazy(
  () => import("./components/HandleError/HandleError")
);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Loading />}>
        <HandleError>
          <RenderRouter />
        </HandleError>
      </Suspense>
    </Provider>
  );
};

export default App;
