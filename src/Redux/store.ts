import { createStore, combineReducers, applyMiddleware } from "redux";
import { dateReducer } from "./Reducer/dateReducer";
import createSagaMiddleware,{SagaMiddleware} from "redux-saga";
import { rootSaga } from "./sagas";
import { listGamesReducer } from "./Reducer/listGamesReducer";

const sagaMiddleware:SagaMiddleware<{}> = createSagaMiddleware();

const store = createStore(
  combineReducers({ dateReducer, listGamesReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
